import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'main-home', loadChildren: './main-home/main-home.module#MainHomePageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'loan', loadChildren: './loan/loan.module#LoanPageModule' },
  { path: 'loan-application', loadChildren: './loan-application/loan-application.module#LoanApplicationPageModule' },
  { path: 'business-boost', loadChildren: './business-boost/business-boost.module#BusinessBoostPageModule' },
  { path: 'selected-appliance', loadChildren: './selected-appliance/selected-appliance.module#SelectedAppliancePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
