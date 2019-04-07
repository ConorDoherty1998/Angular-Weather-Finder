import { Component, OnInit,OnChanges ,Input, SimpleChanges } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  inputs: ['WeatherData']
})
export class WeatherComponent implements OnInit {
  locationData: any;
  convertedTimes: Date[] = new Array<Date>();
  selectedDate: number = 0;
  errorMessage:string;
  
  constructor(private _weatherService: WeatherApiService) { }
  @Input() WeatherData: Event;

  getWeatherData(): boolean{
    this._weatherService.getLocationData(this.WeatherData[0],this.WeatherData[1])
      .subscribe(locationData => { this.locationData = locationData;
      console.log('locationData: ' + this.locationData.list[0].dt);
      this.convertUnix();
    },
      error => this.errorMessage = <any>error)
      return false;
  }
  convertUnix(){
    console.log("StartConvert")
    this.convertedTimes[0] = new Date(this.locationData.list[0].dt * 1000);
    console.log("converted time for: " + this.convertedTimes[0]);
    for (let i = 1; i<5; i++)
    {
      let x = (i*8)
      console.log(x);
      let tempNumber = this.locationData.list[x].dt*1000;
      this.convertedTimes[i] = new Date(tempNumber);
      console.log("converted time for: " + this.convertedTimes[i]);      
    }
  }
  onDayChanged(event: any)
  {
    this.selectedDate = event.target.value;
  }
  convertToCelcius(kelvin) :string
  {
    return (kelvin - 273.15).toFixed(2); 
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