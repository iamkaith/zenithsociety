import { Component, OnInit } from '@angular/core';

import { MyEvent } from '../Event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  events: MyEvent[] = [];

  constructor(
    private eventService: EventService
  ) { }
  
  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

}
