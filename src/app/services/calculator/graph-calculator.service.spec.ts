import { TestBed } from '@angular/core/testing';

import { GraphCalculatorService } from './graph-calculator.service';

describe('GraphCalculatorService', () => {
  let service: GraphCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
