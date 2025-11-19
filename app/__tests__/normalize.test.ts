import { normalizeWeatherData } from "../../app/utils/weather/normalize";
import { getWeatherCategory } from "../../app/utils/weather/categories";

jest.mock("../../app/utils/weather/categories");

describe("normalizeWeatherData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockAPIData = {
    name: "Medellín",
    sys: {
      country: "CO",
      sunrise: 1111,
      sunset: 2222,
    },
    main: {
      temp: 24,
      feels_like: 23,
      temp_min: 20,
      temp_max: 27,
      humidity: 65,
      pressure: 1008,
    },
    visibility: 9000,
    clouds: { all: 75 },
    wind: { speed: 4.5, deg: 180 },
    weather: [
      { main: "Clouds", description: "nubes dispersas" }
    ],
  };

  it("normaliza correctamente los datos y retorna un WeatherData válido", () => {
    (getWeatherCategory as jest.Mock).mockReturnValue("Nublado");

    const result = normalizeWeatherData(mockAPIData);

    // Se asegura que llame correctamente a getWeatherCategory
    expect(getWeatherCategory).toHaveBeenCalledWith(
      "Clouds",
      "nubes dispersas"
    );

    expect(result).toEqual({
      city: "Medellín",
      country: "CO",
      temperature: 24,
      feelsLike: 23,
      tempMin: 20,
      tempMax: 27,
      humidity: 65,
      pressure: 1008,
      visibility: 9000,
      clouds: 75,
      windSpeed: 4.5,
      windDeg: 180,
      description: "Nublado",
      weatherMain: "nubes dispersas",
      sunrise: 1111,
      sunset: 2222,
    });
  });

  it("funciona aunque los datos tengan valores diferentes", () => {
    (getWeatherCategory as jest.Mock).mockReturnValue("Lluvioso");

    const modified = {
      ...mockAPIData,
      main: { ...mockAPIData.main, temp: 10, feels_like: 9 },
      weather: [{ main: "Rain", description: "lluvia ligera" }],
    };

    const result = normalizeWeatherData(modified);

    expect(getWeatherCategory).toHaveBeenCalledWith(
      "Rain",
      "lluvia ligera"
    );

    expect(result.temperature).toBe(10);
    expect(result.feelsLike).toBe(9);
    expect(result.description).toBe("Lluvioso");
  });
});
