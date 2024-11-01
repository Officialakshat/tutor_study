import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonTutorComponent } from './python-tutor.component';

describe('PythonTutorComponent', () => {
  let component: PythonTutorComponent;
  let fixture: ComponentFixture<PythonTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
