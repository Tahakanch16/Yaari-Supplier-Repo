import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KamHomeComponent } from './kam-home/kam-home.component';
import { KamLoginComponent } from './kam-login/kam-login.component';
import { RegisterNewSupplierComponent } from './register-new-supplier/register-new-supplier.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyAccountManagerRoutingModule { }
