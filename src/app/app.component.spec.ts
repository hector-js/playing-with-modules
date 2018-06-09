import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PageOneModule } from '../modules/page-one/page-one.module';
import { PageTwoModule } from '../modules/page-two/page-two.module';
import { PageThreeModule } from '../modules/page-three/page-three.module';
import { PageFourModule } from '../modules/page-four/page-four.module';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PageOneModule,
        PageTwoModule,
        PageThreeModule,
        PageFourModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contains', async(() => {
    expect(nativeElement.querySelector('[data-qa="appTitle"]').textContent).toBe('Play with modules');
    expect(nativeElement.querySelector('[data-qa="pageOne"]').textContent).toBe('PAGE ONE');
    expect(nativeElement.querySelector('[data-qa="pageTwo"]').textContent).toBe('PAGE TWO');
    expect(nativeElement.querySelector('[data-qa="pageThree"]').textContent).toBe('PAGE THREE');
    expect(nativeElement.querySelector('[data-qa="pageFour"]').textContent).toBe('PAGE FOUR');
  }));
});
