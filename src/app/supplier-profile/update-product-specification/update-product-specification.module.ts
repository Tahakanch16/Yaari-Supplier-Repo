import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProductSpecificationRoutingModule } from './update-product-specification-routing.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { CatalogueSpecificationComponent } from './catalogue-specification/catalogue-specification.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  declarations: [
    CatalogueListComponent,
    CatalogueSpecificationComponent
  ],
  imports: [
    CommonModule,
    UpdateProductSpecificationRoutingModule,
    NavbarModule,
    AngularMaterialModule
  ],
  exports:[
    CatalogueListComponent,
    CatalogueSpecificationComponent
  ]
})
export class UpdateProductSpecificationModule { }
