import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  ActivationEnd,
  ActivationStart,
  ChildActivationEnd,
  ChildActivationStart,
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ResolveEnd,
  ResolveStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterEvent,
  Routes,
  RoutesRecognized,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RouterWithSpinnerComponent } from './router-with-spinner.component';


@Component({
  template: `OneComponent`
})
export class OneComponent {
}

export const routes: Routes = [
  { path: 'OneComponent', component: OneComponent },
];


describe('RouterWithSpinnerComponent', () => {
  let component: RouterWithSpinnerComponent;
  let fixture: ComponentFixture<RouterWithSpinnerComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        RouterWithSpinnerComponent,
        OneComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterWithSpinnerComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    component.CLASS_LOADING = 'loading';

    component.ROUTER_COMPONENTS = [OneComponent];
    component.SHOW_EVENTS = [NavigationStart];
    component.HIDE_EVENTS = [NavigationError, NavigationCancel];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('expect to subscribe to routerOutlet in ngAfterViewInit', () => {
    spyOn(component.routerOutlet.activateEvents, 'subscribe');

    component.ngAfterViewInit();

    expect(component.routerOutlet.activateEvents.subscribe).toHaveBeenCalled();
  });

  it('expect to subscribe to router events in ngOnInit', () => {
    spyOn(component.router.events, 'subscribe');

    component.ngOnInit();

    expect(component.router.events.subscribe).toHaveBeenCalled();
  });

  it('should activate spinner while navigation Start events happens until end ', fakeAsync(() => {
    fixture.detectChanges();
    expect(component.spinnerDisplay).toBe(null);

    router.events.subscribe(($routerEvent: RouterEvent) => {
      if ($routerEvent instanceof NavigationStart ||
        $routerEvent instanceof RouteConfigLoadStart ||
        $routerEvent instanceof RouteConfigLoadEnd ||
        $routerEvent instanceof RoutesRecognized ||
        $routerEvent instanceof GuardsCheckStart ||
        $routerEvent instanceof ChildActivationStart ||
        $routerEvent instanceof ActivationStart ||
        $routerEvent instanceof GuardsCheckEnd ||
        $routerEvent instanceof ResolveStart ||
        $routerEvent instanceof ResolveEnd ||
        $routerEvent instanceof ActivationEnd ||
        $routerEvent instanceof ChildActivationEnd) {
        expect(component.spinnerDisplay).toBe('loading');
      }

      if ($routerEvent instanceof NavigationEnd) {
        expect(component.spinnerDisplay).toBe(null);
      }
    });
    router.navigate(['/OneComponent']);

    tick();

    expect(location.path()).toBe('/OneComponent');
    expect(component.spinnerDisplay).toBe(null);
  }));
});


