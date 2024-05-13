import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { DatePipe } from '@angular/common';
import { WeatherService } from '../services/weather.service';
import { WeatherForecast } from '../weatherforecast';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
  export class WeatherForecastComponent implements OnInit {

    forecasts: WeatherForecast[] = [];

    constructor(private datePipe: DatePipe, private weatherService: WeatherService) { }

    ngOnInit(): void {
      this.weatherService.getWeatherForecast()
        .pipe(take(1))
        .subscribe(forecasts => {
          this.forecasts = forecasts;
        });
    }
}
