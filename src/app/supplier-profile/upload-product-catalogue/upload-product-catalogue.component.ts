import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-product-catalogue',
  templateUrl: './upload-product-catalogue.component.html',
  styleUrls: ['./upload-product-catalogue.component.css']
})
export class UploadProductCatalogueComponent implements OnInit {

  imageAddress:String="assets/images/login_supp_img.png";
  heading:String="Upload Product Catalogue"
  
  constructor() { }

  ngOnInit(): void {
  }

}
