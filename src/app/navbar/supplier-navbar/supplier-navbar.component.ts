import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubjectService } from 'src/app/services/behavior-subject.service';
import { SupplierAuthenticationService } from 'src/app/services/supplier-authentication.service';
import { SupplierOperationService } from 'src/app/services/supplier-operation.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-navbar',
  templateUrl: './supplier-navbar.component.html',
  styleUrls: ['./supplier-navbar.component.css']
})
export class SupplierNavbarComponent implements OnInit {

  public supplier_name:String=""
  public supplierObj:any
  
  panelOpenState = false;

  constructor(private route:Router, private behavior:BehaviorSubjectService,
    private supplierService:SupplierService) { 

    this.behavior.supplierName.subscribe((res:any) => {
      this.supplier_name=res;
    })
  }

  ngOnInit(): void {
    this.getSupplierDetails();
  }

  getSupplierDetails(){

    this.supplierObj=localStorage.getItem('supplier-detail');
    this.supplierObj=JSON.parse(this.supplierObj);
    // this.behavior.supplierName.next(this.supplierObj['name']);
    this.supplierService.getSupplierDetailById(this.supplierObj['supplierId']).subscribe((response:any) => {
        this.behavior.supplierName.next(response['name']);
    })
  }

  logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }


  



}
