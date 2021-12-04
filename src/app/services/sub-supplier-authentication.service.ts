import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubSupplierAuthenticationService {

  private  baseUrl= environment.baseUrl

  constructor(private http: HttpClient, private route:Router) { }


  //Sub-Supplier Login
  loginSubSupplier(loginDetails:any){
       return this.http.post<any>(`${this.baseUrl}/auth/login/email`,loginDetails); 
  }

  loggedOut(){
    localStorage.removeItem('kamToken');
    this.route.navigateByUrl('/select_profile/key_account_manager_login');

  } 

}
