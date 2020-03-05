import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor() { }

  SideMenus() {
    return fetch('../../assets/js/sidemenu.json').then(res => res.json())
        .then(json =>   json );
  }
}
