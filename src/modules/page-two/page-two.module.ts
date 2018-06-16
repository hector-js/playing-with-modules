import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoComponent , PageTwoRoutingModule } from '.';

@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule
  ],
  declarations: [
    PageTwoComponent
  ],
  exports: [
    PageTwoComponent
  ]
})
export class PageTwoModule { }
