import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../helper/contact-us/contact-us.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SupplierHomeComponent } from './supplier-home/supplier-home.component';
import { UpdateProductSpecificationModule } from './update-product-specification/update-product-specification.module';
import { UploadProductCatalogueComponent } from './upload-product-catalogue/upload-product-catalogue.component';

const routes: Routes = [

  {
    path:"supplier_home",
    component:SupplierHomeComponent
  },
  {
    path:"upload_product_catalogue",
    component:UploadProductCatalogueComponent
  },
  {
    path:"view_profile_info",
    component:ProfileInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierProfileRoutingModule { }
