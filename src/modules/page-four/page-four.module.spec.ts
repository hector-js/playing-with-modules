import { PageFourModule } from './page-four.module';

describe('PageFourModule', () => {
  let pageFourModule: PageFourModule;

  beforeEach(() => {
    pageFourModule = new PageFourModule();
  });

  it('should create an instance', () => {
    expect(pageFourModule).toBeTruthy();
  });
});
