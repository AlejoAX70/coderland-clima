

import { WeatherData } from "@/app/types";
import { getWeatherCategory } from "./categories";

export function normalizeWeatherData(data: any): WeatherData {
  const w = data.weather[0];
  const categoria = getWeatherCategory(w.main, w.description);

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    visibility: data.visibility,
    clouds: data.clouds.all,
    windSpeed: data.wind.speed,
    windDeg: data.wind.deg,
    description: categoria,
    weatherMain: w.description,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
}
