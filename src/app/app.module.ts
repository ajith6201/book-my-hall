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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookmyhallHomeComponent,
    BookmyhallAboutusComponent,   
    BookmyhallVisionMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
