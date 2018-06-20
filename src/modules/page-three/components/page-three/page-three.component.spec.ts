import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThreeComponent } from './page-three.component';
import { PageThreeService } from '../../service/page-three.service';

describe('PageThreeComponent', () => {
  let component: PageThreeComponent;
  let fixture: ComponentFixture<PageThreeComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageThreeComponent ],
      providers: [
        PageThreeService
      ]
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
