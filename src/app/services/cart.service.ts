import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = ' http://ec2-3-90-43-178.compute-1.amazonaws.com:8082/api/v1/cart';

  getAllMovieTicketsInCart() {
    return this.httpClient.get(`${this.baseURL}/movieTickets/all`);
  }

  addMovieTicketToCart(movieTicket: any) {
    return this.httpClient.post(`${this.baseURL}/movieTickets/add`, movieTicket);
  }

  deleteMovieTicketFromCart(id: any) {
    return this.httpClient.delete(`${this.baseURL}/movieTickets/delete/${id}`);
  }

  deleteAllMovieTicketsFromCart() {
    return this.httpClient.delete(`${this.baseURL}/movieTickets/delete/all`);
  }
}
