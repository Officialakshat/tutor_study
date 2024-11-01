import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeroSecComponent } from './page-hero-sec.component';

describe('PageHeroSecComponent', () => {
  let component: PageHeroSecComponent;
  let fixture: ComponentFixture<PageHeroSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeroSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeroSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
