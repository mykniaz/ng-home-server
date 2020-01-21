import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-page-weather',
  templateUrl: './page-weather.component.html',
  styleUrls: ['./page-weather.component.scss']
})
export class PageWeatherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('api/weather').subscribe((body) => {
      console.log(body);
    });
  }

}
