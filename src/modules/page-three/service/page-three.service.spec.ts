import { TestBed, inject } from '@angular/core/testing';

import { PageThreeService } from './page-three.service';

describe('PageThreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageThreeService]
    });
  });

  it('should be created', inject([PageThreeService], (service: PageThreeService) => {
    expect(service).toBeTruthy();
  }));
});
