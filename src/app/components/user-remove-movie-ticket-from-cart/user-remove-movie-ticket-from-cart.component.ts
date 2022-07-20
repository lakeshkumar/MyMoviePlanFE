import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-user-remove-movie-ticket-from-cart',
  templateUrl: './user-remove-movie-ticket-from-cart.component.html',
  styleUrls: ['./user-remove-movie-ticket-from-cart.component.css']
})
export class UserRemoveMovieTicketFromCartComponent implements OnInit {

  public removeMovieTicketFromCart: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private cartService: CartService,
              private router: Router) {
                this.removeMovieTicketFromCart = this.formBuilder.group({
                  movieTicketId: []
                });
              }

  ngOnInit(): void {
  }

  onSubmit(removeMovieTicketFromCartId: FormGroup) {
    console.log(this.removeMovieTicketFromCart.value.movieTicketId);
    this.cartService.addMovieTicketToCart(this.removeMovieTicketFromCart.value.movieTicketId).subscribe(data => {
      console.log(data);
    });

    this.router.navigate(['/user-cart']);
  }

}
