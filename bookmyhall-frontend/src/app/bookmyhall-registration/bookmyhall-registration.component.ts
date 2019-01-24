import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, AbstractControl } from '@angular/forms';
import { isError } from 'util';


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

    successMessage:String='';
  constructor(private auth: AuthenticationService, private router: Router,private _UserService:UserService,private activatedroute:ActivatedRoute) { 
    this.registerForm.controls.password.valueChanges.subscribe(
      x=>this.registerForm.controls.cpass.updateValueAndValidity()
    );
  }

  ngOnInit() {
  }

  isValid(controlName)
  {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
  }

  passValidator(control:AbstractControl)
  {
    if(control && (control.value !==null || control.value !== undefined))
    {
      const cpassValue = control.value;

      const passControl = control.root.get('password');
      if(passControl)
      {
        const passValue = passControl.value;
        if(passValue !== cpassValue || passValue === '')
        {
          return 
          {
            isError:true;
          };
        }
      }
    }
    return null;
  }

  register()
  {
    this._UserService.register(this.registerForm.value)
    .subscribe(
      data => this.successMessage = 'Registration Success',
      error => this.successMessage = 'error'
    );
  }

  movetologin()
  {
    this.router.navigate(['../login'],{relativeTo:this.activatedroute});
  }

}
