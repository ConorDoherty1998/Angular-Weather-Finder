import { Component, OnInit, NgModule, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  mapType = 'roadmap';
  latlng: number[];
  streetViewControl = false;
  zoom = 13;

  
  @Output() mapClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }
  
  mapClick($event) : void {
    this.latlng = [$event.coords.lat,$event.coords.lng];
    this.mapClicked.emit(this.latlng);
    console.log("clicked :" + $event.coords.lat + "," + $event.coords.lat)
  }
  ngOnInit() {
  }
}