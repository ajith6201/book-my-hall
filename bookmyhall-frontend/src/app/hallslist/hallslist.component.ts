import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hallslist',
  templateUrl: './hallslist.component.html',
  styleUrls: ['./hallslist.component.css']
})
export class HallslistComponent implements OnInit {
  successMessage:String;
  hallForm:FormGroup = new FormGroup(
    {
      city_id: new FormControl(null,[Validators.required]),
      hall_name: new FormControl(null,[Validators.required])
    }
  );
  cities:any;
  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.getCities().subscribe(data=>this.cities = data);
  }
  isValid(controlName)
  {
    return this.hallForm.get(controlName).invalid && this.hallForm.get(controlName).touched;
  }
  postHall()
  {
    
    this.userservice.halls(this.hallForm.value)
    .subscribe(
      data=>this.successMessage = 'Record Saved Successfully',
    error=>this.successMessage= 'Unable to Save Record');
    
    this.hallForm.reset();
  }
}
