import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAccountLoginComponent } from './components/admin-account-login/admin-account-login.component';
import { AdminAddMovieTicketComponent } from './components/admin-add-movie-ticket/admin-add-movie-ticket.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { AdminRemoveMovieTicketComponent } from './components/admin-remove-movie-ticket/admin-remove-movie-ticket.component';
import { AdminUpdateMovieTicketComponent } from './components/admin-update-movie-ticket/admin-update-movie-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { MovieTicketSearchComponent } from './components/movie-ticket-search/movie-ticket-search.component';
import { MovieTicketSearchResultsComponent } from './components/movie-ticket-search-results/movie-ticket-search-results.component';
import { UserAccountDashboardComponent } from './components/user-account-dashboard/user-account-dashboard.component';
import { UserAccountLoginComponent } from './components/user-account-login/user-account-login.component';
import { UserAccountRegistrationComponent } from './components/user-account-registration/user-account-registration.component';
import { UserAddMovieTicketToCartComponent } from './components/user-add-movie-ticket-to-cart/user-add-movie-ticket-to-cart.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { UserCheckoutComponent } from './components/user-checkout/user-checkout.component';
import { UserListOfAllMoviesComponent } from './components/user-list-of-all-movies/user-list-of-all-movies.component';
import { UserMakePaymentComponent } from './components/user-make-payment/user-make-payment.component';
import { UserMovieTicketOrderSummaryComponent } from './components/user-movie-ticket-order-summary/user-movie-ticket-order-summary.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { UserRemoveMovieTicketFromCartComponent } from './components/user-remove-movie-ticket-from-cart/user-remove-movie-ticket-from-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminAccountLoginComponent,
    AdminAddMovieTicketComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminPortalComponent,
    AdminRemoveMovieTicketComponent,
    AdminUpdateMovieTicketComponent,
    HomeComponent,
    MovieTicketSearchComponent,
    MovieTicketSearchResultsComponent,
    UserAccountDashboardComponent,
    UserAccountLoginComponent,
    UserAccountRegistrationComponent,
    UserAddMovieTicketToCartComponent,
    UserCartComponent,
    UserCheckoutComponent,
    UserListOfAllMoviesComponent,
    UserMakePaymentComponent,
    UserMovieTicketOrderSummaryComponent,
    UserNavbarComponent,
    UserPortalComponent,
    UserRemoveMovieTicketFromCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
