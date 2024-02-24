import { TestBed } from '@angular/core/testing';

import { ZodiacTransferService } from './zodiac-transfer.service';

describe('ZodiacTransferService', () => {
  let service: ZodiacTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZodiacTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
