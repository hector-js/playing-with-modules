import { Component, OnInit } from '@angular/core';
import { PageTwoService } from '../../service/page-two.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {

  constructor(public pageTwoService: PageTwoService) { }

  onContinue() {
    this.pageTwoService.sendMessage('continue');
  }

  onBack() {
    this.pageTwoService.sendMessage('back');
  }

}
