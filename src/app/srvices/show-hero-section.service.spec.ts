import { TestBed } from '@angular/core/testing';

import { ShowHeroSectionService } from './show-hero-section.service';

describe('ShowHeroSectionService', () => {
  let service: ShowHeroSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHeroSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
