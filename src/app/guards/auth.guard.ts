import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
     const url:string=state.url 
     return this.checkLogin(url);
  }

  checkLogin(url:String){

    if(this.auth.isAuthenticated()){
      return true
    }

    // localStorage.setItem("redirect", url)
    this.router.navigateByUrl('/login');
    return false

  }
  
}
