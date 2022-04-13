import { TestBed } from '@angular/core/testing';

import { ItemHyperService } from './item-hyper.service';

describe('ItemHyperService', () => {
  let service: ItemHyperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemHyperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
