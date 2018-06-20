import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFourComponent } from './components/page-four/page-four.component';
import { PageFourRoutingModule } from './page-four-routing.module';
import { MessageProducerModule } from '../message-producer/message-producer.module';

@NgModule({
  imports: [
    PageFourRoutingModule,
    CommonModule,
    MessageProducerModule
  ],
  declarations: [
    PageFourComponent
  ],
  exports: [
    PageFourComponent
  ]
})
export class PageFourModule { }
