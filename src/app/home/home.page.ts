import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { AuthService } from '../providers/auth.service';
import { SIGNIN_USER_MUTATION, GET_USER_MAIL } from '../graphql';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    login = true; // switch between Login and SignUp
    email = '';
    password = '';
    name = '';

  constructor(private router: Router, private apollo: Apollo, private authService: AuthService) {
      this.password = '';
  }

  loginUser() {
      this.apollo.mutate({
          mutation: GET_USER_MAIL,
          variables: {
              phone: this.password
          }
      }).subscribe((result) => {
              // @ts-ignore
          this.email = result.data.getUser.email;
          // console.log(result.data.getUser.id);

          this.apollo.mutate({
              mutation: SIGNIN_USER_MUTATION,
              variables: {
                  email: this.email,
                  password: this.password
              }
          }).subscribe((res) => {
              // @ts-ignore
              const id = result.data.getUser.id;
              // @ts-ignore
              const token = res.data.tokenAuth.token;
              this.authService.saveUserData(id, token, this.email);
              console.log(res);

              this.router.navigate(['/main-home']);

          }, (error) => {
              alert(error);
          });

      }, (error) => {
          alert(error);
      });
  }
}
