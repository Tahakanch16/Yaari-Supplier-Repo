import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SupplierProfileComponent } from './supplier-profile.component';

const routes: Routes = [

  {
    path:'',
    component:SupplierProfileComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierProfileRoutingModule { }
