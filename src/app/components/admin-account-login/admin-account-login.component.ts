import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-account-login',
  templateUrl: './admin-account-login.component.html',
  styleUrls: ['./admin-account-login.component.css']
})
export class AdminAccountLoginComponent implements OnInit {

  public adminAccountLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.adminAccountLogin = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/admin-dashboard']);
  }

}
