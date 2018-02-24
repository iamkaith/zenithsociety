import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventService } from './event.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpModule,

  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
