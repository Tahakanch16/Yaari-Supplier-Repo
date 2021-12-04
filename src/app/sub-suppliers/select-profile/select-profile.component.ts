import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.css']
})
export class SelectProfileComponent implements OnInit {

 imageAddress="assets/images/login_supp_img.png";
 heading="Welcome";

  constructor(private fb:FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  getProfile:String=""

  profile=this.fb.group({
    myprofile:['']
  })

  selectProfile(){

    this.getProfile=this.profile.value.myprofile;
    console.log(this.getProfile)

    if(this.getProfile==="Key Account Manager"){
      this.route.navigateByUrl('/select_profile/key_account_manager_login');
    }


  }

}
