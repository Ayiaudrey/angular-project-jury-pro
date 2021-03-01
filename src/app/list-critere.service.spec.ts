import { TestBed } from '@angular/core/testing';

import { ListCritereService } from './list-critere.service';

describe('ListCritereService', () => {
  let service: ListCritereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCritereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
