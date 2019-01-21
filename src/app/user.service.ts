import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  
  register(body:any)
  {
    return this._http.post('http://127.0.0.1:3000/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body,{
      observe:'body'
    });
  }

  getUsername()
  {
    return this._http.get('http://localhost:3000/users/username',{
    observe: 'body',
    params: new HttpParams().append('token',localStorage.getItem('token'))
    });
  }
  public get loggedIn():boolean
  {
    return (localStorage.getItem('token')!== null);
  }
}
