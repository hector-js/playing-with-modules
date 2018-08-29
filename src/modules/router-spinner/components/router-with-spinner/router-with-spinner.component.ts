import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-router-with-spinner',
  templateUrl: './router-with-spinner.component.html',
  styleUrls: ['./router-with-spinner.component.css']
})
export class RouterWithSpinnerComponent implements AfterViewInit, OnInit {

  @Input() CLASS_LOADING: string;
  @Input() ROUTER_COMPONENTS: any[];
  @Input() SHOW_EVENTS: any[];
  @Input() HIDE_EVENTS: any[];

  spinnerDisplay = null;

  private $subject = new Subject();
  private navEndFlag: boolean;
  private afterViewFlag: boolean;

  constructor(public router: Router) {}

  @ViewChild(RouterOutlet)
  public routerOutlet: RouterOutlet;

  ngOnInit(): void {
    this.$subject.subscribe((value: string) => {
      this.updateFlags(value);
      this.hideSpinnerWhenPageRenderedAndRouterEventsEnds();
    });

    this.router.events.subscribe(($routerEvent: RouterEvent) => {
      this.showAndHideActioner(this.SHOW_EVENTS, $routerEvent, 'show');
      this.showAndHideActioner(this.HIDE_EVENTS, $routerEvent, 'hide');
      if ($routerEvent instanceof NavigationEnd) {
        this.$subject.next('eventsNavigationFinish');
      }
    });
  }

  ngAfterViewInit(): void {
    this.routerOutlet.activateEvents
    .subscribe($compEvent => this.updatePageRenderedFlag(this.ROUTER_COMPONENTS, $compEvent));
  }

  private updatePageRenderedFlag(list: any[], $event) {
    if (list.filter(item => $event instanceof item).length > 0) {
      this.$subject.next('pageRendered');
    }
  }

  private showAndHideActioner(list: any[], $event, action) {
    if (list.filter(item => $event instanceof item).length > 0) {
      action === 'show' ? this.showSpinner() : this.hideSpinner();
    }
  }

  private hideSpinner(): void {
    this.spinnerDisplay = null;
  }

  private showSpinner(): void {
    this.spinnerDisplay = this.CLASS_LOADING;
  }

  private updateFlags(value: string) {
    if (value === 'eventsNavigationFinish') {
      this.navEndFlag = true;
    } else if (value === 'pageRendered') {
      this.afterViewFlag = true;
    }
  }

  private resetFlags(): void {
    this.navEndFlag = false;
    this.afterViewFlag = false;
  }

  private hideSpinnerWhenPageRenderedAndRouterEventsEnds(): void{
    if (this.navEndFlag && this.afterViewFlag) {
      this.hideSpinner();
      this.resetFlags();
    }
  }

}
