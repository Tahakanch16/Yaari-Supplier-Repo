import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  private baseUrl=environment.baseUrl;

  supplierRegister(payload:any){
     
    return this.http.post(this.baseUrl+"suppliers",payload).pipe(map(response => {
        return response;
    }))
}

}
