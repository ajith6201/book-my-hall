import { Component } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-my-hall';
  showHead:boolean = false;

  constructor(private router:Router){
    //to hide header & footer in login page
    router.events.forEach((event)=>{
      if(event instanceof NavigationStart)
      {
<<<<<<< HEAD
        if(event['url']==='/login' || event['url']==='/register' || event['url']==='/profile')
=======
        if(event['url']==='/login' || event['url']==='/register' || event['url']==='/profile' || event['url']==='/city' || event['url']==='/booking-details')
>>>>>>> book-my-hall-branch
        {
          this.showHead = false;
        }
        else
        {
          this.showHead = true;
        }
      }
    });
  }
}
