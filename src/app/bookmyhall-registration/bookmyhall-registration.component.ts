import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { AuthenticationService,TokenPayload } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-bookmyhall-registration',
  templateUrl: './bookmyhall-registration.component.html',
  styleUrls: ['./bookmyhall-registration.component.css']
})
export class BookmyhallRegistrationComponent implements OnInit {
  registerForm:FormGroup = new FormGroup(
    {
      email:new FormControl(null,[Validators.email,Validators.required]),
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      cpass:new FormControl(null,Validators.required)
    });
  credentials: TokenPayload = {
    username: '',
    firstname: '',
    password: ''
  };
  constructor(private auth: AuthenticationService, private router: Router,private _UserService:UserService) { }

  ngOnInit() {
  }

  register()
  {
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value))
    {
      console.log("Invalid Form!");
      return;
    }
    
    this._UserService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=>{console.log(data);this.router.navigate(['/login']);},
      error=>console.error(error)
    )
    //console.log(JSON.stringify(this.registerForm.value));
  }

}
