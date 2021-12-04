import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubjectService } from 'src/app/services/behavior-subject.service';
import { PincodeService } from 'src/app/services/pincode.service';
import { SupplierProfileService } from 'src/app/services/supplier-profile.service';

@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.css']
})
export class SupplierProfileComponent implements OnInit {

  public profileForm:FormGroup=new FormGroup({});
  public bankList:any[]=[];
  public supplierObj:any

  constructor(private builder:FormBuilder, private pincode:PincodeService,
    private profile:SupplierProfileService,private behavior:BehaviorSubjectService) { }

  public indianBanks(){
    this.bankList=[
      'Bank Of Baroda','State Bank Of India','HDFC Bank','Canara Bank','Bank OF Maharastra','Axis Bank',
      'Punjab National Bank','Bank Of India','Indusland Bank', 'Union Bank Of India', 'ICICI Bank', 
      'Kotak Mahindra Bank','Central Bank Of Bank'
      ];
     return this.bankList; 
  }

  buildSupplierProfile(){
    this.profileForm=this.builder.group({
      
        businessName:['',Validators.required],
        supplierName:['',Validators.required],
        email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]],
        pickupAddress:['',Validators.required],
        pincode:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
        state:['',Validators.required],
        city:['',Validators.required],
        gstNumber:[' ',Validators.required],
        panNumber:['',Validators.required],
        accno:['',Validators.required],
        bankName:['',Validators.required],
        ifsc:['',Validators.required]
         
    })
  }

  ngOnInit(): void {
    this.buildSupplierProfile()
    this.getSupplierProfile();
  }

  getSupplierProfile(){

    this.supplierObj=localStorage.getItem('supplier-detail');
    this.supplierObj=JSON.parse(this.supplierObj);

    this.profile.getSupplierInfo(this.supplierObj['supplierId']).subscribe((response:any) => {
      console.log(response);
      
      if(response){
        this.profileForm.controls.businessName.patchValue(response['businessName']);
        this.profileForm.controls.supplierName.patchValue(response['name']);
        this.profileForm.controls.email.patchValue(response['email']);
        this.profileForm.controls.mobile.patchValue(response['mobile']);
        this.profileForm.controls.pickupAddress.patchValue(response['pickupAddress']);
        this.profileForm.controls.pincode.patchValue(response['pincode']);
        this.profileForm.controls.state.patchValue(response['state']);
        this.profileForm.controls.city.patchValue(response['city']);
        this.profileForm.controls.gstNumber.patchValue(response['gstNumber']);
        this.profileForm.controls.panNumber.patchValue(response['panNumber']);
        this.profileForm.controls.accno.patchValue(response['accountNumber']);
        this.profileForm.controls.bankName.patchValue(response['bankName']);
        this.profileForm.controls.ifsc.patchValue(response['ifsc']);
      }

    })
    
  }

  updateSupplierInfo(){

    const payload={
      name:this.profileForm.value.supplierName,
      businessName:this.profileForm.value.businessName,
      email:this.profileForm.value.email,
      mobile:this.profileForm.value.mobile,
      pickupAddress:this.profileForm.value.pickupAddress,
      pincode:this.profileForm.value.pincode,
      state:this.profileForm.value.state,
      city:this.profileForm.value.city,
      gstNumber:this.profileForm.value.gstNumber,
      panNumber:this.profileForm.value.panNumber,
      accountNumber:this.profileForm.value.accno,
      bankName:this.profileForm.value.bankName,
      ifsc:this.profileForm.value.ifsc
    }

    this.profile.updateSupplierDetail(this.supplierObj['supplierId'],payload).subscribe((response:any) => {
      console.log(response);
      if(response){
        this.behavior.supplierName.next(response['name']);
        this.getSupplierProfile();
        this.hide=true
      }
    })

  }

  hide=true

  editDetails(){
    this.hide=false
  }

  locatePlace(){
    
    this.pincode.trackLocation(this.profileForm.value.pincode).subscribe((res : any)=>{
      let pincodeRes = res;
      console.log(pincodeRes);
      if((pincodeRes[0].Status == "Error")){ 
      // this.notificationService.showError("invalid pincode")
      }
      else{
      // this.cityName=pincodeRes[0].PostOffice[0].District;
      //  this.stateName=pincodeRes[0].PostOffice[0].State;
  
        this.profileForm.controls['city'].setValue(pincodeRes[0].PostOffice[0].District);
        this.profileForm.controls['state'].setValue(pincodeRes[0].PostOffice[0].State);
  
        // this.pickupAddress.value.city=this.cityName;
        // this.pickupAddress.value.state=this.stateName;
       }
     })
  }

  validateFormField(type:String) {
    if (type == 'pickupAddress') {
      if (this.profileForm.value.bussinessName.replace(/\s/g, "") === '') {
        this.profileForm.controls.bussinessName.patchValue(null);
      }
    }
    else if (type == 'pincode') {
      if (this.profileForm.value.pincode.replace(/\s/g, "") === '') {
        this.profileForm.controls.pinncode.patchValue(null);
      }
      else if(!(this.profileForm.value.mobile.match("^([7-9]{1})([0-9]{9})$"))){
        // this.notificationService.showError('Invalid pincode');
      }
    } 
    else if (type == 'gstNumber') {
      if (this.profileForm.value.gstNumber.replace(/\s/g, "") === '') {
        this.profileForm.controls.gstNumber.patchValue(null);
      }
    } 
    else if (type == 'panNumber') {
      if (this.profileForm.value.panNumber.replace(/\s/g, "") === '') {
        this.profileForm.controls.panNumber.patchValue(null);
      }
    } 
    else if (type == 'ifsc') {
      if (this.profileForm.value.ifsc.replace(/\s/g, "") === '') {
        this.profileForm.controls.ifsc.patchValue(null);
      }
    }
    else if (type == 'accno') {
      if (this.profileForm.value.accno.replace(/\s/g, "") === '') {
        this.profileForm.controls.accno.patchValue(null);
      }
    } 
    else if (type == 'businessName') {
      if (this.profileForm.value.businessName.replace(/\s/g, "") === '') {
        this.profileForm.controls.businessName.patchValue(null);
      }
    }   
    else if (type == 'supplierName') {
      if (this.profileForm.value.supplierName.replace(/\s/g, "") === '') {
        this.profileForm.controls.supplierName.patchValue(null);
      }
    } 
    else if (type == 'email') {
      if (this.profileForm.value.email.replace(/\s/g, "") === '') {
        this.profileForm.controls.email.patchValue(null);
      }
      else  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.profileForm.value.email)))
      {
        // this.notificationService.showError("invalid email address!");
      } 
    } 
    else if (type == 'password') {
      if (this.profileForm.value.password.replace(/\s/g, "") === '') {
        this.profileForm.controls.password.patchValue(null);
      }
      else if( !(this.profileForm.value.password.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")))
      {
      // this.notificationService.showError('your password must be greater than 8 characters and must have one lowecase letter one upper-case letter number and special characters');
      }
    } 
    else if (type == 'confirmPassword') {
      if (this.profileForm.value.confirmPassword.replace(/\s/g, "") === '') {
        this.profileForm.controls.confirmPassword.patchValue(null);
      }
      else if(this.profileForm.value.confirmPassword !== this.profileForm.value.password){
        // this.notificationService.showError("confirm-password and password does not match");
      }
    } 
    else if (type == 'mobile') {
      if (this.profileForm.value.mobile.replace(/\s/g, "") === '') {
        this.profileForm.controls.mobile.patchValue(null);
      }
      else if(!(this.profileForm.value.mobile.match("^([6-9]{1})([0-9]{9})$") ))
      {
      //  this.notificationService.showError("Please enter correct contact number")
      }
    } 
  }

}
