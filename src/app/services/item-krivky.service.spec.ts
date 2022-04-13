import { TestBed } from '@angular/core/testing';

import { ItemKrivkyService } from './item-krivky.service';

describe('ItemKrivkyService', () => {
  let service: ItemKrivkyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemKrivkyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
