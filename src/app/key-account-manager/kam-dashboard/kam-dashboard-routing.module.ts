import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSupplierDetailsComponent } from './view-supplier-details/view-supplier-details.component';
import { ViewSupplierProfileComponent } from './view-supplier-profile/view-supplier-profile.component';
import { ViewSupplierSalesDetailsComponent } from './view-supplier-sales-details/view-supplier-sales-details.component';
import { ViewSupplierSalesTableComponent } from './view-supplier-sales-table/view-supplier-sales-table.component';

const routes: Routes = [

  {
    path:"dashboard",children:[
      {
        path:"suppliers_list",
        component:ViewSupplierDetailsComponent
      },
      {
        path:"supplier_sales_list",
        component:ViewSupplierSalesDetailsComponent
      }
    ]
  },
  {
    path:"suppliers_list",children:[
      {
        path:"view_supplier",
        component:ViewSupplierProfileComponent
      }
    ]
  },
  {
    path:"supplier_sales_list",children:[

      {
        path:"view_sales_table",
        component:ViewSupplierSalesTableComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KamDashboardRoutingModule { }
