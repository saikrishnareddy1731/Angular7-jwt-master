import { TestBed } from '@angular/core/testing';

import { BasicAuthHttpInterceptService } from './basic-auth-http-intercept.service';

describe('BasicAuthHttpInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHttpInterceptService = TestBed.get(BasicAuthHttpInterceptService);
    expect(service).toBeTruthy();
  });
});
