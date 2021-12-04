import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  
  @Input() imageAddress:String="";
  @Input() heading:String=""
  
  constructor() { }

  ngOnInit(): void {
  }

}
