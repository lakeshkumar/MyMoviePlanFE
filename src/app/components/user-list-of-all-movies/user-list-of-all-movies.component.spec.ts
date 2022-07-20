import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListOfAllMoviesComponent } from './user-list-of-all-movies.component';

describe('UserListOfAllMoviesComponent', () => {
  let component: UserListOfAllMoviesComponent;
  let fixture: ComponentFixture<UserListOfAllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListOfAllMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListOfAllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
