import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFourComponent } from './components/page-four/page-four.component';
import { PageFourRoutingModule } from './page-four-routing.module';



@NgModule({
  imports: [
    PageFourRoutingModule,
    CommonModule
  ],
  declarations: [
    PageFourComponent
  ],
  exports: [
    PageFourComponent
  ]
})
export class PageFourModule { }
