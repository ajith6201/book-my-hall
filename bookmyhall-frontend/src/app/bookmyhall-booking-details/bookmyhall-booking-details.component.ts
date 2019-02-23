import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookmyhall-booking-details',
  templateUrl: './bookmyhall-booking-details.component.html',
  styleUrls: ['./bookmyhall-booking-details.component.css']
})
export class BookmyhallBookingDetailsComponent implements OnInit {
  username = '';
  constructor(private UserService:UserService,private router:Router) { 
    this.UserService.getUsername().subscribe(
      data=> this.username = data.toString(),
      error=> this.router.navigate(['/login'])
    );    
    
  }

  ngOnInit() {
    
   
  }

getDetails()
{
  
}

}
