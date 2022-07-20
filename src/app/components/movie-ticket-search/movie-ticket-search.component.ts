import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieTicketSearchResultsService } from 'src/app/services/movie-ticket-search-results.service';

@Component({
  selector: 'app-movie-ticket-search',
  templateUrl: './movie-ticket-search.component.html',
  styleUrls: ['./movie-ticket-search.component.css']
})
export class MovieTicketSearchComponent implements OnInit {

  public movieTicketSearch: FormGroup;
  movieTicketService: any;
  movieTickets: any;

  constructor(private formBuilder: FormBuilder, 
    private movieTicketSearchResultsService: MovieTicketSearchResultsService,
    private router: Router) {
      this.movieTicketSearch = this.formBuilder.group({
        movieName: ['']
      });
    }

  ngOnInit(): void {
  }

  onSubmit(movieTicketSearchKeyword: FormGroup) {
    console.log(this.movieTicketSearch.value.movieName);
    this.movieTicketSearchResultsService.createMovieTicketSearchResult(this.movieTicketSearch.value.movieName).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/movie-ticket-search-results']);
  }
  
}
  