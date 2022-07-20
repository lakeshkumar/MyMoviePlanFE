import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = ' http://localhost:8080/api/v1/user';

  addUser(user: any) {
    return this.httpClient.post(`${this.baseURL}/users/add`, user);
  }
  
  getAllUsers() {
    return this.httpClient.get(`${this.baseURL}/users/all`);
  }

  getUserById(id: any) {
    return this.httpClient.get(`${this.baseURL}/users/getParticularUser/${id}`);
  }

  getUserDetails(id: number, firstName: string, lastName: string, username: string, password: string) {
    return this.httpClient.get(`${this.baseURL}/getAParticularUser/details`);
  }
}
