import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFourComponent } from './page-four.component';

describe('PageFourComponent', () => {
  let component: PageFourComponent;
  let fixture: ComponentFixture<PageFourComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageFourComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFourComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contains element with proper data', () => {
    expect(nativeElement.querySelector('[data-qa="pageFour"]').textContent).toBe('PAGE FOUR');
  });
});
