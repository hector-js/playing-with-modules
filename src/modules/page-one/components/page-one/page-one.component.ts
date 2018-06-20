import { Component } from '@angular/core';
import { PageOneService } from '../../service/page-one.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {

  constructor(public pageOneService: PageOneService) { }

  onContinue() {
    this.pageOneService.sendMessage('continue');
  }

  onBack() {
    this.pageOneService.sendMessage('back');
  }
}
