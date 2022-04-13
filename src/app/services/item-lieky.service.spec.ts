import { TestBed } from '@angular/core/testing';

import { ItemLiekyService } from './item-lieky.service';

describe('ItemLiekyService', () => {
  let service: ItemLiekyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemLiekyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
