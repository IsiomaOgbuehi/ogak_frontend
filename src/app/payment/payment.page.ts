import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../providers/general-service.service';
import {MenuController} from '@ionic/angular';

import Paystack, { setGlobalConfig } from 'paystack-simple';
import {GC_USER_ID} from '../constants';


setGlobalConfig({ key: 'pk_test_3c6e3421bae49211c86da1d9970cc3e141bb5c21' }); // Key has been set globally
const paymentInstance = Paystack();
paymentInstance.init(); // Optional - Fetch paystack script

// paymentInstance.addOptions({ // No need to add it here
//     amount: amount * 100,
//     email: EMAIL,
//     callback: (res) => {
//         // act on response
//     }
// });

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
    MENU: any;
    amount = 0;
    email: any;
  constructor(private menu: MenuController, private generalService: GeneralServiceService) {
      this.email = localStorage.getItem('USER_MAIL');
      console.log(this.email);

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

    makePayment() {
        paymentInstance.addOptions({ // No need to add it here
            amount: this.amount * 100,
            email: this.email,
            callback: (res) => {
                // act on response
            }
        });

        paymentInstance.pay();

  }

}
