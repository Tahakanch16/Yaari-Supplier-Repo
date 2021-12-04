import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
 imageAddress:String="assets/images/login_supp_img.png";
  heading:String="Contact Us";

  constructor() { }

  ngOnInit(): void {
  }

}
