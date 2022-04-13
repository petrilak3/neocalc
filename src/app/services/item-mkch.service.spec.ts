import { TestBed } from '@angular/core/testing';

import { ItemMkchService } from './item-mkch.service';

describe('ItemMkchService', () => {
  let service: ItemMkchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemMkchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
