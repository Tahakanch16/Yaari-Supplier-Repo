import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierProfileService {

  private baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getSupplierInfo(id:any){

    return this.http.get(this.baseUrl+"suppliers/"+id).pipe(map(response =>{
      return response
    }))
  }

  updateSupplierDetail(id:number, payload:any){

    return this.http.put(this.baseUrl+"suppliers/"+id,payload).pipe( map((response) => {
      return response;
    }))
  }

}
