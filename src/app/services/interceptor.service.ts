import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierAuthenticationService } from './supplier-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private token: SupplierAuthenticationService) { }

  
  intercept(req:any, next:any){
    // const authToken = this.token.getToken()
    // console.log("Test >>>>>>>>>.", this.token.getToken(),"authToken >>>>>>",authToken);
    // if(authToken){
    //   req =req.clone({      //create a clone of request
    //    setHeaders: {
    //      Authorization: 'Bearer '+ authToken
    //    }
    //  });
    // }
    return next.handle(req)    //send request to server
  }

}
