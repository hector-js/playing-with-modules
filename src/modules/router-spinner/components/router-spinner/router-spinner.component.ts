import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-router-spinner',
  templateUrl: './router-spinner.component.html'
})
export class RouterSpinnerComponent implements AfterViewInit, OnInit {

  @Input() routerComponents: any[];
  @Input() showEvents: any[];
  @Input() hideEvents: any[];
  @Input() loadingClass: string;

  spinnerDisplay = null;

  private $subject = new Subject<string>();
  private navEndFlag: boolean;
  private afterViewFlag: boolean;

  constructor(public router: Router) {}

  @ViewChild(RouterOutlet, { static: true })
  public routerOutlet: RouterOutlet;

  ngOnInit(): void {
    this.$subject.subscribe((value: string) => {
      this.updateFlags(value);
      this.hideSpinnerWhenPageRenderedAndRouterEventsEnds();
    });

    this.router.events.subscribe(($routerEvent: RouterEvent) => {
      this.showAndHideActioner(this.showEvents, $routerEvent, 'show');
      this.showAndHideActioner(this.hideEvents, $routerEvent, 'hide');
      if ($routerEvent instanceof NavigationEnd) {
        this.$subject.next('eventsNavigationFinish');
      }
    });
  }

  ngAfterViewInit(): void {
    this.routerOutlet.activateEvents
    .subscribe($compEvent => this.updatePageRenderedFlag(this.routerComponents, $compEvent));
  }

  private updatePageRenderedFlag(list: any[], $event): void {
    if (list.filter(item => $event instanceof item).length > 0) {
      this.$subject.next('pageRendered');
    }
  }

  private showAndHideActioner(list: any[], $event, action): void {
    if (list.filter(item => $event instanceof item).length > 0) {
      action === 'show' ? this.showSpinner() : this.hideSpinner();
    }
  }

  private hideSpinner(): void {
    this.spinnerDisplay = null;
  }

  private showSpinner(): void {
    this.spinnerDisplay = this.loadingClass;
  }

  private updateFlags(value: string): void {
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

  private hideSpinnerWhenPageRenderedAndRouterEventsEnds(): void {
    if (this.navEndFlag && this.afterViewFlag) {
      this.hideSpinner();
      this.resetFlags();
    }
  }

}
