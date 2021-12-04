import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadProductCatalogueRoutingModule } from './upload-product-catalogue-routing.module';
import { UploadProductCatalogueComponent } from './upload-product-catalogue.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SidebarModule } from 'src/app/sidebar/sidebar.module';


@NgModule({
  declarations: [
    UploadProductCatalogueComponent
  ],
  imports: [
    CommonModule,
    UploadProductCatalogueRoutingModule,
    NavbarModule,
    SidebarModule
  ]
})
export class UploadProductCatalogueModule { }
