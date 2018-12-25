import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BookmyhallLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
