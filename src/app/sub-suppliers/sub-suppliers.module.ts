import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubSuppliersRoutingModule } from './sub-suppliers-routing.module';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectProfileComponent
  ],
  imports: [
    CommonModule,
    SubSuppliersRoutingModule,
    NavbarModule,
    SidebarModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    SelectProfileComponent
  ]
})
export class SubSuppliersModule { }
