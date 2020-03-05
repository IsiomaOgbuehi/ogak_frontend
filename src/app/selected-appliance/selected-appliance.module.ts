import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectedAppliancePage } from './selected-appliance.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedAppliancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectedAppliancePage]
})
export class SelectedAppliancePageModule {}
