import { TestBed } from '@angular/core/testing';

import { ApiAvengerService } from './API/api-avenger.service';

describe('AvengerService', () => {
  let service: ApiAvengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAvengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
