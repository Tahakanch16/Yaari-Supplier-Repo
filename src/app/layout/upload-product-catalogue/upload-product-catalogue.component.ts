import { Component, OnInit } from '@angular/core';
import { UploadProductService } from 'src/app/services/upload-product.service';

@Component({
  selector: 'app-upload-product-catalogue',
  templateUrl: './upload-product-catalogue.component.html',
  styleUrls: ['./upload-product-catalogue.component.css']
})
export class UploadProductCatalogueComponent implements OnInit {

  imageAddress:String="assets/images/login_supp_img.png";
  heading:String="Upload Product Catalogue"
  public collectionList:any[]=[];
  public categoryList:any[]=[];
  public subCategoryList:any[]=[];

  constructor(private uploadService:UploadProductService) { }

  ngOnInit(): void {
    
    this.getAllCollection();
    this.getCategory();
    this.getSubCategory();
  }

  getAllCollection(){

      this.uploadService.getAllCollection().subscribe( (res:any) => {
         this.collectionList=res;
      })
  }

  getCategory(){

    this.uploadService.getCategories().subscribe( (res:any) => {
      this.categoryList=res;
    })
  }

  getSubCategory(){
    this.uploadService.getSubCategories().subscribe( (res:any) => {
         this.subCategoryList=res;
    })
  }
  


}
