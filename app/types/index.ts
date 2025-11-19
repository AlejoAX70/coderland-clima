export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  pressure: number;
  visibility: number;
  clouds: number;
  windSpeed: number;
  windDeg: number;
  description: string;        
  weatherMain: string;        
  sunrise: number;
  sunset: number;
}
