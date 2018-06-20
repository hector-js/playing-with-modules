import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../modules/navigation/services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PLAYING WITH MODULES';

  constructor(public navigationService: NavigationService) {
    navigationService.subscribeActionEvents();
  }

  ngOnInit() {

  }

}
