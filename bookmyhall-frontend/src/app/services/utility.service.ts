import { AppConstants } from './../app.constants';
//import { HttpClient, HttpHead}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private appConstants:AppConstants) { }
}
