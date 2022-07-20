import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTicketSearchComponent } from './movie-ticket-search.component';

describe('MovieTicketSearchComponent', () => {
  let component: MovieTicketSearchComponent;
  let fixture: ComponentFixture<MovieTicketSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTicketSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTicketSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
