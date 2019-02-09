import { UserService } from './user.service';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { AppConstants } from './../app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private http:HttpClient,
    private appConstants:AppConstants,
    private _userservice:UserService
  ) { }

  public httpsContector(type,reqObj,apiName)
  {
    let baseUrl:String = this.appConstants.baseUrl;
    let url:String = baseUrl+apiName;

    let headersObj:HttpHeaders = new HttpHeaders();
    headersObj = headersObj.set('Content-Type','application/json; charset=utf-8');
  }
}
