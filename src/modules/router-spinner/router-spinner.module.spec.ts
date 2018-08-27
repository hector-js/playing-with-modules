import { RouterSpinnerModule } from './router-spinner.module';

describe('RouterSpinnerModule', () => {
  let routerSpinnerModule: RouterSpinnerModule;

  beforeEach(() => {
    routerSpinnerModule = new RouterSpinnerModule();
  });

  it('should create an instance', () => {
    expect(routerSpinnerModule).toBeTruthy();
  });
});
