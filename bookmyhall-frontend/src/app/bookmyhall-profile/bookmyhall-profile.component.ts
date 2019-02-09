import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-bookmyhall-profile',
  templateUrl: './bookmyhall-profile.component.html',
  styleUrls: ['./bookmyhall-profile.component.css']
})
export class BookmyhallProfileComponent implements OnInit {

  username = '';
  objectId = '';
  loggedIn= '';
  successMessage:String='';
  constructor(private UserService:UserService,private router:Router) {
    this.UserService.getUsername().subscribe(
      data=> this.username = data.toString(),
      error=> router.navigate(['/login'])
    );    

    
   }
   assetsForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    gender:new FormControl(null,[Validators.required]),
    phone_no: new FormControl(null,[Validators.required]),
    id_proof: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    zipcode: new FormControl(null,[Validators.required]),
    city: new FormControl(null,[Validators.required]),
    hall_name:new FormControl(null,[Validators.required])        
  });
  

   logout()
   {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
   }

  ngOnInit() 
  {
    
  }

  asset()
  {
   var userId = this.username;

    console.log(this.assetsForm.value);
    // console.log(this.assetsForm.value.userId);
    // console.log(userId);
    this.assetsForm.value.user_id = userId;
    this.assetsForm.value.status = "0";
    this.UserService.assets(this.assetsForm.value).subscribe(
      data=>this.successMessage = 'Record Saved Successfully',
      error=>this.successMessage= 'Unable to Save Record'
    );

    this.assetsForm.reset();
  }

}
