import { Injectable } from '@angular/core';
import { MessageProducer } from '../../message-producer/class/message-producer/message-producer';

@Injectable()
export class PageTwoService extends MessageProducer {

  constructor() {
    super();
  }

}
