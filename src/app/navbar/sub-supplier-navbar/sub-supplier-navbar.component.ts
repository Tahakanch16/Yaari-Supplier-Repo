import { Component, OnInit } from '@angular/core';
import { SubSupplierAuthenticationService } from 'src/app/services/sub-supplier-authentication.service';
import { SubSupplierOperationService } from 'src/app/services/sub-supplier-operation.service';

@Component({
  selector: 'app-sub-supplier-navbar',
  templateUrl: './sub-supplier-navbar.component.html',
  styleUrls: ['./sub-supplier-navbar.component.css']
})
export class SubSupplierNavbarComponent implements OnInit {

  supplier_name=""
  
  constructor(private auth:SubSupplierAuthenticationService, private operation: SubSupplierOperationService) { }

  panelOpenState = false;

  ngOnInit(): void {
    this.supplier_name=this.operation.subSuppDetail();
  }

  logout(){
    this.auth.loggedOut();
  }

}
