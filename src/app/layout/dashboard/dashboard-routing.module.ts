import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'', loadChildren: () => import('src/app/layout/dashboard/dashboard-page/dashboard-page.module').then( m => m.DashboardPageModule)},
      {path:'payment', loadChildren: () => import('src/app/layout/dashboard/payments/payments.module').then( m => m.PaymentsModule)},
      {path:'catalogue-status', loadChildren: () => import('src/app/layout/dashboard/catalogue-status/catalogue-status.module').then( m => m.CatalogueStatusModule)},
      {path:'exchange', loadChildren: () => import('src/app/layout/dashboard/exchange-return/exchange-return.module').then( m => m.ExchangeReturnModule)},
      {path:'quality', loadChildren: () => import('src/app/layout/dashboard/quality-scorecard/quality-scorecard.module').then( m => m.QualityScorecardModule)},
      {path:'rating-review', loadChildren: () => import('src/app/layout/dashboard/rating-review/rating-review.module').then( m => m.RatingReviewModule)}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
