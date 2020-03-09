import { TestBed } from '@angular/core/testing';

import { GelleryPaginateService } from './gellery-paginate.service';

describe('GelleryPaginateService', () => {
  let service: GelleryPaginateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GelleryPaginateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
