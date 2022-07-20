import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-movie-ticket-order-summary',
  templateUrl: './user-movie-ticket-order-summary.component.html',
  styleUrls: ['./user-movie-ticket-order-summary.component.css']
})
export class UserMovieTicketOrderSummaryComponent implements OnInit {

  public movieTickets: any;
  public userDetails: any;

  constructor(private userService: UserService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllUserDetails();
    this.getAllMovieTicketsFromCart();
    this.deleteAllMovieTicketsFromCart();
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

  deleteAllMovieTicketsFromCart() {
    this.cartService.deleteAllMovieTicketsFromCart().subscribe(data => {
      console.log(data);
    });
  }

}
