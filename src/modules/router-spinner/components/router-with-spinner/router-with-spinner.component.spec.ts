import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterWithSpinnerComponent } from './router-with-spinner.component';

describe('RouterWithSpinnerComponent', () => {
  let component: RouterWithSpinnerComponent;
  let fixture: ComponentFixture<RouterWithSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterWithSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterWithSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
