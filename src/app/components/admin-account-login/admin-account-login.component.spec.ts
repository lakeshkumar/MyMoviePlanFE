import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountLoginComponent } from './admin-account-login.component';

describe('AdminAccountLoginComponent', () => {
  let component: AdminAccountLoginComponent;
  let fixture: ComponentFixture<AdminAccountLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
