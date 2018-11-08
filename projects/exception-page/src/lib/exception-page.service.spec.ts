import { TestBed } from '@angular/core/testing';

import { ExceptionPageService } from './exception-page.service';

describe('ExceptionPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExceptionPageService = TestBed.get(ExceptionPageService);
    expect(service).toBeTruthy();
  });
});
