import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account-login',
  templateUrl: './user-account-login.component.html',
  styleUrls: ['./user-account-login.component.css']
})
export class UserAccountLoginComponent implements OnInit {

  public userAccountLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userAccountLogin = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userAccountLoginCredentials: FormGroup) {
    this.router.navigate(['/user-account-dashboard']);
  }

}
