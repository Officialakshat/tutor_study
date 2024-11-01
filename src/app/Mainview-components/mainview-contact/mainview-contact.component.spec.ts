import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewContactComponent } from './mainview-contact.component';

describe('MainviewContactComponent', () => {
  let component: MainviewContactComponent;
  let fixture: ComponentFixture<MainviewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainviewContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainviewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
