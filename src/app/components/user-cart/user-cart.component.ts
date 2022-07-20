import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  public movieTickets: any;

  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllMovieTicketsFromCart();
  }

  getAllMovieTicketsFromCart() {
    this.cartService.getAllMovieTicketsInCart().subscribe(data => {
      this.movieTickets = data;
    });
  }

  deleteMovieTicketFromCart() {
    this.router.navigate(['/user-remove-movie-ticket-from-cart']);
  }

  goToCheckout() {
    this.router.navigate(['/user-checkout']);
  }

}
