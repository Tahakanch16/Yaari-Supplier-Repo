import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { SubContactUsComponent } from './sub-contact-us/sub-contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    SubContactUsComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    HelperRoutingModule,
    NavbarModule,
    SidebarModule
  ],
  exports:[
    ContactUsComponent,
    SubContactUsComponent,
    ErrorPageComponent
  ]
})
export class HelperModule { }
