import {Component, OnDestroy, OnInit} from '@angular/core';
import WeatherService from '../services/weather.service';
import {delay} from 'rxjs/operators';
import {error} from 'util';

@Component({
  selector: 'app-page-weather',
  templateUrl: './page-weather.component.html',
  styleUrls: ['./page-weather.component.scss']
})
export class PageWeatherComponent implements OnInit, OnDestroy{
  temperatureData = {
    lineData: [{data: new Array(20), label: 'Temperature'}],
    lineLabels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    colors: [{
      borderColor: '#9a6c30',
      backgroundColor: 'rgba(255,137,101,0.2)',
    }],
  };

  humidityData = {
    lineData: [{data: new Array(20), label: 'Humidity'}],
    lineLabels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    colors: [{
      borderColor: '#2b629a',
      backgroundColor: 'rgba(0,123,255,.2)',
    }],
  };

  pressureData = {
    lineData: [{data: new Array(20), label: 'Pressure'}],
    lineLabels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    colors: [{
      borderColor: '#95989a',
      backgroundColor: 'rgba(224,216,224,0.2)',
    }],
  };

  weather$;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getNewWeatherData(oldDate, newValue: string | number, newDate: Date) {
    return {
      ...oldDate,
      lineData: [{
        data: [
          ...oldDate.lineData[0].data.slice(1, 20),
          newValue,
        ],
        label: oldDate.lineData.label,
      }],
      lineLabels: [
        ...oldDate.lineLabels.slice(1, 20),
        `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`,
      ],
    };
  }

  getWeatherData(delayMs: number = 1000) {
    this.weather$ = this.weather.getWeather()
      .pipe(delay(delayMs))
      .subscribe((body) => {
        const date = new Date(body.date);

        this.temperatureData = this.getNewWeatherData(this.temperatureData, body.temperature, date);
        this.humidityData = this.getNewWeatherData(this.humidityData, body.humidity, date);
        this.pressureData = this.getNewWeatherData(this.pressureData, body.pressure, date);

        this.getWeatherData(delayMs);
      });
  }

  ngOnDestroy(): void {
    this.weather$.unsubscribe();
  }

}
