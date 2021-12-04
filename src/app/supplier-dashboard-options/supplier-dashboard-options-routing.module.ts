import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueIdComponent } from './catalogue/catalogue-id/catalogue-id.component';
import { CatalogueStatusComponent } from './catalogue/catalogue-status/catalogue-status.component';
import { ExchangeReturnComponent } from './exchange-return/exchange-return.component';
import { PaymentsComponent } from './payments/payments.component';
import { QualityScorecardComponent } from './quality-scorecard/quality-scorecard.component';
import { RatingReviewComponent } from './rating-review/rating-review.component';
import { SupplierDashboardHomeComponent } from './supplier-dashboard-home/supplier-dashboard-home.component';

const routes: Routes = [

  {
    path:"dashboard",
    component:SupplierDashboardHomeComponent
  },

  {
    path:"dashboard",children:[
      {
        path:"payments",
        component:PaymentsComponent
      },
      {
        path:"catalogue_id",
        component:CatalogueIdComponent
      },
      {
        path:"catalogue_status",
        component:CatalogueStatusComponent
      },
      {
        path:"exchange_return",
        component:ExchangeReturnComponent
      },
      {
        path:"quality_scorecard",
        component:QualityScorecardComponent
      },
      {
        path:"rating_review",
        component:RatingReviewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierDashboardOptionsRoutingModule { }
