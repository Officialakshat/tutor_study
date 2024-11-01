import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTutorComponent } from './js-tutor.component';

describe('JsTutorComponent', () => {
  let component: JsTutorComponent;
  let fixture: ComponentFixture<JsTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
