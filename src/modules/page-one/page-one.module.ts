import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneComponent, PageOneRoutingModule } from '.';

@NgModule({
  imports: [
    CommonModule,
    PageOneRoutingModule
  ],
  declarations: [
    PageOneComponent
  ],
  exports: [
    PageOneComponent
  ]
})
export class PageOneModule { }
