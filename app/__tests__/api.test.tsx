import { fetchWeather } from "../../app/utils/weather/api";
import { getWeatherCategory } from "../../app/utils/weather/categories";

global.fetch = jest.fn();
jest.mock("../../app/utils/weather/categories");

describe("fetchWeather", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockResponse = {
    name: "Medellín",
    sys: { country: "CO", sunrise: 1234, sunset: 5678 },
    main: {
      temp: 22,
      feels_like: 21,
      temp_min: 18,
      temp_max: 25,
      humidity: 60,
      pressure: 1010,
    },
    visibility: 8000,
    clouds: { all: 40 },
    wind: { speed: 3.2, deg: 220 },
    weather: [{ main: "Clouds", description: "nubes dispersas" }],
  };

  it("devuelve datos normalizados cuando la respuesta es exitosa", async () => {
    (getWeatherCategory as jest.Mock).mockReturnValue("Nublado");

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await fetchWeather("Medellín");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(getWeatherCategory).toHaveBeenCalledWith(
      "Clouds",
      "nubes dispersas"
    );

    expect(data).toEqual({
      city: "Medellín",
      country: "CO",
      temperature: 22,
      feelsLike: 21,
      tempMin: 18,
      tempMax: 25,
      humidity: 60,
      pressure: 1010,
      visibility: 8000,
      clouds: 40,
      windSpeed: 3.2,
      windDeg: 220,
      description: "Nublado",
      weatherMain: "nubes dispersas",
      sunrise: 1234,
      sunset: 5678,
    });
  });

  it("lanza error 'Ciudad no encontrada' cuando status = 404", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ message: "Ciudad no encontrada" }),
    });

    await expect(fetchWeather("xxxxx")).rejects.toThrow("Ciudad no encontrada");
  });

  it("lanza error genérico cuando response no es ok", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({ message: "Error interno" }),
    });

    await expect(fetchWeather("test")).rejects.toThrow("Error interno");
  });

  it("maneja error sin JSON retornado por la API", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => {
        throw new Error("JSON inválido");
      },
    });

    await expect(fetchWeather("test")).rejects.toThrow(
      "Error al obtener la información del clima"
    );
  });
});
