import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageAddress:String="assets/images/dash_img.png";
  heading:String=""
  supplier_name:any=""
  details:any
 
   constructor(private route:Router) { 
     
   }
 
   ngOnInit(): void {
 
   }

}
