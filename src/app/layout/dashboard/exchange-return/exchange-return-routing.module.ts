import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ExchangeReturnComponent } from './exchange-return.component';

const routes: Routes = [

  {
    path:'',
    component:ExchangeReturnComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeReturnRoutingModule { }
