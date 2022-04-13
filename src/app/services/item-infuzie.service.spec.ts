import { TestBed } from '@angular/core/testing';

import { ItemInfuzieService } from './item-infuzie.service';

describe('ItemInfuzieService', () => {
  let service: ItemInfuzieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemInfuzieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
