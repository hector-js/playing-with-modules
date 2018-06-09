import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageOneModule } from '../modules/page-one/page-one.module';
import { PageTwoModule } from '../modules/page-two/page-two.module';
import { PageThreeModule } from '../modules/page-three/page-three.module';
import { PageFourModule } from '../modules/page-four/page-four.module';
import { PageOneService } from '../modules/page-one/service/page-one.service';
import { PageTwoService } from '../modules/page-two/service/page-two.service';
import { PageThreeService } from '../modules/page-three/service/page-three.service';
import { PageFourService } from '../modules/page-four/service/page-four.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
