import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MyEvent } from './Event';
import { MYEVENTS } from './Data';
import { forEach } from '@angular/router/src/utils/collection';
import { error } from 'util';



@Injectable()
export class EventService {

  constructor(
    private http: Http,
  ) { }
  
  

  // STATIC
  // GET ALL EVENTS
  getEvents(): Observable<MyEvent[]> {
    return of(MYEVENTS);
  }

  // GET EVENT BY EVENT ID
  getEvent(id: number): Observable<MyEvent> {
    return of(MYEVENTS.find(event => event.eventId === id ));
  }



  // this is supposed to be for functioning with the api but I couldn't get it to work

  private BASE_URL = 'api/'; 
  private headers = new Headers({ 'Content-Type': 'application/json' });

  getAllEvents(): Observable<MyEvent[]> {
    return this.http.get(this.BASE_URL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error cannot get events')) ;
  }

  createEvent(event: MyEvent): Observable<MyEvent> {
    let url = `${this.BASE_URL}`;
    
    return this.http.post(url, JSON.stringify(event), {headers: this.headers} )
      .map((res: Response) => res.json())
      .catch((error :any) => Observable.throw(error.json().error || 'Adding new event error')); 
  }


  updateEvent(event: MyEvent): Observable<MyEvent> {   
    
    let url = `${this.BASE_URL}/${event.eventId}`;

    return this.http.put(url, JSON.stringify(event), {headers: this.headers} )
      .map((res: Response) => res.json())
      .catch((error :any) => Observable.throw(error.json().error || `Update on id:${event.eventId}`)); 

  } 

  deleteEvent(id: number): Observable<MyEvent> {
    let url = `${this.BASE_URL}/${id}`;

    return this.http.delete(url)
      .map((res: Response) => res.json())
      .catch((error :any) => Observable.throw(error.json().error || `Deleting on id:${id}`)); 
  }

}
