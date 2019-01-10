import { BookmyhallProfileComponent } from './bookmyhall-profile/bookmyhall-profile.component';
import { BookmyhallRegistrationComponent } from './bookmyhall-registration/bookmyhall-registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmyhallHomeComponent } from './bookmyhall-home/bookmyhall-home.component';
import { BookmyhallAboutusComponent } from './bookmyhall-aboutus/bookmyhall-aboutus.component';
import { BookmyhallVisionMissionComponent } from './bookmyhall-vision-mission/bookmyhall-vision-mission.component';
import { BookmyhallRtiComponent } from './bookmyhall-rti/bookmyhall-rti.component';
import { BookmyhallDownloadsComponent } from './bookmyhall-downloads/bookmyhall-downloads.component';
import { BookmyhallInformationCenterComponent } from './bookmyhall-information-center/bookmyhall-information-center.component';
import { BookmyhallDistrictOfficesComponent } from './bookmyhall-district-offices/bookmyhall-district-offices.component';
import { BookmyhallPmuComponent } from './bookmyhall-pmu/bookmyhall-pmu.component';
import { BookmyhallOnlineApplicationsComponent } from './bookmyhall-online-applications/bookmyhall-online-applications.component';
import { BookmyhallLoginComponent } from './bookmyhall-login/bookmyhall-login.component';
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
  },
  {
    path:'rti',component:BookmyhallRtiComponent
  }
  ,
  {
    path:'downloads',component:BookmyhallDownloadsComponent, 
  }
  ,
  {
    path:'information-center',component:BookmyhallInformationCenterComponent
  }
  ,
  {
    path:'district-offices',component:BookmyhallDistrictOfficesComponent
  },
  {
    path:'pmu',component:BookmyhallPmuComponent
  },
  {
    path:'online-applications',component:BookmyhallOnlineApplicationsComponent
  },
  {
    path:'login',component:BookmyhallLoginComponent
  },
  {
    path:'register',component:BookmyhallRegistrationComponent
  },
  {
    path:'profile',component:BookmyhallProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
