import { Injectable } from '@angular/core';
import { EventsSubscriber } from '../../../modules/message-producer';
import { PageOneService } from '../../../modules/page-one';
import { NavigationService } from '../../../modules/navigation';
import { PageTwoService } from '../../../modules/page-two';
import { PageFourService } from '../../../modules/page-four';
import { PageThreeService } from '../../../modules/page-three';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationService implements EventsSubscriber {

  constructor(
    public navigationService: NavigationService,
    public pageOneService: PageOneService,
    public pageTwoService: PageTwoService,
    public pageThreeService: PageThreeService,
    public pageFourService: PageFourService) { }

  private pageServices = [
    this.pageOneService,
    this.pageTwoService,
    this.pageThreeService,
    this.pageFourService
  ];

  subscribeToEvents() {
    this.pageServices.forEach(
      service => service.listenMessage()
        .subscribe(action => this.navigationService.applyAction(action)));
  }

}
