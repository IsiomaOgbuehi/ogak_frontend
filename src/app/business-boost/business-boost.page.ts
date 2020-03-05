import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../providers/general-service.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-business-boost',
  templateUrl: './business-boost.page.html',
  styleUrls: ['./business-boost.page.scss'],
})
export class BusinessBoostPage implements OnInit {
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
