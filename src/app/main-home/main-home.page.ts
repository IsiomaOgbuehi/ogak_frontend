import {Component, NgModule, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GeneralServiceService } from '../providers/general-service.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {
    MENU: any;

  constructor( private menu: MenuController, private generalService: GeneralServiceService ) {
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

}
