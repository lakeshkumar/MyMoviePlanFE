import { TestBed } from '@angular/core/testing';

import { MovieTicketSearchResultsService } from './movie-ticket-search-results.service';

describe('MovieTicketSearchResultsService', () => {
  let service: MovieTicketSearchResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTicketSearchResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
