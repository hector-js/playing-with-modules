import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageFourModule, PageFourService } from '../modules/page-four/';
import { PageOneModule, PageOneService } from '../modules/page-one/';
import { PageThreeModule, PageThreeService } from '../modules/page-three/';
import { PageTwoModule, PageTwoService } from '../modules/page-two/';
import { RouterSpinnerModule } from '../modules/router-spinner/router-spinner.module';
import { AppComponent } from './app.component';
import { AppNavigationService } from './services/app-navigation/app-navigation.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PageOneModule,
    PageTwoModule,
    PageThreeModule,
    PageFourModule,
    RouterSpinnerModule
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
