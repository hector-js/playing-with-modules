import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFourComponent, PageFourRoutingModule } from '.';

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
