import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityScorecardRoutingModule } from './quality-scorecard-routing.module';
import { QualityScorecardComponent } from './quality-scorecard.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';


@NgModule({
  declarations: [
    QualityScorecardComponent
  ],
  imports: [
    CommonModule,
    QualityScorecardRoutingModule,
    NavbarModule
  ]
})
export class QualityScorecardModule { }
