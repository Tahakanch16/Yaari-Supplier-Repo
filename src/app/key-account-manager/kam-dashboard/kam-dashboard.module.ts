import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KamDashboardRoutingModule } from './kam-dashboard-routing.module';
import { ViewSupplierDetailsComponent } from './view-supplier-details/view-supplier-details.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';
import { ViewSupplierProfileComponent } from './view-supplier-profile/view-supplier-profile.component';
import { ViewSupplierSalesDetailsComponent } from './view-supplier-sales-details/view-supplier-sales-details.component';
import { ViewSupplierSalesTableComponent } from './view-supplier-sales-table/view-supplier-sales-table.component';


@NgModule({
  declarations: [
    ViewSupplierDetailsComponent,
    ViewSupplierProfileComponent,
    ViewSupplierSalesDetailsComponent,
    ViewSupplierSalesTableComponent
  ],
  imports: [
    CommonModule,
    KamDashboardRoutingModule,
    NavbarModule,
    AngularMaterialModule,
    SidebarModule
  ],
  exports:[
    ViewSupplierDetailsComponent,
    ViewSupplierProfileComponent,
    ViewSupplierSalesDetailsComponent,
    ViewSupplierSalesTableComponent
  ]
})
export class KamDashboardModule { }
