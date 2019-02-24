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
import { BookmyhallPhotoGalleryComponent } from './bookmyhall-photo-gallery/bookmyhall-photo-gallery.component';

import { BookmyhallContactUsComponent } from './bookmyhall-contact-us/bookmyhall-contact-us.component';
import { BookmyhallNewspaperComponent } from './bookmyhall-newspaper/bookmyhall-newspaper.component';
import { BookmyhallMinisterProfileComponent } from './bookmyhall-minister-profile/bookmyhall-minister-profile.component';
import { BookmyhallAssociatedOrganisationsComponent } from './bookmyhall-associated-organisations/bookmyhall-associated-organisations.component';
import { BookmyhallWhosWhoComponent } from './bookmyhall-whos-who/bookmyhall-whos-who.component';
import { BookmyhallDirectorsListComponent } from './bookmyhall-directors-list/bookmyhall-directors-list.component';
import { BookmyhallCitizenCharterComponent } from './bookmyhall-citizen-charter/bookmyhall-citizen-charter.component';
import { BookmyhallBookingdetailsComponent } from './bookmyhall-bookingdetails/bookmyhall-bookingdetails.component';
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
  },
  {
    path:'photo-gallery',component:BookmyhallPhotoGalleryComponent
  },
  {
    path:'minister-profile',component:BookmyhallMinisterProfileComponent
  },
  {
    path:'associated-organisations',component:BookmyhallAssociatedOrganisationsComponent
  },
  {
    path:'whos-who',component:BookmyhallWhosWhoComponent
  },
  {
    path:'directors-list',component:BookmyhallDirectorsListComponent
  },
  {
    path:'citizen-charter',component:BookmyhallCitizenCharterComponent
  },
  {
    path:'newspaper',component:BookmyhallNewspaperComponent
  },
  {
    path:'contact-us',component:BookmyhallContactUsComponent
  },
  {
    path:'bookingdetails',component:BookmyhallBookingdetailsComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
