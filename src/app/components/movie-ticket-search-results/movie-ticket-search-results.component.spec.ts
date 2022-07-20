import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTicketSearchResultsComponent } from './movie-ticket-search-results.component';

describe('MovieTicketSearchResultsComponent', () => {
  let component: MovieTicketSearchResultsComponent;
  let fixture: ComponentFixture<MovieTicketSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTicketSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTicketSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
