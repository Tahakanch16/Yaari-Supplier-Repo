import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PincodeService } from '../services/pincode.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public pickupAddress: FormGroup = new FormGroup({});
  public businessDetails: FormGroup = new FormGroup({});
  public personalDetails: FormGroup = new FormGroup({});
  public showPickupAddressModel:boolean=false;
  public showBusinessModel:boolean=false;
  public showPersonalModel:boolean=true;
  public haveGSTNumber:boolean=false

  constructor(private builder:FormBuilder, private route:Router,
    private registerAuth:RegisterService,private pincode:PincodeService
    ) { }

  bankList:String[]=[];
  
  // showPassword:boolean=true;
  // isVisible:boolean=true
  // passType:String='password'
  // cpassType:String='password'
  
    ngOnInit(): void {
      this.buildPickupAddressForm();
      this.buildBusinessDetailsForm();
      this.buildPersonalAddressForm();
    }
  
    indianBanks(){
      this.bankList=[
        'Bank Of Baroda','State Bank Of India','HDFC Bank','Canara Bank','Bank OF Maharastra','Axis Bank',
        'Punjab National Bank','Bank Of India','Indusland Bank', 'Union Bank Of India', 'ICICI Bank', 
        'Kotak Mahindra Bank','Central Bank Of Bank'
        ];
       return this.bankList; 
    }

    buildPickupAddressForm(){

      this.pickupAddress=this.builder.group({
        pickupAddress:['',Validators.required],
        pincode:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
        state:['',Validators.required],
        city:['',Validators.required] 
      })

    }

    buildBusinessDetailsForm(){
      this.businessDetails=this.builder.group({
        gst:['',Validators.required],
        gstNumber:[' ',Validators.required],
        // uploadGST:['',Validators.required],
        panNumber:['',Validators.required],
        // uploadPan:['',Validators.required],
        accno:['',Validators.required],
        bankName:['',Validators.required],
        ifsc:['',Validators.required],
        // uploadCheck:['',Validators.required]
      })
    }

    buildPersonalAddressForm(){
      this.personalDetails=this.builder.group({
        businessName:['',Validators.required],
        supplierName:['',Validators.required],
        email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        password:['',[Validators.required,Validators.minLength(8)]],
        confirmPassword:['',[Validators.required,Validators.minLength(8)]],
        mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]],  
      })
    }
  
    // showPass(type:String){
    //   if (type == 'show') {
    //     this.showPassword = !this.showPassword;
    //     this.passType = 'text';
    //   } else if (type == 'hide') {
    //     this.showPassword = !this.showPassword;
    //     this.passType = 'password';
    //   }
    // }
  
    // showConfirmPass(type:String){
    //   if (type == 'show') {
    //     this.isVisible = !this.isVisible;
    //     this.cpassType = 'text';
    //   } else if (type == 'hide') {
    //     this.isVisible = !this.isVisible;
    //     this.cpassType = 'password';
    //   }
    // }

    haveGST(){
      this.haveGSTNumber=true
    }
    doNotHaveGST(){
      this.haveGSTNumber=false
    }

    submitPickupAddress(){

      if(this.pickupAddress.valid){
        this.showPickupAddressModel=false;
        this.showBusinessModel=true;
      }
      else{
        // this.notificationService.showError("found invalid details")
      }

      // const payload={
      //   pickupAddress:this.pickupAddress.value.pickupAddress,
      //   pincode:this.pickupAddress.value.pincode,
      //   state:this.pickupAddress.value.state,
      //   city:this.pickupAddress.value.city
      // }
      // console.log(payload);
      // this.showPickupAddressModel=false;
      // this.showBusinessModel=true;

    }

    submitBusinessDetails(){

      if(this.businessDetails.valid){

          if(this.businessDetails.value.gstNumber===" "){
            this.businessDetails.controls.gstNumber.setValue(null);
          }

          const payload={
            pickupAddress:this.pickupAddress.value.pickupAddress,
            pincode:this.pickupAddress.value.pincode,
            state:this.pickupAddress.value.state,
            city:this.pickupAddress.value.city,
            gstNumber:this.businessDetails.value.gstNumber,
            panNumber:this.businessDetails.value.panNumber,
            bankName:this.businessDetails.value.bankName,
            accountNumber:this.businessDetails.value.accno,
            ifsc:this.businessDetails.value.ifsc,
            businessName:this.personalDetails.value.businessName,
            name:this.personalDetails.value.supplierName,
            email:this.personalDetails.value.email,
            password:this.personalDetails.value.password,
            mobile:this.personalDetails.value.mobile
          }
          console.log(payload);
          this.registerAuth.supplierRegister(payload).subscribe((response) => {
            console.log(response);
            this.route.navigateByUrl("/login");
          },
          error => {
            console.log(error);
            
          })

      }

      else{
        // this.notificationService.showError("found invalid details")
      }
      
    }

    submitPersonalDetails(){

      if(this.personalDetails.valid){

        if(this.personalDetails.value.password!=this.personalDetails.value.confirmPassword){ 
          // this.notificationService.showError("Confirm password is incorrect");
        }

        else{
          
          
          this.showPickupAddressModel=true;
          this.showPersonalModel=false
        }
      }

      else{
        // this.notificationService.showError("found invalid details")
      }
      
      
    }

    locatePlace(){
      this.pincode.trackLocation(this.pickupAddress.value.pincode).subscribe((res : any)=>{
        let pincodeRes = res;
        console.log(pincodeRes);
        if((pincodeRes[0].Status == "Error")){ 
        // this.notificationService.showError("invalid pincode")
        }
        else{
        // this.cityName=pincodeRes[0].PostOffice[0].District;
        //  this.stateName=pincodeRes[0].PostOffice[0].State;
    
          this.pickupAddress.controls['city'].setValue(pincodeRes[0].PostOffice[0].District);
          this.pickupAddress.controls['state'].setValue(pincodeRes[0].PostOffice[0].State);
    
          // this.pickupAddress.value.city=this.cityName;
          // this.pickupAddress.value.state=this.stateName;
         }
       })
    }
  
    validateFormField(type:String) {
      if (type == 'pickupAddress') {
        if (this.pickupAddress.value.bussinessName.replace(/\s/g, "") === '') {
          this.pickupAddress.controls.bussinessName.patchValue(null);
        }
      }
      else if (type == 'pincode') {
        if (this.pickupAddress.value.pincode.replace(/\s/g, "") === '') {
          this.pickupAddress.controls.pinncode.patchValue(null);
        }
        else if(!(this.pickupAddress.value.mobile.match("^([7-9]{1})([0-9]{9})$"))){
          // this.notificationService.showError('Invalid pincode');
        }
      } 
      else if (type == 'gstNumber') {
        if (this.businessDetails.value.gstNumber.replace(/\s/g, "") === '') {
          this.businessDetails.controls.gstNumber.patchValue(null);
        }
      } 
      else if (type == 'panNumber') {
        if (this.businessDetails.value.panNumber.replace(/\s/g, "") === '') {
          this.businessDetails.controls.panNumber.patchValue(null);
        }
      } 
      else if (type == 'ifsc') {
        if (this.businessDetails.value.ifsc.replace(/\s/g, "") === '') {
          this.businessDetails.controls.ifsc.patchValue(null);
        }
      }
      else if (type == 'accno') {
        if (this.businessDetails.value.accno.replace(/\s/g, "") === '') {
          this.businessDetails.controls.accno.patchValue(null);
        }
      } 
      else if (type == 'businessName') {
        if (this.personalDetails.value.businessName.replace(/\s/g, "") === '') {
          this.personalDetails.controls.businessName.patchValue(null);
        }
      }   
      else if (type == 'supplierName') {
        if (this.personalDetails.value.supplierName.replace(/\s/g, "") === '') {
          this.personalDetails.controls.supplierName.patchValue(null);
        }
      } 
      else if (type == 'email') {
        if (this.personalDetails.value.email.replace(/\s/g, "") === '') {
          this.personalDetails.controls.email.patchValue(null);
        }
        else  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.personalDetails.value.email)))
        {
          // this.notificationService.showError("invalid email address!");
        } 
      } 
      else if (type == 'password') {
        if (this.personalDetails.value.password.replace(/\s/g, "") === '') {
          this.personalDetails.controls.password.patchValue(null);
        }
        else if( !(this.personalDetails.value.password.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")))
        {
        // this.notificationService.showError('your password must be greater than 8 characters and must have one lowecase letter one upper-case letter number and special characters');
        }
      } 
      else if (type == 'confirmPassword') {
        if (this.personalDetails.value.confirmPassword.replace(/\s/g, "") === '') {
          this.personalDetails.controls.confirmPassword.patchValue(null);
        }
        else if(this.personalDetails.value.confirmPassword !== this.personalDetails.value.password){
          // this.notificationService.showError("confirm-password and password does not match");
        }
      } 
      else if (type == 'mobile') {
        if (this.personalDetails.value.mobile.replace(/\s/g, "") === '') {
          this.personalDetails.controls.mobile.patchValue(null);
        }
        else if(!(this.personalDetails.value.mobile.match("^([6-9]{1})([0-9]{9})$") ))
        {
        //  this.notificationService.showError("Please enter correct contact number")
        }
      } 
    }


}
