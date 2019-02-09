import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
import { BookmyhallRegistrationComponent } from './bookmyhall-registration/bookmyhall-registration.component';
import { BookmyhallProfileComponent } from './bookmyhall-profile/bookmyhall-profile.component';
import { BookmyhallPhotoGalleryComponent } from './bookmyhall-photo-gallery/bookmyhall-photo-gallery.component';
import { BookmyhallNewspaperComponent } from './bookmyhall-newspaper/bookmyhall-newspaper.component';
import { BookmyhallMinisterProfileComponent } from './bookmyhall-minister-profile/bookmyhall-minister-profile.component';
import { BookmyhallAssociatedOrganisationsComponent } from './bookmyhall-associated-organisations/bookmyhall-associated-organisations.component';
import { BookmyhallWhosWhoComponent } from './bookmyhall-whos-who/bookmyhall-whos-who.component';
import { BookmyhallDirectorsListComponent } from './bookmyhall-directors-list/bookmyhall-directors-list.component';
import { BookmyhallCitizenCharterComponent } from './bookmyhall-citizen-charter/bookmyhall-citizen-charter.component';
import { BookmyhallContactUsComponent } from './bookmyhall-contact-us/bookmyhall-contact-us.component';
import { AppConstants } from './app.constants';
import { UtilityService } from './services/utility.service';
import { AuthService } from './services/auth.service';
import { CityComponent } from './city/city.component';
import { HallslistComponent } from './hallslist/hallslist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookmyhallHomeComponent,
    BookmyhallAboutusComponent,   
    BookmyhallVisionMissionComponent, 
    BookmyhallRtiComponent, 
    BookmyhallDownloadsComponent, 
    BookmyhallInformationCenterComponent, 
    BookmyhallDistrictOfficesComponent, 
    BookmyhallPmuComponent, 
    BookmyhallOnlineApplicationsComponent,
    BookmyhallLoginComponent,
    BookmyhallRegistrationComponent,
    BookmyhallProfileComponent,
    BookmyhallPhotoGalleryComponent,
    BookmyhallNewspaperComponent,
    BookmyhallMinisterProfileComponent,
    BookmyhallAssociatedOrganisationsComponent,
    BookmyhallWhosWhoComponent,
    BookmyhallDirectorsListComponent,
    BookmyhallCitizenCharterComponent,
    BookmyhallContactUsComponent,
    CityComponent,
    HallslistComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,  
    ReactiveFormsModule
    ],
  providers: [UserService,UtilityService,AuthService,AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
