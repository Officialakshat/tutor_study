import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTutorComponent } from './css-tutor.component';

describe('CssTutorComponent', () => {
  let component: CssTutorComponent;
  let fixture: ComponentFixture<CssTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
