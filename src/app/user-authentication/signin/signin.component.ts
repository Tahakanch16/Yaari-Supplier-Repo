import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {SupplierAuthenticationService} from 'src/app/services/supplier-authentication.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth: SupplierAuthenticationService,private route: Router) { }

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

  get login(){
    return this.loginForm;
  }

  supplierLogin(){
    console.log("Hello Taha ");
    this.auth.loginSupplier(this.loginForm.value).subscribe(
    res =>{console.log(res);
     localStorage.setItem('authorization',res.token)
     this.route.navigateByUrl('supplier_home');
   },
    err => {console.log(err)}
    )
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
