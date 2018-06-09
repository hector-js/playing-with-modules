import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contains element with proper data', () => {
    expect(nativeElement.querySelector('[data-qa="pageOne"]').textContent).toBe('PAGE ONE');
  });
});
