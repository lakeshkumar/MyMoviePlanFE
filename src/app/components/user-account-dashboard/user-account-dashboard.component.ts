import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-account-dashboard',
  templateUrl: './user-account-dashboard.component.html',
  styleUrls: ['./user-account-dashboard.component.css']
})
export class UserAccountDashboardComponent implements OnInit {

  public userDetails: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  goToMovieTicketSearch() {
    this.router.navigate(['/movie-ticket-search']);
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.userDetails = data;
    });
  }

  goToListOfAllMovieTickets() {
    this.router.navigate(['/user-list-of-all-movies']);
  }

}
