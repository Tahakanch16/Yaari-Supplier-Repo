import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ErrorPageComponent } from '../helper/error-page/error-page.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:"",
    redirectTo:"/signin",
    pathMatch:"full"  
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:"change_password",
    component:ChangePasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthenticationRoutingModule { }
