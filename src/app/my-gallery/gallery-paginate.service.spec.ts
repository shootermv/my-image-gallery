import { TestBed } from '@angular/core/testing';

import { GalleryPaginateService } from './gallery-paginate.service';

describe('GelleryPaginateService', () => {
  let service: GalleryPaginateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryPaginateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
