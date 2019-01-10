import { Router } from '@angular/router';
import { AuthenticationService,TokenPayload } from './../authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bookmyhall-registration',
  templateUrl: './bookmyhall-registration.component.html',
  styleUrls: ['./bookmyhall-registration.component.css']
})
export class BookmyhallRegistrationComponent implements OnInit {
  credentials: TokenPayload = {
    username: '',
    firstname: '',
    password: ''
  };
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

}
