import { TestBed } from '@angular/core/testing';

import { ItemOdporucaniaService } from './item-odporucania.service';

describe('ItemOdporucaniaService', () => {
  let service: ItemOdporucaniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemOdporucaniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
