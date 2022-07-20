import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMovieTicketOrderSummaryComponent } from './user-movie-ticket-order-summary.component';

describe('UserMovieTicketOrderSummaryComponent', () => {
  let component: UserMovieTicketOrderSummaryComponent;
  let fixture: ComponentFixture<UserMovieTicketOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMovieTicketOrderSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMovieTicketOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
