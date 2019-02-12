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
  loggedIn= '';
  constructor(private UserService:UserService,private router:Router) {
    this.UserService.getUsername().subscribe(
      data=> this.username = data.toString(),
      error=> router.navigate(['/login'])
    );    
    
   }

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
    
  }

}
