import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordService } from 'src/app/services/change-password.service';
import { SupplierProfileService } from 'src/app/services/supplier-profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldpass:boolean=true;
  newpass:boolean=true;
  confirmpass:boolean=true;

  oldpassType:String='password'
  newpassType:String='password'
  confirmpassType:String='password'
  imageAddress="assets/images/login_supp_img.png";
  heading="";
  public changePassword:FormGroup=new FormGroup({});
  public supplierObj:any;

  constructor(private builder:FormBuilder, private toastr:ToastrService,
    private changePasswordService:ChangePasswordService,private route:Router) { }

  ngOnInit(): void {
    this.buildChangePasswordForm();
  }

  buildChangePasswordForm(){
    this.changePassword=this.builder.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]]
    })
  }

  onChangePassword(){
    console.log(this.changePassword.value.password);
    console.log(this.changePassword.value.confirmPassword);
    if(this.changePassword.value.password!=this.changePassword.value.confirmPassword){
      this.toastr.error("Confirm Password does'nt match");
    }
    else{
      const payload={
        password:this.changePassword.value.password
      }

      this.supplierObj=localStorage.getItem('supplier-detail');
      this.supplierObj=JSON.parse(this.supplierObj);
      this.changePasswordService.updatePassword(this.supplierObj['supplierId'],payload).subscribe((res:any) => {
        console.log(res);
        this.route.navigateByUrl('/app/home');
      })

    }
  }


  // oldPass(type:String){
  //   if (type == 'show') {
  //     this.oldpass = !this.oldpass;
  //     this.oldpassType = 'text';
  //   } else if (type == 'hide') {
  //     this.oldpass = !this.oldpass;
  //     this.oldpassType = 'password';
  //   }
  // }

  newPass(type:String){
    if (type == 'show') {
      this.newpass = !this.newpass;
      this.newpassType = 'text';
    } else if (type == 'hide') {
      this.newpass = !this.newpass;
      this.newpassType = 'password';
    }
  }

  confirmPass(type:String){
    if (type == 'show') {
      this.confirmpass = !this.confirmpass;
      this.confirmpassType = 'text';
    } else if (type == 'hide') {
      this.confirmpass = !this.confirmpass;
      this.confirmpassType = 'password';
    }
  }


  validateFormField(type:String) {
    
    if (type == 'password') {
      if (this.changePassword.value.password.replace(/\s/g, "") === '') {
        this.changePassword.controls.password.patchValue(null);
      }
      else if( !(this.changePassword.value.password.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")))
      {
      // this.notificationService.showError('your password must be greater than 8 characters and must have one lowecase letter one upper-case letter number and special characters');
      }
    } 
    else if (type == 'confirmPassword') {
      if (this.changePassword.value.confirmPassword.replace(/\s/g, "") === '') {
        this.changePassword.controls.confirmPassword.patchValue(null);
      }
      else if(this.changePassword.value.confirmPassword !== this.changePassword.value.password){
        // this.notificationService.showError("confirm-password and password does not match");
      }
    } 

  }

}
