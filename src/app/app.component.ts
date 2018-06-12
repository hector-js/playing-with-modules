import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nextPage: string;

  constructor(public router: Router) {

  }

  title = 'PLAYING WITH MODULES';
  onContinue() {
    switch (this.nextPage) {
      case '/page-one':
        this.nextPage = '/page-two';
        break;
      case '/page-two':
        this.nextPage = '/page-three';
        break;
      case '/page-three':
        this.nextPage = '/page-four';
        break;
      case '/page-four':
        this.nextPage = '/page-one';
        break;
      default:
        this.nextPage = '/page-one';
    }
    this.router.navigate([this.nextPage]);
  }
  onBack() {
    switch (this.nextPage) {
      case '/page-one':
        this.nextPage = '/page-four';
        break;
      case '/page-two':
        this.nextPage = '/page-one';
        break;
      case '/page-three':
        this.nextPage = '/page-two';
        break;
      case '/page-four':
        this.nextPage = '/page-three';
        break;
      default:
        this.nextPage = '/page-one';
    }
    this.router.navigate([this.nextPage]);
  }
}
