import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kam-home',
  templateUrl: './kam-home.component.html',
  styleUrls: ['./kam-home.component.css']
})
export class KamHomeComponent implements OnInit {

  imageAddress:String="assets/images/login_supp_img.png";
  heading:String="";

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
