import { TestBed } from '@angular/core/testing';

import { SellerserviceService } from './sellerservice.service';

describe('SellerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerserviceService = TestBed.get(SellerserviceService);
    expect(service).toBeTruthy();
  });
});
