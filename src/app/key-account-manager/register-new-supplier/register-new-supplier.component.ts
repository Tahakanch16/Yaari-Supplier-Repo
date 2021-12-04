import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-new-supplier',
  templateUrl: './register-new-supplier.component.html',
  styleUrls: ['./register-new-supplier.component.css']
})
export class RegisterNewSupplierComponent implements OnInit {
  
 imageAddress="assets/images/login_supp_img.png";
 heading="";
 supplyList:String[]=[];

showPassword:boolean=true;
isVisible:boolean=true
passType:String='password'
cpassType:String='password'
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }

  allSupplyType(){
    this.supplyList=[
      'Stitched/Ready Made','Unstitched','Undergarments','Kids Wear'
    ]
    return this.supplyList;
  }

  registerationForm= this.fb.group({

    supplierName:['',[Validators.required]],
    supplierBussiness:['',[Validators.required]],
    phoneNumber:['',[Validators.required,Validators.maxLength(13),Validators.minLength(10)]],
    alternativePhoneNumber:['',[Validators.required,Validators.maxLength(13),Validators.minLength(10)]],
    password:['', [Validators.required]],
    confirmPassword:['', [Validators.required]],
    emailId:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    place: this.fb.group({
       address:['',[Validators.required]],
       state:['',[Validators.required]],
       city:['',[Validators.required]],
       pincode:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
    }),
    //  address:[''],
    //  state:[''],
    //  city:[''],
    //  pincode:[''],
    gstNumber:['',[Validators.required]],
    panNumber:['',[Validators.required]],
    supplyType:['',[Validators.required]]

  })

  get register(){
    return this.registerationForm;
  }

  registerNewSupplier(){
    console.log(this.registerationForm.value);
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

  showConfirmPass(type:String){
    if (type == 'show') {
      this.isVisible = !this.isVisible;
      this.cpassType = 'text';
    } else if (type == 'hide') {
      this.isVisible = !this.isVisible;
      this.cpassType = 'password';
    }
  }

  validateFormField(type:String) {
    if (type == 'supplierName') {
      if (this.registerationForm.value.bussinessName.replace(/\s/g, "") === '') {
        this.registerationForm.controls.bussinessName.patchValue(null);
      }
    } 
    else if (type == 'supplierBussiness') {
      if (this.registerationForm.value.supplierBussiness.replace(/\s/g, "") === '') {
        this.registerationForm.controls.supplierBussiness.patchValue(null);
      }
    }
    else if (type == 'emailId') {
      if (this.registerationForm.value.emailId.replace(/\s/g, "") === '') {
        this.registerationForm.controls.emailId.patchValue(null);
      }
    } 
    else if (type == 'password') {
      if (this.registerationForm.value.password.replace(/\s/g, "") === '') {
        this.registerationForm.controls.password.patchValue(null);
      }
    } 
    else if (type == 'confirmPassword') {
      if (this.registerationForm.value.confirmPassword.replace(/\s/g, "") === '') {
        this.registerationForm.controls.confirmPassword.patchValue(null);
      }
    } 
    else if (type == 'phoneNumber') {
      if (this.registerationForm.value.phoneNumber.replace(/\s/g, "") === '') {
        this.registerationForm.controls.phoneNumber.patchValue(null);
      }
    }
    else if (type == 'alternativePhoneNumber') {
      if (this.registerationForm.value.alternativePhoneNumber.replace(/\s/g, "") === '') {
        this.registerationForm.controls.alternativePhoneNumber.patchValue(null);
      }
    } 
    else if (type == 'address') {
      if (this.registerationForm.value.address.replace(/\s/g, "") === '') {
        this.registerationForm.controls.address.patchValue(null);
      }
    } 
    else if (type == 'pincode') {
      if (this.registerationForm.value.pincode.replace(/\s/g, "") === '') {
        this.registerationForm.controls.pincode.patchValue(null);
      }
    } 
    else if (type == '') {
      if (this.registerationForm.value.alternativePhoneNumber.replace(/\s/g, "") === '') {
        this.registerationForm.controls.alternativePhoneNumber.patchValue(null);
      }
    } 
    else if (type == 'gstNumber') {
      if (this.registerationForm.value.panNumber.replace(/\s/g, "") === '') {
        this.registerationForm.controls.panNumber.patchValue(null);
      }
    }  
    else if (type == 'panNumber') {
      if (this.registerationForm.value.panNumber.replace(/\s/g, "") === '') {
        this.registerationForm.controls.panNumber.patchValue(null);
      }
    }  

  }



}
