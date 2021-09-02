import { TestBed } from '@angular/core/testing';

import { HandlerTokenInterceptor } from './handler-token.interceptor';

describe('HandlerTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HandlerTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HandlerTokenInterceptor = TestBed.inject(HandlerTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
