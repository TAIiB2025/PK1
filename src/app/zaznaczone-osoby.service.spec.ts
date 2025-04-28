import { TestBed } from '@angular/core/testing';

import { ZaznaczoneOsobyService } from './zaznaczone-osoby.service';

describe('ZaznaczoneOsobyService', () => {
  let service: ZaznaczoneOsobyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZaznaczoneOsobyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
