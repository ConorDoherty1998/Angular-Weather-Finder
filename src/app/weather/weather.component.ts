import { Component, OnInit,OnChanges ,Input, SimpleChanges } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  inputs: ['WeatherData']
})
export class WeatherComponent implements OnInit {
  locationData: ILocationResponse;
  errorMessage:string;

  constructor(private _weatherService: WeatherApiService) { }
  @Input() WeatherData: Event;

  getWeatherData(): boolean{
    this._weatherService.getLocationData(this.WeatherData[0],this.WeatherData[1])
      .subscribe(locationData => { this.locationData = locationData;
      console.log('locationData: ' + this.locationData) 
    },
      error => this.errorMessage = <any>error)
      return false;
  }
  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['WeatherData']) {
      this.getWeatherData();
    }
  }
  ngOnInit() {
  }
}