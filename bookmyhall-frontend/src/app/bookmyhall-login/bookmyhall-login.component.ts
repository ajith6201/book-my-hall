import { FormGroup,FormControl,Validators,AbstractControl } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


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

  constructor(private auth: AuthenticationService, private router: Router,private activatedroute:ActivatedRoute,private _UserService:UserService) { }

  ngOnInit() {
  }

  isValid(controlName)
  {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._UserService.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this.router.navigate(['/profile']);
          },
          error => { }
        );
    }
  }
  Registerform()
  {       
      document.getElementById("loginposition").style.display="none";
      document.getElementById("registerposition").style.display="block";
    
  }
  Loginform()
  {       
      document.getElementById("loginposition").style.display="block";
      document.getElementById("registerposition").style.display="none";
  }

  movetoregister()
  {
    this.router.navigate(['../register'],{relativeTo:this.activatedroute});
  }
}
