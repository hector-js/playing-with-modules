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

import { RouterSpinnerComponent } from './router-spinner.component';


@Component({
  template: `OneComponent`
})
export class OneComponent {
}

export const routes: Routes = [
  { path: 'OneComponent', component: OneComponent },
];

describe('RouterWithSpinnerComponent', () => {
  let component: RouterSpinnerComponent;
  let fixture: ComponentFixture<RouterSpinnerComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        RouterSpinnerComponent,
        OneComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSpinnerComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    component.loadingClass = 'loading';

    component.routerComponents = [OneComponent];
    component.showEvents = [NavigationStart];
    component.hideEvents = [NavigationError, NavigationCancel];
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


