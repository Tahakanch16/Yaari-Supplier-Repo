import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SupplierOperationService {


 supplier_name:any=""
 details:any

  constructor(private route:Router) { }

  suppDetail(){

    if(!!localStorage.getItem('authorization')){
      this.details=JSON.parse(atob(localStorage.getItem('authorization')!.split('.')[1]));
      console.log(this.details);
     this.supplier_name=this.details.name;
       console.log(this.details.name); 
    }

    else{
      this.route.navigateByUrl('/select_profile/key_account_manager_login');
    }

    return this.details.name;

  }
}
