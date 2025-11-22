"use client";

import { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WatherCard";
import { Cloud } from "lucide-react";
import { WeatherData } from "./types";
import { fetchWeather } from "./utils/weather/api";


const Index = () => {
 const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    setWeatherData(null);

    try {
      const result = await fetchWeather(city);
      setWeatherData(result);
    } catch (error: any) {
      setErrorMessage(error.message || "Error desconocido");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-400 relative overflow-hidden">

      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cloud
          className="absolute top-20 left-10 w-32 h-32 text-cloud opacity-30 animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        />
        <Cloud
          className="absolute top-40 right-20 w-24 h-24 text-cloud opacity-20 animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        />
        <Cloud
          className="absolute bottom-32 left-1/4 w-40 h-40 text-cloud opacity-25 animate-pulse"
          style={{ animationDelay: "4s", animationDuration: "12s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">

        {/* Header */}
        <header className="text-center mb-12 animate-in fade-in slide-in-from-top-5 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 drop-shadow-lg">
            Atmósfera Alejo
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Descubre el clima actual de cualquier ciudad del mundo
          </p>
        </header>

        {/* Buscador */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
          <WeatherSearch onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center animate-in fade-in duration-300">
            <div className="inline-block w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg text-foreground/80">
              Buscando información del clima...
            </p>
          </div>
        )}

        {/* Error */}
        {errorMessage && !isLoading && (
          <div className="text-center text-red-600 mt-4 animate-in fade-in duration-300">
            <p className="text-lg font-semibold">{errorMessage}</p>
          </div>
        )}

        {/* Resultado */}
        {weatherData && !isLoading && (
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <WeatherCard data={weatherData} />
          </div>
        )}

        {/* Mensaje inicial */}
        {!weatherData && !isLoading && !errorMessage && (
          <div className="text-center text-foreground/60 animate-in fade-in duration-700 delay-300">
            <Cloud className="w-24 h-24 mx-auto mb-4 opacity-30" />
            <p className="text-lg">Busca una ciudad para ver el clima</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-foreground/60 text-sm">
        <p>@Alejo</p>
      </footer>
    </div>
  );
};

export default Index;
