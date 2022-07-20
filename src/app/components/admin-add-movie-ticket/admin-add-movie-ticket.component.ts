import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieTicketService } from 'src/app/services/movie-ticket.service';

@Component({
  selector: 'app-admin-add-movie-ticket',
  templateUrl: './admin-add-movie-ticket.component.html',
  styleUrls: ['./admin-add-movie-ticket.component.css']
})
export class AdminAddMovieTicketComponent implements OnInit {

  public addMovieTicket: FormGroup;

  constructor(private formBuilder: FormBuilder, private movieTicketService: MovieTicketService, private router: Router) {
    this.addMovieTicket = this.formBuilder.group({
      movieName: [''],
      showDate: [''],
      showTime: [''],
      showingLocation: [''],
      price: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit(addMovieTicket: FormGroup) {
    this.movieTicketService.addMovieTicket(this.addMovieTicket.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin-account-login']);
  }

}
