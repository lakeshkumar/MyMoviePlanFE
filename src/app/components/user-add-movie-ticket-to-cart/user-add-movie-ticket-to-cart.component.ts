import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-user-add-movie-ticket-to-cart',
  templateUrl: './user-add-movie-ticket-to-cart.component.html',
  styleUrls: ['./user-add-movie-ticket-to-cart.component.css']
})
export class UserAddMovieTicketToCartComponent implements OnInit {

  public addMovieTicketToCart: FormGroup;
  public movieTicket: any;

  constructor(private formBuilder: FormBuilder,
              private cartService: CartService,
              private router: Router) {
                this.addMovieTicketToCart = this.formBuilder.group({
                  movieTicketId: [],
                  movieName: [''],
                  showDate: [''],
                  showTime: [''],
                  showingLocation: [''],
                  price: ['']
                });
              }

  ngOnInit(): void {
  }

  onSubmit(movieTicketDetails: FormGroup) {
    console.log(this.addMovieTicketToCart.value.movieTicketId);
    this.cartService.addMovieTicketToCart(this.addMovieTicketToCart.value).subscribe(data => {
      this.movieTicket = data;
    });
    this.router.navigate(['/user-list-of-all-movies']);
  }
}
