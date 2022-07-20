import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-account-registration',
  templateUrl: './user-account-registration.component.html',
  styleUrls: ['./user-account-registration.component.css']
})
export class UserAccountRegistrationComponent implements OnInit {

  public userAccountRegistration: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
                this.userAccountRegistration = this.formBuilder.group({
                  firstName: [''],
                  lastName: [''],
                  username: [''],
                  email: [''],
                  password: ['']
                });
              }

  ngOnInit(): void {
  }

  onSubmit(userAccountRegistrationDetails: FormGroup) {
    this.userService.addUser(this.userAccountRegistration.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/user-account-login']);
  }

}
