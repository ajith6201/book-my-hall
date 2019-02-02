import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken:string;

  constructor(private router:Router) {
    if(!!localStorage.getItem('token'))
    {
      this.authToken = localStorage.getItem('token');
    }
    else
    {
      this.authToken = "";
    }
   }

   public getToken():string{
     return this.authToken;
   }

   public setToken(token:string):void
   {
    this.authToken = token;
    localStorage.setItem('token',this.authToken);
   }

   public logoutUser():void
   {
     this.authToken = '';
     localStorage.clear();
     console.log("User Logged out!");
     this.router.navigate(['/login']);
   }

}
