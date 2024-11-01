import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTutorComponent } from './html-tutor.component';

describe('HtmlTutorComponent', () => {
  let component: HtmlTutorComponent;
  let fixture: ComponentFixture<HtmlTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
