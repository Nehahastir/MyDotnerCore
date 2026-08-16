import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF?: number;
  summary?: string;
}

@Component({
  selector: 'weather-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weatherforecast.html',
  styleUrls: ['./weatherforecast.css']
})
export class WeatherForecastComponent implements OnInit {
  forecasts: WeatherForecast[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.http.get<WeatherForecast[]>('http://localhost:5000/weatherforecast').subscribe({
      next: data => {
        console.log('Weather forecasts loaded:', data);
        this.forecasts = data ?? [];
        this.loading = false;
      },
      error: err => {
        this.error = err?.message ?? 'Failed to load forecasts';
        this.loading = false;
      }
    });
  }
}
