import { TestBed } from '@angular/core/testing';

import { LebenslaufService } from './lebenslauf.service';

describe('LebenslaufService', () => {
  let service: LebenslaufService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LebenslaufService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
