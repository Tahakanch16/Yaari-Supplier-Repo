import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  constructor(private http:HttpClient) { }

  public url="https://api.postalpincode.in/pincode/"

  trackLocation(pincode:any){

     return this.http.get(this.url+pincode).pipe(map ((response) =>{
        return response;
     }))  
  }

}
