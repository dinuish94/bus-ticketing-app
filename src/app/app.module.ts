import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TicketSelectionComponent } from './ticket-selection/ticket-selection.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckinService } from './checkin/checkin.service';
import { TicketSelectionService } from './ticket-selection/ticket-selection.service';

@NgModule({
  declarations: [
    AppComponent,
    TicketSelectionComponent,
    HomeComponent,
    CheckinComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
     CheckinService,
     TicketSelectionService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
