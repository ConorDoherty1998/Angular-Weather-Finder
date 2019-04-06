import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather-Finder'

  public clickedEvent: Event;
  
  passEvent(event: Event)
  {
    this.clickedEvent = event;
    console.log( event + " Passed to weather");
  }
}