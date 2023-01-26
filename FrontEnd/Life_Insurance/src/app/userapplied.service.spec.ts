import { TestBed } from '@angular/core/testing';

import { UserappliedService } from './userapplied.service';

describe('UserappliedService', () => {
  let service: UserappliedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserappliedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
