import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieTicketService } from 'src/app/services/movie-ticket.service';

@Component({
  selector: 'app-admin-update-movie-ticket',
  templateUrl: './admin-update-movie-ticket.component.html',
  styleUrls: ['./admin-update-movie-ticket.component.css']
})
export class AdminUpdateMovieTicketComponent implements OnInit {

  public updateMovieTicketDetails: FormGroup;

  constructor(private formBuilder: FormBuilder, private movieTicketService: MovieTicketService, private router: Router) {
    this.updateMovieTicketDetails = this.formBuilder.group({
      movieTicketId: [],
      movieName: [''],
      showDate: [''],
      showTime: [''],
      showingLocation: [''],
      price: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit(movieTicketDetails: FormGroup) {
    this.movieTicketService.updateMovieTicket(this.updateMovieTicketDetails.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin-dashboard']);
  }
}
