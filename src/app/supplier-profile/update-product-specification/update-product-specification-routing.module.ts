import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { CatalogueSpecificationComponent } from './catalogue-specification/catalogue-specification.component';
import { UpdateProductSpecificationModule } from './update-product-specification.module';

const routes: Routes = [

  {
    path:"add_product_specifiaction", children:[
      {
        path:"catalogue_list",
        component:CatalogueListComponent
      },
      {
        path:"catalogue_specification",
        component:CatalogueSpecificationComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateProductSpecificationRoutingModule { }
