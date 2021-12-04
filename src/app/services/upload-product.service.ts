import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadProductService {

  private baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllCollection(){
      
    return this.http.get(this.baseUrl+"collections").pipe(map (response => {
      return response;
    }))
  }

  getCategories(){
      
    return this.http.get(this.baseUrl+"categories").pipe(map (response => {
      return response;
    }))
  }

  getSubCategories(){
      
    return this.http.get(this.baseUrl+"sub-categories").pipe(map (response => {
      return response;
    }))
  }
}
