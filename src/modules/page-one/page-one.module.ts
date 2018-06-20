import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './components/page-one/page-one.component';
import { MessageProducerModule } from '../message-producer/message-producer.module';

@NgModule({
  imports: [
    CommonModule,
    PageOneRoutingModule,
    MessageProducerModule
  ],
  declarations: [
    PageOneComponent
  ],
  exports: [
    PageOneComponent
  ]
})
export class PageOneModule { }
