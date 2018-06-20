import { Injectable } from '@angular/core';
import { MessageProducer } from '../../message-producer/class/message-producer/message-producer';

@Injectable()
export class PageFourService extends MessageProducer {

  constructor() {
    super();
  }

}
