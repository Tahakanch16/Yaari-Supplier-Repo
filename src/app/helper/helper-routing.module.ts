import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SubContactUsComponent } from './sub-contact-us/sub-contact-us.component';

const routes: Routes = [  

  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"sub_contact",
    component:SubContactUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelperRoutingModule { }
