import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BehaviorSubjectService } from '../services/behavior-subject.service';
import { LoginService } from '../services/login.service';
import { SupplierAuthenticationService } from '../services/supplier-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private route: Router,private loginAuth:LoginService, private behavior:BehaviorSubjectService) { }

 imageAddress="assets/images/login_supp_img.png";
 heading="Welcome";
 showPassword:boolean=true;
 passType:String='password'

  ngOnInit(): void {
  }

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.minLength(8)]]
    // robot:[false,[Validators.requiredTrue]]
  })

  

  supplierLogin(){
    
    const payload={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }

    this.loginAuth.supplierLogin(payload).subscribe((response:any) => {

      let token=response['token'];
      localStorage.setItem("token",token)
      let supplierDetails:any=atob(token.split('.')[1]);
      localStorage.setItem("supplier-detail",supplierDetails);
      this.behavior.supplierName.next(JSON.parse(supplierDetails)['name']);
      console.log(JSON.parse(supplierDetails)['name']);
      
      this.route.navigateByUrl("/app/home");
      
    },
    error => {
      console.log(error);
      
    })
  }

  showPass(type:String){
    if (type == 'show') {
      this.showPassword = !this.showPassword;
      this.passType = 'text';
    } else if (type == 'hide') {
      this.showPassword = !this.showPassword;
      this.passType = 'password';
    }
  }

  validateFormField(type:String) {
    if (type == 'email') {
      if (this.loginForm.value.email.replace(/\s/g, "") === '') {
        this.loginForm.controls.email.patchValue(null);
      }
    } else if (type == 'password') {
      if (this.loginForm.value.password.replace(/\s/g, "") === '') {
        this.loginForm.controls.password.patchValue(null);
      }
    }
  }


}
