import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './helper/error-page/error-page.component';

const routes: Routes = [

    {path:'', loadChildren : () => import('src/app/login/login.module').then(m => m.LoginModule)},
    {path:'login', loadChildren : () => import('src/app/login/login.module').then(m => m.LoginModule)},
    {path:'register', loadChildren : () => import('src/app/register/register.module').then(m => m.RegisterModule)},
    {path:'forget-password', loadChildren : () => import('src/app/forget-password/forget-password.module').then(m => m.ForgetPasswordModule)},
    {path:'app', loadChildren : () => import('src/app/layout/layout.module').then(m => m.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
