import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  successMessage:String;
  constructor(private userservice:UserService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm)
  {
    this.userservice.city(f.value).subscribe(
      data=>this.successMessage = 'Record Saved Successfully',
    error=>this.successMessage= 'Unable to Save Record');
    
    f.reset();
  }

}
