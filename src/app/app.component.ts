import { Component } from '@angular/core';
import { Trip } from './app.trip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travel App';
  public trips = [];
  public newTrip = new Trip();
  public trip:Trip;
  
  addTrip(newTrip) {
    this.trip = new Trip();
    this.trip.title = newTrip.title;
    this.trips.push(this.trip);
    this.newTrip.title = '';
  }

  // deleteTrip(trip) {
  //   this.trips.pop(trip);
  // }
}
