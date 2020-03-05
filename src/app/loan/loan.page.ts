import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../providers/general-service.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {
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
