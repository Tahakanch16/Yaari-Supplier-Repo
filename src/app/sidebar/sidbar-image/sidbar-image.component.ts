import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidbar-image',
  templateUrl: './sidbar-image.component.html',
  styleUrls: ['./sidbar-image.component.css']
})
export class SidbarImageComponent implements OnInit {

  @Input() imageAddress:String="";
  @Input() heading:String="";

  constructor() { }

  ngOnInit(): void {
  }

}
