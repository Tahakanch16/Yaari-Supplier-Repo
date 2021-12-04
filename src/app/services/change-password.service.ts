import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http:HttpClient) { }

  private baseUrl=environment.baseUrl;

  updatePassword(id:number,payload:any){

    return this.http.put(this.baseUrl+"change-password/"+id,payload).pipe(map ((response) => {
       return response;
    }))
  }

}
