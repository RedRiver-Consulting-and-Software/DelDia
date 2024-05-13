export interface WeatherForecast {
  date: {
    year: number;
    month: number;
    day: number;
    dayOfWeek: number;
    dayOfYear: number;
    dayNumber: number;
  };
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
