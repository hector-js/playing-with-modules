import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageTwoRoutingModule } from './page-two-routing.module';
import { MessageProducerModule } from '../message-producer/message-producer.module';

@NgModule({
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    MessageProducerModule
  ],
  declarations: [
    PageTwoComponent
  ],
  exports: [
    PageTwoComponent
  ]
})
export class PageTwoModule { }
