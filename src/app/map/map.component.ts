import { Component, OnInit, NgModule, Output } from '@angular/core';
import { WeatherApiService } from '../weather-api.service'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 54.276194;
  longitude = -8.459080;
  mapType = 'roadmap';
  streetViewControl = false;
  zoom = 13;

  latlng: number[]
  @Output() mapClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }
  
  mapClick(lat: number,lng: number) : void {
    this.latlng = [lat,lng];
    this.mapClicked.emit(this.latlng);
    console.log("clicked :" + lat + "," + lng)
  }
  ngOnInit() {
  }
}