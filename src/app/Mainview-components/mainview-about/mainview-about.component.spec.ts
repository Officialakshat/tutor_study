import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewAboutComponent } from './mainview-about.component';

describe('MainviewAboutComponent', () => {
  let component: MainviewAboutComponent;
  let fixture: ComponentFixture<MainviewAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainviewAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainviewAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
