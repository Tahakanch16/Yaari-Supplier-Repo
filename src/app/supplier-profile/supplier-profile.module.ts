import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierProfileRoutingModule } from './supplier-profile-routing.module';
import { SupplierHomeComponent } from './supplier-home/supplier-home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { UploadProductCatalogueComponent } from './upload-product-catalogue/upload-product-catalogue.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module'
import { UpdateProductSpecificationModule } from './update-product-specification/update-product-specification.module';
import { ProfileInfoComponent } from './profile-info/profile-info.component';


@NgModule({
  declarations: [
    SupplierHomeComponent,
    UploadProductCatalogueComponent,
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    SupplierProfileRoutingModule,
    NavbarModule,
    SidebarModule,
    AngularMaterialModule,
    UpdateProductSpecificationModule
  ],
  exports:[
    SupplierHomeComponent,
    UploadProductCatalogueComponent,
    UpdateProductSpecificationModule,
    ProfileInfoComponent

  ]
})
export class SupplierProfileModule { }
