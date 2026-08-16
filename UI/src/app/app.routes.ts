import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'weatherforecast', pathMatch: 'full' },
  {
    path: 'weatherforecast',
    loadComponent: () => import('./weatherforecast').then(m => m.WeatherForecastComponent)
  }
];
