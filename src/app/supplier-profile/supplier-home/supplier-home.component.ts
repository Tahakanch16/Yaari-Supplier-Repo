import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { SupplierOperationService } from 'src/app/services/supplier-operation.service';

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent implements OnInit {

 imageAddress:String="assets/images/dash_img.png";
 heading:String=""
 supplier_name:any=""
 details:any

  constructor(private route:Router,private operation: SupplierOperationService) { 
    
  }

  ngOnInit(): void {

    this.supplier_name=this.operation.suppDetail();
  }

}
