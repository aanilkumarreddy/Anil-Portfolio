import { TestBed } from '@angular/core/testing';

import { ManualSpinnyService } from './manual-spinny.service';

describe('ManualSpinnyService', () => {
  let service: ManualSpinnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManualSpinnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
