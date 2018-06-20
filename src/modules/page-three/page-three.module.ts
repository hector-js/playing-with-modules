import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageThreeRoutingModule } from './page-three-routing.module';
import { MessageProducerModule } from '../message-producer/message-producer.module';

@NgModule({
  imports: [
    CommonModule,
    PageThreeRoutingModule,
    MessageProducerModule
  ],
  declarations: [
    PageThreeComponent
  ],
  exports: [
    PageThreeComponent,
  ]
})
export class PageThreeModule { }
