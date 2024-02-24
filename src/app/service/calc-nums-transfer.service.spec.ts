import { TestBed } from '@angular/core/testing';

import { CalcNumsTransferService } from './calc-nums-transfer.service';

describe('CalcNumsTransferService', () => {
  let service: CalcNumsTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcNumsTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
