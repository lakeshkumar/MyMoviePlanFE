import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-make-payment',
  templateUrl: './user-make-payment.component.html',
  styleUrls: ['./user-make-payment.component.css']
})
export class UserMakePaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  makePayment() {
    this.router.navigate(['/user-movie-ticket-order-summary']);
  }

}
