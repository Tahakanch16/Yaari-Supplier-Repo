import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-supplier-profile',
  templateUrl: './view-supplier-profile.component.html',
  styleUrls: ['./view-supplier-profile.component.css']
})
export class ViewSupplierProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  view=true

  editDetails(){

    this.view=false

  }

}
