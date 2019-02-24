import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cityForm:FormGroup = new FormGroup(
    {
      city_name: new FormControl(null,[Validators.required]),
    }
  );
  successMessage:String;
  cities:any;
  
  constructor(private userservice:UserService,private router:Router) { 
    
  }

  ngOnInit() {
    this.userservice.getCities().subscribe(data=>this.cities = data);
  }

  isValid(controlName)
  {
    return this.cityForm.get(controlName).invalid && this.cityForm.get(controlName).touched;
  }



  postCity()
  {

    //console.log(this.cityForm.value);
    this.userservice.city(this.cityForm.value).subscribe(
      data=>{this.successMessage = 'Record Saved Successfully',
    this.userservice.getCities().subscribe(data=>this.cities = data)},
    error=>this.successMessage= 'Unable to Save Record');
    
    this.cityForm.reset();
  }

  onDelete(_id:any)
  {
    //console.log(_id);
    if(confirm('Are you to delete this record?')==true)
    {
      this.userservice.deleteCity(_id).subscribe((res)=>{
        this.cityForm.reset(), this.userservice.getCities().subscribe(data=>this.cities = data)
      });
    }
  }


  logout()
  {
     localStorage.removeItem('token');
     this.router.navigate(['/login']);
  }

}
