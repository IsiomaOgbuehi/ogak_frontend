import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GeneralServiceService } from '../providers/general-service.service';

@Component({
  selector: 'app-selected-appliance',
  templateUrl: './selected-appliance.page.html',
  styleUrls: ['./selected-appliance.page.scss'],
})
export class SelectedAppliancePage implements OnInit {
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
