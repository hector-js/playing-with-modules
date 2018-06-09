import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThreeComponent } from './page-three.component';

describe('PageThreeComponent', () => {
  let component: PageThreeComponent;
  let fixture: ComponentFixture<PageThreeComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThreeComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contains element with proper data', () => {
    expect(nativeElement.querySelector('[data-qa="pageThree"]').textContent).toBe('PAGE THREE');
  });
});
