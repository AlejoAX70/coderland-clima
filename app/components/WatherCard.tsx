import {
  Cloud,
  Droplets,
  Wind,
  Sunrise,
  Sunset,
  ThermometerSun,
} from "lucide-react";
import { WeatherData } from "../types/index";
import {
  formatTime,
  getWeatherCategory,
  windDirection,
} from "../utils/weather";
import { weatherIcons } from "../utils/weather/weatherIcons";

interface Props {
  data: WeatherData;
}

export default function WeatherCard({ data }: Props) {
  return (
    <div
      className="w-full max-w-2xl mx-auto bg-white/60 backdrop-blur-xl 
                 rounded-3xl shadow-xl p-8 border border-white/40"
    >
      {/* City Name */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-1">
          {data.city}, {data.country}
        </h2>
        <p className="text-lg text-gray-600 capitalize">{data.description}</p>
      </div>

      {/* Temperature */}
      <div className="flex items-center justify-center gap-10 mb-8">
        <div className="text-center flex items-center gap-4">
          <div className="text-7xl font-bold text-gray-900">
            {Math.round(data.temperature)}°
          </div>

          {/* Ícono dinámico */}
          <div>{weatherIcons[data.description]}</div>
        </div>

        <div className="text-xl text-gray-600 mt-1">Celsius</div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Humidity */}
        <div className="bg-white/70 rounded-2xl p-4 shadow-md border border-white/60">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-medium text-gray-600">Humedad</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">
            {Math.round(data.humidity)}%
          </div>
        </div>

        {/* Wind */}
        <div className="bg-white/70 rounded-2xl p-4 shadow-md border border-white/60">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-gray-600">Viento</span>
          </div>
          <div className="text-xl font-bold text-gray-900">
            {Math.round(data.windSpeed)} m/s ({windDirection(data.windDeg)})
          </div>
        </div>

        {/* Main Condition */}
        <div className="bg-white/70 rounded-2xl p-4 shadow-md border border-white/60">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-6 h-6 text-orange-400" />
            <span className="text-sm font-medium text-gray-600">Condición</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 capitalize truncate">
            {data.weatherMain}
          </div>
        </div>

        {/* Feels Like */}
        <div className="bg-white/70 rounded-2xl p-4 shadow-md border border-white/60">
          <div className="flex items-center gap-2 mb-2">
            <ThermometerSun className="w-6 h-6 text-red-400" />
            <span className="text-sm font-medium text-gray-600">Sensación</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">
            {Math.round(data.feelsLike)}°
          </div>
        </div>

        {/* Min / Max */}
        <div className="bg-white/70 rounded-2xl p-4 shadow-md border border-white/60">
          <div className="flex items-center gap-2 mb-2">
            <ThermometerSun className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">Min / Max</span>
          </div>
          <div className="text-xl font-bold text-gray-900">
            {Math.round(data.tempMin)}° / {Math.round(data.tempMax)}°
          </div>
        </div>

        {/* Visibility */}
        <div className="bg-white/70 rounded-2xl p-4 shadow-md border border-white/60">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-6 h-6 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">
              Visibilidad
            </span>
          </div>
          <div className="text-xl font-bold text-gray-900">
            {(data.visibility / 1000).toFixed(1)} km
          </div>
        </div>

        {/* Sunrise */}
        <div className="bg-white/70 rounded-2xl p-4 shadow-md border border-white/60">
          <div className="flex items-center gap-2 mb-2">
            <Sunrise className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">Amanecer</span>
          </div>
          <div className="text-xl font-bold text-gray-900">
            {formatTime(data.sunrise)}
          </div>
        </div>

        {/* Sunset */}
        <div className="bg-white/70 rounded-2xl p-4 shadow-md border border-white/60">
          <div className="flex items-center gap-2 mb-2">
            <Sunset className="w-6 h-6 text-orange-500" />
            <span className="text-sm font-medium text-gray-600">Atardecer</span>
          </div>
          <div className="text-xl font-bold text-gray-900">
            {formatTime(data.sunset)}
          </div>
        </div>
      </div>
    </div>
  );
}
