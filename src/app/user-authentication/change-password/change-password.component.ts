import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb:FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  changePassword= this.fb.group({
    oldPassword:['',Validators.required],
    newPassword:['',[Validators.required,Validators.minLength(8)]],
    confirmPassword:['',[Validators.required,Validators.minLength(8)]]
  }) 

  get chgPass(){
    return this.changePassword
  }

  oldPass(type:String){
    if (type == 'show') {
      this.oldpass = !this.oldpass;
      this.oldpassType = 'text';
    } else if (type == 'hide') {
      this.oldpass = !this.oldpass;
      this.oldpassType = 'password';
    }
  }

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
    } 
    else if (type == 'confirmPassword') {
      if (this.changePassword.value.confirmPassword.replace(/\s/g, "") === '') {
        this.changePassword.controls.confirmPassword.patchValue(null);
      }
    } 

}

  onChangePassword(){
    console.log(this.chgPass.value.newPassword);
    console.log(this.chgPass.value.confirmPassword);
    if(this.chgPass.value.newPassword!=this.chgPass.value.confirmPassword){
      console.log("Confirm does'nt match");
      this.toastr.error("Confirm Password does'nt match");
    }
    else{
      console.log("password changed successfully");
      this.toastr.success("Password changed successfully");
    }
  }


}
