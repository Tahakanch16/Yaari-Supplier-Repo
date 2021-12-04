import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubSupplierOperationService {

   supplier_name:any=""
   details:any

  constructor(private route:Router) { }

  subSuppDetail(){

    if(!!localStorage.getItem('kamToken')){
      this.details=JSON.parse(atob(localStorage.getItem('kamToken')!.split('.')[1]));
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


