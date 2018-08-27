import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, RouterEvent, RouterOutlet } from '@angular/router';

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

  constructor(public router: Router) {}

  @ViewChild(RouterOutlet)
  public routerOutlet: RouterOutlet;

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      this.showAndHideActioner(this.SHOW_EVENTS, event, 'show');
      this.showAndHideActioner(this.HIDE_EVENTS, event, 'hide');
    });
  }

  ngAfterViewInit(): void {
    this.routerOutlet.activateEvents
    .subscribe(component =>
      this.showAndHideActioner(this.ROUTER_COMPONENTS, component, 'hide'));
  }

  private showAndHideActioner(list: any[], comparator, action) {

    if (list.filter(item => comparator instanceof item).length > 0) {
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
