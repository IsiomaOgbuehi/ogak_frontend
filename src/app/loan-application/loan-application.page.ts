import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GeneralServiceService } from '../providers/general-service.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.page.html',
  styleUrls: ['./loan-application.page.scss'],
})
export class LoanApplicationPage implements OnInit {
    MENU: any;
  constructor(private menu: MenuController, private generalService: GeneralServiceService) { }

  ngOnInit() {
      this.generalService.SideMenus().then(res => {
          this.MENU = res;
      });
  }
    openSideMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }

}
