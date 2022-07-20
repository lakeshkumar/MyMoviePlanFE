import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddMovieTicketToCartComponent } from './user-add-movie-ticket-to-cart.component';

describe('UserAddMovieTicketToCartComponent', () => {
  let component: UserAddMovieTicketToCartComponent;
  let fixture: ComponentFixture<UserAddMovieTicketToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddMovieTicketToCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddMovieTicketToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
