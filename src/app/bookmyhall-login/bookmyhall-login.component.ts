import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthenticationService, TokenPayload } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookmyhall-login',
  templateUrl: './bookmyhall-login.component.html',
  styleUrls: ['./bookmyhall-login.component.css']
})
export class BookmyhallLoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup(
    {
      email: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,Validators.required)
    }
  );
  credentials: TokenPayload = 
  {
    username: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() 
  {
    if(!this.loginForm.valid)
    {
      console.log("Invalid Login!");
      return;      
    }

    console.log(JSON.stringify(this.loginForm.value));
  }

}
