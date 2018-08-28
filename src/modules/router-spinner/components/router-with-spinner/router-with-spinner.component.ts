import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-router-with-spinner',
  templateUrl: './router-with-spinner.component.html',
  styleUrls: ['./router-with-spinner.component.css']
})
export class RouterWithSpinnerComponent implements AfterViewInit, OnInit  {

  @Input() CLASS_LOADING: string;
  @Input() ROUTER_COMPONENTS: any[];
  @Input() SHOW_EVENTS: any[];
  @Input() HIDE_EVENTS: any[];

  spinnerDisplay = null;
  $subject = new Subject();

  private navEndFlag: boolean;
  private afterViewFlag: boolean;

  constructor(public router: Router) {}

  @ViewChild(RouterOutlet)
  public routerOutlet: RouterOutlet;

  ngOnInit(): void {

    this.$subject.subscribe(value => {
      if (value === 'navigation End') {
        this.navEndFlag = true;
      } else if (value === 'ngAfterViewInit') {
        this.afterViewFlag = true;
      }
      if (this.navEndFlag && this.afterViewFlag) {
        this.hideSpinner();
        this.navEndFlag = false;
        this.afterViewFlag = false;
      }
    });

    this.router.events.subscribe(($routerEvent: RouterEvent) => {
      this.showAndHideActioner(this.SHOW_EVENTS, $routerEvent, 'show');
      this.showAndHideActioner(this.HIDE_EVENTS, $routerEvent, 'hide');
      if ($routerEvent instanceof NavigationEnd) {
        this.$subject.next('navigation End');
      }
    });
  }

  ngAfterViewInit(): void {
    this.routerOutlet.activateEvents
    .subscribe($compEvent => this.showAndHideActionerAfter(this.ROUTER_COMPONENTS, $compEvent, 'hide'));
  }

  private showAndHideActionerAfter(list: any[], $event, action) {
    if (list.filter(item => $event instanceof item).length > 0) {
      this.$subject.next('ngAfterViewInit');
    }
  }

  private showAndHideActioner(list: any[], $event, action) {
    if (list.filter(item => $event instanceof item).length > 0) {
      action === 'show' ? this.showSpinner() : this.hideSpinner();
    }
  }

  private hideSpinner() {
    this.spinnerDisplay = null;
  }

  private showSpinner() {
    this.spinnerDisplay = this.CLASS_LOADING;
  }

}
