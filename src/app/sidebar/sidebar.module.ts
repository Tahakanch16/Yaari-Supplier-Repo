import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidbarImageComponent } from './sidbar-image/sidbar-image.component';
import { SidebarUploadImageComponent } from './sidebar-upload-image/sidebar-upload-image.component';


@NgModule({
  declarations: [
    SidbarImageComponent,
    SidebarUploadImageComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule
  ],
  exports:[
    SidbarImageComponent,
    SidebarUploadImageComponent
  ]

})
export class SidebarModule { }
