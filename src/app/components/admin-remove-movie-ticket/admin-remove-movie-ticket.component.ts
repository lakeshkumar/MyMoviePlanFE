import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieTicketService } from 'src/app/services/movie-ticket.service';

@Component({
  selector: 'app-admin-remove-movie-ticket',
  templateUrl: './admin-remove-movie-ticket.component.html',
  styleUrls: ['./admin-remove-movie-ticket.component.css']
})
export class AdminRemoveMovieTicketComponent implements OnInit {

  public removeMovieTicket: FormGroup;
  public movieTicketId: any;

  constructor(private formBuilder: FormBuilder, private movieTicketService: MovieTicketService, private router: Router) {
    this.removeMovieTicket = this.formBuilder.group({
      movieTicketId: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit(movieTicketId: any) {
    console.log(this.removeMovieTicket.value.movieTicketId);
    this.movieTicketService.deleteMovieTicket(this.removeMovieTicket.value.movieTicketId).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin-dashboard']);
  }
}
