import { WeatherData } from "@/app/types";
import { getWeatherCategory } from "./categories";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export async function fetchWeather(city: string): Promise<WeatherData> {

    
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;

  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.json().catch(() => null);

    const message =
      err?.message ||
      (res.status === 404
        ? "Ciudad no encontrada"
        : "Error al obtener la información del clima");

    throw new Error(message);
  }

  const data = await res.json();

  const weather = data.weather[0];

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
    description: getWeatherCategory(weather.main, weather.description),
    weatherMain: weather.description,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
}
