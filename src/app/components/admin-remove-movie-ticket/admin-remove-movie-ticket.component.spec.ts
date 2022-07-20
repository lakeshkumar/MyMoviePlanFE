import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRemoveMovieTicketComponent } from './admin-remove-movie-ticket.component';

describe('AdminRemoveMovieTicketComponent', () => {
  let component: AdminRemoveMovieTicketComponent;
  let fixture: ComponentFixture<AdminRemoveMovieTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRemoveMovieTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRemoveMovieTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
