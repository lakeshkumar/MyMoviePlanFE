import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieTicketService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = ' http://localhost:8080/api/v1/movieTicket';

  getAllMovieTickets() {
    return this.httpClient.get(`${this.baseURL}/movieTickets/all`);
  }

  getMovieTicketByMovieName(movieName: any) {
    return this.httpClient.get(`${this.baseURL}/getAParticularMovie/${movieName}`);
  }

  getMovieTicketById(id: any) {
    return this.httpClient.get(`${this.baseURL}/getAParticularMovie/${id}`);
  }

  addMovieTicket(movieTicket: any) {
    return this.httpClient.post(`${this.baseURL}/movieTickets/add`, movieTicket);
  }

  updateMovieTicket(movieTicket: any) {
    return this.httpClient.put(`${this.baseURL}/movieTickets/update`, movieTicket);
  }

  deleteMovieTicket(id: any) {
    return this.httpClient.delete(`${this.baseURL}/movieTickets/delete/${id}`);
  }
}
