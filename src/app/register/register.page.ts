import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GeneralServiceService } from '../providers/general-service.service';
import { UserRegistration } from '../interfaces/registration';
import { Apollo } from 'apollo-angular';
import {CREATE_USER_MUTATION, CreateLinkMutationResponse} from '../graphql';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
MENU: any;
private userData: UserRegistration;

// firstName = '';
  password = '';

  constructor(private menu: MenuController, private generalService: GeneralServiceService, private apollo: Apollo) {
    this.userData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      state: '',
      lga: '',
      homeAddress: '',
      businessAddress: '',
      gender: '',
      loanCategory: '',
      pin: 'OGAK5432SN',
      status: 'active',
      loanStatus: 'active',
      password: 0,
      passwordString: 0,
    };
  }

  ngOnInit() {
      this.generalService.SideMenus().then(res => {
          this.MENU = res;
      });
  }
    openSideMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    submitData() {
        this.userData.password = this.userData.phone;
        this.userData.passwordString = this.userData.phone;
        this.apollo.mutate({
            mutation: CREATE_USER_MUTATION,
            variables: this.userData
        }).subscribe((response) => {
            console.log(response);
        });
    }

}
