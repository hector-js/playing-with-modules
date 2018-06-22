import { AppNavigationService } from './app-navigation.service';
import { NavigationService } from '../../../modules/navigation/services/navigation/navigation.service';
import { PageOneService } from '../../../modules/page-one';
import { PageTwoService } from '../../../modules/page-two';
import { PageThreeService } from '../../../modules/page-three';
import { PageFourService } from '../../../modules/page-four';

import { TestBed } from '@angular/core/testing';

fdescribe('AppNavigationService', () => {
  let appNavigationService: AppNavigationService;
  let navigationServiceSpy;

  beforeEach(() => {
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['applyAction']);
    TestBed.configureTestingModule({
      providers: [
        AppNavigationService,
        PageOneService,
        PageTwoService,
        PageThreeService,
        PageFourService,
        { provide: NavigationService, useValue: navigationServiceSpy },
      ]
    });
    appNavigationService = TestBed.get(AppNavigationService);
  });

  describe('should apply Action when there is a message in', () => {
    let spyApplyAction;

    beforeEach(() => {
      appNavigationService.subscribeToEvents();
      spyApplyAction = appNavigationService.navigationService.applyAction as jasmine.Spy;
    });

    it('page one', () => {
      appNavigationService.pageOneService.sendMessage('continue');
      expect(spyApplyAction.calls.count()).toBe(1);
    });

    it('page two', () => {
      appNavigationService.pageTwoService.sendMessage('continue');
      expect(spyApplyAction.calls.count()).toBe(1);
    });

    it('page three', () => {
      appNavigationService.pageThreeService.sendMessage('continue');
      expect(spyApplyAction.calls.count()).toBe(1);
    });

    it('page four', () => {
      appNavigationService.pageFourService.sendMessage('continue');
      expect(spyApplyAction.calls.count()).toBe(1);
    });
  });
});
