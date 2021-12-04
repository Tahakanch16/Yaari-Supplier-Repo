import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueStatusRoutingModule } from './catalogue-status-routing.module';
import { CatalogueStatusComponent } from './catalogue-status.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';


@NgModule({
  declarations: [
    CatalogueStatusComponent
  ],
  imports: [
    CommonModule,
    CatalogueStatusRoutingModule,
    NavbarModule
  ]
})
export class CatalogueStatusModule { }
