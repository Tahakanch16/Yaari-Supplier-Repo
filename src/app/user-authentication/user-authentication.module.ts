import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthenticationRoutingModule } from './user-authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SignupComponent } from './signup/signup.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    UserAuthenticationRoutingModule,
    NavbarModule,
    AngularMaterialModule,
    SidebarModule,
    ReactiveFormsModule
  ],
  exports:[
    SigninComponent,
    SignupComponent,
    ChangePasswordComponent
  ]
})
export class UserAuthenticationModule { }
