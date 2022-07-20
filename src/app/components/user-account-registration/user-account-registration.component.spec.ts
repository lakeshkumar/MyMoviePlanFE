import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountRegistrationComponent } from './user-account-registration.component';

describe('UserAccountRegistrationComponent', () => {
  let component: UserAccountRegistrationComponent;
  let fixture: ComponentFixture<UserAccountRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
