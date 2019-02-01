import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:String = 'http://localhost:3000/users';
  //testing for aws ec2 instance
  //url:String = 'http://52.14.158.45:3000/users';

  constructor(private _http:HttpClient) { }
  
  register(body:any)
  {
    return this._http.post(this.url+'/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any){
    return this._http.post(this.url+'/login', body,{
      observe:'body'
    });
  }

  getUsername()
  {
    return this._http.get(this.url+'/username',{
    observe: 'body',
    params: new HttpParams().append('token',localStorage.getItem('token'))
    });
  }
  public get loggedIn():boolean
  {
    return (localStorage.getItem('token')!== null);
  }
}