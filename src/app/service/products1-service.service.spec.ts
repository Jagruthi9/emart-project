import { TestBed } from '@angular/core/testing';

import { Products1ServiceService } from './products1-service.service';

describe('Products1ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Products1ServiceService = TestBed.get(Products1ServiceService);
    expect(service).toBeTruthy();
  });
});
