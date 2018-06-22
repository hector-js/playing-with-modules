import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppNavigationService } from './services/app-navigation/app-navigation.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageOneService, PageOneModule  } from '../modules/page-one/';
import { PageTwoService, PageTwoModule  } from '../modules/page-two/';
import { PageThreeService, PageThreeModule } from '../modules/page-three/';
import { PageFourService, PageFourModule } from '../modules/page-four/';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PageOneModule,
    PageTwoModule,
    PageThreeModule,
    PageFourModule
  ],
  providers: [
    AppNavigationService,
    PageOneService,
    PageTwoService,
    PageThreeService,
    PageFourService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
