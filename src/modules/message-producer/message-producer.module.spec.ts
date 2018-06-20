import { MessageProducerModule } from './message-producer.module';

describe('MessageProducerModule', () => {
  let messageProducerModule: MessageProducerModule;

  beforeEach(() => {
    messageProducerModule = new MessageProducerModule();
  });

  it('should create an instance', () => {
    expect(messageProducerModule).toBeTruthy();
  });
});
