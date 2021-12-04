import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { SubSupplierAuthenticationService } from 'src/app/services/sub-supplier-authentication.service';
@Component({
  selector: 'app-kam-login',
  templateUrl: './kam-login.component.html',
  styleUrls: ['./kam-login.component.css']
})
export class KamLoginComponent implements OnInit {

  imageAddress="assets/images/login_supp_img.png";
  heading="Welcome";
  showPassword:boolean=true;
  passType:String='password'

  constructor(private fb:FormBuilder,  private auth: SubSupplierAuthenticationService, private route: Router) { }

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

  kamLogin(){

    this.auth.loginSubSupplier(this.loginForm.value).subscribe(
      res =>{console.log(res);
       localStorage.setItem('kamToken',res.token)
       this.route.navigateByUrl('/select_profile/key_account_manager_home');
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

}
