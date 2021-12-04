import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SupplierNavbarComponent } from './supplier-navbar/supplier-navbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubSupplierNavbarComponent } from './sub-supplier-navbar/sub-supplier-navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SupplierNavbarComponent,
    SubSupplierNavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    AngularMaterialModule,
    NgbModule
  ],
  exports:[
    NavbarComponent,
    SupplierNavbarComponent,
    SubSupplierNavbarComponent
  ]
})
export class NavbarModule { }
