import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private _siteURL = ['http://api.openweathermap.org/data/2.5/forecast?lat=','&lon='];
  private _key = "&APPID=1e790e10e01ada74c0c3b656511a67f7";
  constructor(private _http: HttpClient) {}
  
  getLocationData(lat,lng): Observable<ILocationResponse> {
    console.log("URL: "+this._siteURL[0]+lat+this._siteURL[1]+lng+this._key);
    return this._http.get<ILocationResponse>(this._siteURL[0]+lat+this._siteURL[1]+lng+this._key).pipe(
    tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    console.log('WeatherApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}