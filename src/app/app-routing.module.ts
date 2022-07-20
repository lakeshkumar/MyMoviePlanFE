import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccountLoginComponent } from './components/admin-account-login/admin-account-login.component';
import { AdminAddMovieTicketComponent } from './components/admin-add-movie-ticket/admin-add-movie-ticket.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { AdminRemoveMovieTicketComponent } from './components/admin-remove-movie-ticket/admin-remove-movie-ticket.component';
import { AdminUpdateMovieTicketComponent } from './components/admin-update-movie-ticket/admin-update-movie-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { MovieTicketSearchResultsComponent } from './components/movie-ticket-search-results/movie-ticket-search-results.component';
import { MovieTicketSearchComponent } from './components/movie-ticket-search/movie-ticket-search.component';
import { UserAccountDashboardComponent } from './components/user-account-dashboard/user-account-dashboard.component';
import { UserAccountLoginComponent } from './components/user-account-login/user-account-login.component';
import { UserAccountRegistrationComponent } from './components/user-account-registration/user-account-registration.component';
import { UserAddMovieTicketToCartComponent } from './components/user-add-movie-ticket-to-cart/user-add-movie-ticket-to-cart.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserCheckoutComponent } from './components/user-checkout/user-checkout.component';
import { UserListOfAllMoviesComponent } from './components/user-list-of-all-movies/user-list-of-all-movies.component';
import { UserMakePaymentComponent } from './components/user-make-payment/user-make-payment.component';
import { UserMovieTicketOrderSummaryComponent } from './components/user-movie-ticket-order-summary/user-movie-ticket-order-summary.component';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { UserRemoveMovieTicketFromCartComponent } from './components/user-remove-movie-ticket-from-cart/user-remove-movie-ticket-from-cart.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'admin-account-login', component: AdminAccountLoginComponent},
  {path: 'user-list-of-all-movies', component: UserListOfAllMoviesComponent},
  {path: 'admin-add-movie-ticket', component: AdminAddMovieTicketComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin-portal', component: AdminPortalComponent},
  {path: 'admin-remove-movie-ticket', component: AdminRemoveMovieTicketComponent},
  {path: 'admin-update-movie-ticket', component: AdminUpdateMovieTicketComponent},
  {path: 'movie-ticket-search', component: MovieTicketSearchComponent},
  {path: 'movie-ticket-search-results', component: MovieTicketSearchResultsComponent},
  {path: 'user-account-dashboard', component: UserAccountDashboardComponent},
  {path: 'user-account-login', component: UserAccountLoginComponent},
  {path: 'user-account-registration', component: UserAccountRegistrationComponent},
  {path: 'user-add-movie-ticket-to-cart', component: UserAddMovieTicketToCartComponent},
  {path: 'user-cart', component: UserCartComponent},
  {path: 'user-checkout', component: UserCheckoutComponent},
  {path: 'user-make-payment', component: UserMakePaymentComponent},
  {path: 'user-movie-ticket-order-summary', component: UserMovieTicketOrderSummaryComponent},
  {path: 'user-portal', component: UserPortalComponent},
  {path: 'user-remove-movie-ticket-from-cart', component: UserRemoveMovieTicketFromCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
