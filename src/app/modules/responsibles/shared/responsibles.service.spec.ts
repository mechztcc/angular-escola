import { TestBed } from '@angular/core/testing';

import { ResponsiblesService } from './responsibles.service';

describe('ResponsiblesService', () => {
  let service: ResponsiblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
