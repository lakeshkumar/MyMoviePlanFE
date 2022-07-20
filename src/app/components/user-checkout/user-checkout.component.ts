import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {

  public movieTickets: any;
  public userDetails: any;

  constructor(private userService: UserService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllUserDetails();
    this.getAllMovieTicketsFromCart();
  }

  getAllUserDetails() {
    this.userService.getAllUsers().subscribe(data => {
      this.userDetails = data;
    });
  }

  getAllMovieTicketsFromCart() {
    this.cartService.getAllMovieTicketsInCart().subscribe(data => {
      this.movieTickets = data;
    });
  }

  goToPayment() {
    this.router.navigate(['/user-make-payment']);
  }

}
