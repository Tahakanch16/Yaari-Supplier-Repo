import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getSupplierDetailById(id:number){

    return this.http.get(this.baseUrl+"suppliers/"+id).pipe(map((response:any) => {
      return response
    }))
  }

}
