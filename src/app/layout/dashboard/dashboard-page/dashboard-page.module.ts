import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';


@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    NavbarModule,
    SidebarModule
  ]
})
export class DashboardPageModule { }
