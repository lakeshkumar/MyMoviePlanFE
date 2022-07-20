import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicketService } from 'src/app/services/movie-ticket.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public movieTickets: any;

  constructor(private movieTicketService: MovieTicketService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMovieTickets();
  }

  private getAllMovieTickets() {
    this.movieTicketService.getAllMovieTickets().subscribe(data => {
      this.movieTickets = data;
    });
  }

  updateMovieTicket() {
    this.router.navigate(['/admin-update-movie-ticket']);
  }

  deleteMovieTicket() {
    this.router.navigate(['/admin-remove-movie-ticket']);
  }

  addMovieTicket() {
    this.router.navigate(['/admin-add-movie-ticket']);
  }

}
