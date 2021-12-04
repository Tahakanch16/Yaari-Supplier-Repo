import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from './angular-material/angular-material.module'; 
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { NavbarModule } from './navbar/navbar.module';
import { SupplierProfileModule } from './supplier-profile/supplier-profile.module';
import {SupplierDashboardOptionsModule} from './supplier-dashboard-options/supplier-dashboard-options.module'
import { HelperModule } from './helper/helper.module';
import {SubSuppliersModule} from './sub-suppliers/sub-suppliers.module'
import { KeyAccountManagerModule } from './key-account-manager/key-account-manager.module';
import { SupplierAuthenticationService } from './services/supplier-authentication.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularMaterialModule,
    UserAuthenticationModule,
    NavbarModule,
    SupplierProfileModule,
    SupplierDashboardOptionsModule,
    HelperModule,
    SubSuppliersModule,
    KeyAccountManagerModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    
    SupplierAuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
