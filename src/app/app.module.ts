import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '.';
import { AppRoutingModule } from '.';

import { PageOneModule, PageOneService } from '../modules/page-one/';
import { PageTwoModule, PageTwoService } from '../modules/page-two/';
import { PageThreeModule, PageThreeService } from '../modules/page-three/';
import { PageFourModule, PageFourService } from '../modules/page-four/';

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
    PageOneService,
    PageTwoService,
    PageThreeService,
    PageFourService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
