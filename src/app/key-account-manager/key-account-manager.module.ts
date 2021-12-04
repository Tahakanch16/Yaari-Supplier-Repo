import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyAccountManagerRoutingModule } from './key-account-manager-routing.module';
import { KamLoginComponent } from './kam-login/kam-login.component';
import { KamHomeComponent } from './kam-home/kam-home.component';
import { RegisterNewSupplierComponent } from './register-new-supplier/register-new-supplier.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { KamDashboardModule } from './kam-dashboard/kam-dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KamLoginComponent,
    KamHomeComponent,
    RegisterNewSupplierComponent
  ],
  imports: [
    CommonModule,
    KeyAccountManagerRoutingModule,
    NavbarModule,
    SidebarModule,
    AngularMaterialModule,
    KamDashboardModule,
    ReactiveFormsModule
  ],
  exports:[
    KamLoginComponent,
    KamHomeComponent,
    RegisterNewSupplierComponent,
    KamDashboardModule
  ]
})
export class KeyAccountManagerModule { }
