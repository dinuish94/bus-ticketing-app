import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TicketSelectionComponent } from './ticket-selection/ticket-selection.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent /*,canActivate:[AuthGuard]*/ },
    { path: 'tickets/:token', component: TicketSelectionComponent },
    { path: 'checkin', component: CheckinComponent },   
    { path: 'checkout', component: CheckoutComponent },        
    { path: '',redirectTo: 'home', pathMatch: 'full'}
]
  
@NgModule({
imports: [
    CommonModule,
    RouterModule.forRoot(routes)
],
exports: [
],
})
export class AppRoutingModule { }