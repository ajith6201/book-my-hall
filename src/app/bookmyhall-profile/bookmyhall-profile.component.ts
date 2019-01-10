import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-bookmyhall-profile',
  templateUrl: './bookmyhall-profile.component.html',
  styleUrls: ['./bookmyhall-profile.component.css']
})
export class BookmyhallProfileComponent implements OnInit {
  details: UserDetails;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() 
  {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

}
