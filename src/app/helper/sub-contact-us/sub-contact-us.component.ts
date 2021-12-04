import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-contact-us',
  templateUrl: './sub-contact-us.component.html',
  styleUrls: ['./sub-contact-us.component.css']
})
export class SubContactUsComponent implements OnInit {


 imageAddress:String="assets/images/login_supp_img.png";
 heading:String="Contact Us";

  constructor() { }

  ngOnInit(): void {
  }

}
