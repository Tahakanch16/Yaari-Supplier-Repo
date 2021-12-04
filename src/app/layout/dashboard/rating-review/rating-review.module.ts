import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingReviewRoutingModule } from './rating-review-routing.module';
import { RatingReviewComponent } from './rating-review.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';


@NgModule({
  declarations: [
    RatingReviewComponent
  ],
  imports: [
    CommonModule,
    RatingReviewRoutingModule,
    NavbarModule
  ]
})
export class RatingReviewModule { }
