import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewTestimonialComponent } from './mainview-testimonial.component';

describe('MainviewTestimonialComponent', () => {
  let component: MainviewTestimonialComponent;
  let fixture: ComponentFixture<MainviewTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainviewTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainviewTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
