import { TestBed } from '@angular/core/testing';

import { LogcheckService } from './logcheck.service';

describe('LogcheckService', () => {
  let service: LogcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
