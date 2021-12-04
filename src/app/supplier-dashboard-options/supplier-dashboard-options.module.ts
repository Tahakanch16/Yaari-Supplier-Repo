import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierDashboardOptionsRoutingModule } from './supplier-dashboard-options-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { SupplierDashboardHomeComponent } from './supplier-dashboard-home/supplier-dashboard-home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { CatalogueStatusComponent } from './catalogue/catalogue-status/catalogue-status.component';
import { CatalogueIdComponent } from './catalogue/catalogue-id/catalogue-id.component';
import { RatingReviewComponent } from './rating-review/rating-review.component';
import { QualityScorecardComponent } from './quality-scorecard/quality-scorecard.component';
import { ExchangeReturnComponent } from './exchange-return/exchange-return.component';

@NgModule({
  declarations: [
    PaymentsComponent,
    SupplierDashboardHomeComponent,
    CatalogueStatusComponent,
    CatalogueIdComponent,
    RatingReviewComponent,
    QualityScorecardComponent,
    ExchangeReturnComponent
  ],
  imports: [
    CommonModule,
    SupplierDashboardOptionsRoutingModule,
    NavbarModule,
    SidebarModule
  ],
  exports:[
    PaymentsComponent,
    SupplierDashboardHomeComponent,
    CatalogueStatusComponent,
    CatalogueIdComponent,
    RatingReviewComponent,
    QualityScorecardComponent,
    ExchangeReturnComponent
  ]
})
export class SupplierDashboardOptionsModule { }
