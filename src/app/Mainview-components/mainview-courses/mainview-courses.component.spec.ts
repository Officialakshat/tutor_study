import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewCoursesComponent } from './mainview-courses.component';

describe('MainviewCoursesComponent', () => {
  let component: MainviewCoursesComponent;
  let fixture: ComponentFixture<MainviewCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainviewCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainviewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
