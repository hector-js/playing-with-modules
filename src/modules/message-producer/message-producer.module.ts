import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageProducer } from './class/message-producer/message-producer';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageProducer],
  exports: [MessageProducer]
})
export class MessageProducerModule { }
