import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmyhallHomeComponent } from './bookmyhall-home/bookmyhall-home.component';
import { BookmyhallAboutusComponent } from './bookmyhall-aboutus/bookmyhall-aboutus.component';
import { BookmyhallVisionMissionComponent } from './bookmyhall-vision-mission/bookmyhall-vision-mission.component';


const routes: Routes = 
[
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:BookmyhallHomeComponent
  },
  {
    path:'aboutus',component:BookmyhallAboutusComponent
  },
  {
    path:'vision-mission',component:BookmyhallVisionMissionComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
