import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  {
    path:'',
    component:LayoutComponent,
    children:[
      { path: "home", loadChildren : () => import('src/app/layout/home/home.module').then(m => m.HomeModule)},
      { path: "upload", loadChildren : () => import('src/app/layout/upload-product-catalogue/upload-product-catalogue.module').then(m => m.UploadProductCatalogueModule)},
      { path: "dashboard", loadChildren : () => import('src/app/layout/dashboard/dashboard.module').then(m => m.DashboardModule)},
      { path: "profile", loadChildren : () => import('src/app/layout/supplier-profile/supplier-profile.module').then(m => m.SupplierProfileModule)},
      { path: "contact", loadChildren : () => import('src/app/layout/contact-us/contact-us.module').then(m => m.ContactUsModule)},
      { path: "change-password", loadChildren : () => import('src/app/layout/change-password/change-password.module').then(m => m.ChangePasswordModule)}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
