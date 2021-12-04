import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UploadProductCatalogueComponent } from './upload-product-catalogue.component';

const routes: Routes = [
  {
    path:'',
    component:UploadProductCatalogueComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadProductCatalogueRoutingModule { }
