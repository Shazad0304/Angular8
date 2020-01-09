import { TestBed } from '@angular/core/testing';

import { FullnameService } from './fullname.service';

describe('FullnameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullnameService = TestBed.get(FullnameService);
    expect(service).toBeTruthy();
  });
});
