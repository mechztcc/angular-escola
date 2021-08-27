import { TestBed } from '@angular/core/testing';

import { SessionsGuard } from './sessions.guard';

describe('SessionsGuard', () => {
  let guard: SessionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SessionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
