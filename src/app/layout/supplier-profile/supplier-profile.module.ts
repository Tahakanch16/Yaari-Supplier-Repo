import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierProfileRoutingModule } from './supplier-profile-routing.module';
import { SupplierProfileComponent } from './supplier-profile.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SupplierProfileComponent
  ],
  imports: [
    CommonModule,
    SupplierProfileRoutingModule,
    NavbarModule,
    SidebarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SupplierProfileModule { }
