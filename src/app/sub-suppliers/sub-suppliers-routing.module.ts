import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectProfileComponent } from './select-profile/select-profile.component';

const routes: Routes = [

  {
    path:"select_profile",
    component:SelectProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubSuppliersRoutingModule { }
