import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface WeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
  date: string;
}

@Injectable({providedIn: 'root'})
export default class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<WeatherData> {
    return this.http.get<WeatherData>('api/weather');
  }
}
