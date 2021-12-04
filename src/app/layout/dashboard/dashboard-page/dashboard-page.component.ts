import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {


  imageAddress:String="assets/images/dash_img.png";
  heading:String=""

  constructor() { }

  ngOnInit(): void {
  }

}
