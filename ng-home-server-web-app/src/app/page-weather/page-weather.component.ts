import {Component, OnDestroy, OnInit} from '@angular/core';
import WeatherService from '../services/weather.service';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-page-weather',
  templateUrl: './page-weather.component.html',
  styleUrls: ['./page-weather.component.scss']
})
export class PageWeatherComponent implements OnInit, OnDestroy {
  temperatureData = {
    lineData: [{data: new Array(20), label: 'Temperature'}],
    lineLabels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    colors: [{
      borderColor: '#9a6c30',
      backgroundColor: 'rgba(255,135,100,0.2)',
    }],
  };

  humidityData = {
    lineData: [{data: new Array(20), label: 'Humidity'}],
    lineLabels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    colors: [{
      borderColor: '#2b629a',
      backgroundColor: 'rgba(0,125,255,0.2)',
    }],
  };

  pressureData = {
    lineData: [{data: new Array(20), label: 'Pressure'}],
    lineLabels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    colors: [{
      borderColor: '#95989a',
      backgroundColor: 'rgba(180,180,180,0.2)',
    }],
  };

  weather$;
  checkWeatherTimeout;

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
        label: oldDate.lineData[0].label,
      }],
      lineLabels: [
        ...oldDate.lineLabels.slice(1, 20),
        `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`,
      ],
    };
  }

  getWeatherData(delayMs: number = 5000) {
    this.weather$ = this.weather.getWeather()
      .subscribe((body) => {
        const date = new Date(body.date);

        this.temperatureData = this.getNewWeatherData(this.temperatureData, body.temperature, date);
        this.humidityData = this.getNewWeatherData(this.humidityData, body.humidity, date);
        this.pressureData = this.getNewWeatherData(this.pressureData, body.pressure, date);

        this.weather$.unsubscribe();
        this.checkWeatherTimeout = setTimeout(() => this.getWeatherData(delayMs), delayMs);
      });
  }

  ngOnDestroy(): void {
    clearTimeout(this.checkWeatherTimeout);
    this.weather$.unsubscribe();
  }

}
