import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup,FormControl,Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-bookmyhall-profile',
  templateUrl: './bookmyhall-profile.component.html',
  styleUrls: ['./bookmyhall-profile.component.css']
})
export class BookmyhallProfileComponent implements OnInit {

  username = '';
  loggedIn= '';
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
  

   slidemenu()
  {       
      document.getElementById("slideid").style.display="block";
      
  }
  closemenu(){
document.getElementById("slideid").style.display="none";
  }
   logout()
   {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
   }

  ngOnInit() 
  {
    console.log(this.username+"huhu");
  }

}
