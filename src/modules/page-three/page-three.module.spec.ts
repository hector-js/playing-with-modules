import { PageThreeModule } from './page-three.module';

describe('PageThreeModule', () => {
  let pageThreeModule: PageThreeModule;

  beforeEach(() => {
    pageThreeModule = new PageThreeModule();
  });

  it('should create an instance', () => {
    expect(pageThreeModule).toBeTruthy();
  });
});
