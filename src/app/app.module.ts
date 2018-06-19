import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '.';
import { AppRoutingModule } from '.';

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
    PageOneService,
    PageTwoService,
    PageThreeService,
    PageFourService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
