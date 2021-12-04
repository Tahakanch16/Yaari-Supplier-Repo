import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-dashboard-home',
  templateUrl: './supplier-dashboard-home.component.html',
  styleUrls: ['./supplier-dashboard-home.component.css']
})
export class SupplierDashboardHomeComponent implements OnInit {
  
  imageAddress:String="assets/images/dash_img.png";
  heading:String=""
  
  constructor() { }

  ngOnInit(): void {
  }

}
