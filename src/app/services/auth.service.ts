import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentDateUnix : any
  public currentDate : any

  constructor() { }
  	
	public isAuthenticated(): boolean {
		if (!localStorage.getItem('token')) {
			return false;
		}
		try {

		  const helper = new JwtHelperService();
			const token:any = localStorage.getItem('token');
			const tokenPayload = helper.decodeToken(token);
			this.currentDate = new Date();
			this.currentDateUnix = this.currentDate.getTime();

			this.currentDateUnix = Math.floor(this.currentDateUnix / 100);
			if (this.currentDateUnix > tokenPayload.exp) {
				return true;
			}

			return false;

		} catch (error) {
			return false;
		}

	}
}
