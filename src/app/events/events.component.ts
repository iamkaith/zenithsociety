import { Component, OnInit } from '@angular/core';

import { MyEvent } from '../Event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: MyEvent[];

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
