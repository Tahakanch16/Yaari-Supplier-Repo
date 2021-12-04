import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CatalogueStatusComponent } from './catalogue-status.component';

const routes: Routes = [
  {
    path:'',
    component:CatalogueStatusComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueStatusRoutingModule { }
