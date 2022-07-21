import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieTicketSearchResultsService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = ' http://ec2-3-90-43-178.compute-1.amazonaws.com:8082/api/v1/movieTicketSearchResults';

  getMovieTicketByMovieName() {
    return this.httpClient.get(`${this.baseURL}/movieTicket/search/results/all`);
  }

  createMovieTicketSearchResult(movieName: any) {
    return this.httpClient.post(`${this.baseURL}/movieTicket/search/results/add`, movieName);
  }

  deleteAllMovieTicketSearchResults() {
    return this.httpClient.delete(`${this.baseURL}/movieTicket/search/results/delete/all`);
  }
}
