import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationError, NavigationStart } from '@angular/router';

import { NavigationService } from '../modules/navigation/services/navigation/navigation.service';
import { PageFourComponent } from '../modules/page-four';
import { PageOneComponent } from '../modules/page-one';
import { PageThreeComponent } from '../modules/page-three';
import { PageTwoComponent } from '../modules/page-two';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PLAYING WITH MODULES';

  CLASS_LOADING = 'loading';

  components = [
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent
  ];

  displayEvents = [
    NavigationStart
  ];

  hideEvents = [
    NavigationCancel,
    NavigationError
  ];

  constructor(public navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.subscribeActionEvents();
  }

}
