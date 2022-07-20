import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateMovieTicketComponent } from './admin-update-movie-ticket.component';

describe('AdminUpdateMovieTicketComponent', () => {
  let component: AdminUpdateMovieTicketComponent;
  let fixture: ComponentFixture<AdminUpdateMovieTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateMovieTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateMovieTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
