import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SupplierAuthenticationService {
  
  private login_url="http://localhost:4000/api/login";
  private register_url="http://localhost:4000/api/register";
  private  baseUrl= environment.baseUrl

  constructor(private http: HttpClient, private route:Router) {  }

      //Supplier Login
      loginSupplier(loginDetails:any){
        return this.http.post<any>(`${this.baseUrl}/auth/login/email`,loginDetails);
      }


      //Supplier Registration
      registerSupplier(userDetails:any){
        return this.http.post<any>(this.register_url,userDetails);
      }

      //get Token
      getToken(){
        return localStorage.getItem('authorization');
      }

      //logout
      loggedOut(){
        localStorage.removeItem('authorization');
        this.route.navigateByUrl('/signin');

      } 

}
