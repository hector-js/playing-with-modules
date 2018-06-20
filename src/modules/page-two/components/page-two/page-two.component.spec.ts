import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoComponent } from './page-two.component';
import { PageTwoService } from '../../service/page-two.service';

describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoComponent ],
      providers: [
        PageTwoService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contains element with proper data', () => {
    expect(nativeElement.querySelector('[data-qa="pageTwo"]').textContent).toBe('PAGE TWO');
  });
});
