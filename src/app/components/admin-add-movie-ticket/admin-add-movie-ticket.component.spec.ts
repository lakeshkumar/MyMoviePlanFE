import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddMovieTicketComponent } from './admin-add-movie-ticket.component';

describe('AdminAddMovieTicketComponent', () => {
  let component: AdminAddMovieTicketComponent;
  let fixture: ComponentFixture<AdminAddMovieTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddMovieTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddMovieTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
