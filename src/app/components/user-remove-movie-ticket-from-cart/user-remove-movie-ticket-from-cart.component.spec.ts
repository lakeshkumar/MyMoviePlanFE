import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemoveMovieTicketFromCartComponent } from './user-remove-movie-ticket-from-cart.component';

describe('UserRemoveMovieTicketFromCartComponent', () => {
  let component: UserRemoveMovieTicketFromCartComponent;
  let fixture: ComponentFixture<UserRemoveMovieTicketFromCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRemoveMovieTicketFromCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRemoveMovieTicketFromCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
