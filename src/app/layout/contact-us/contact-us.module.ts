import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    NavbarModule,
    SidebarModule
  ]
})
export class ContactUsModule { }
