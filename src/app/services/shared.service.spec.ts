import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate de price', () => {
    service.calculateProductDiscount(10, 2);
    service.resultValue.subscribe((value) => {
      expect(value).toEqual(8);
    });
  });
});
