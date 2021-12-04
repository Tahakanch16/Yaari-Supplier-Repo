import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeReturnRoutingModule } from './exchange-return-routing.module';
import { ExchangeReturnComponent } from './exchange-return.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';


@NgModule({
  declarations: [
    ExchangeReturnComponent
  ],
  imports: [
    CommonModule,
    ExchangeReturnRoutingModule,
    NavbarModule
  ]
})
export class ExchangeReturnModule { }
