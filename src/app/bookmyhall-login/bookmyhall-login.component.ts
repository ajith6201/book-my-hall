import { AuthenticationService, TokenPayload } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmyhall-login',
  templateUrl: './bookmyhall-login.component.html',
  styleUrls: ['./bookmyhall-login.component.css']
})
export class BookmyhallLoginComponent implements OnInit {

  credentials: TokenPayload = 
  {
    username: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    }); 
  }

}

