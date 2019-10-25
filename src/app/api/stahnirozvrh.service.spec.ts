import { TestBed } from '@angular/core/testing';

import { StahnirozvrhService } from './stahnirozvrh.service';

describe('StahnirozvrhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StahnirozvrhService = TestBed.get(StahnirozvrhService);
    expect(service).toBeTruthy();
  });
});
