import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Index from "../../app/page";
import { fetchWeather } from "../utils/weather/api";
import { Mock } from "jest-mock";

jest.mock("../../app/utils/weather/api");

const mockedFetchWeather = fetchWeather as jest.MockedFunction<
  typeof fetchWeather
>;

describe("Clima App - Búsqueda exitosa", () => {
  it("muestra los datos del clima después de una búsqueda exitosa", async () => {
    mockedFetchWeather.mockResolvedValue({
      city: "Medellín",
      country: "CO",
      temperature: 25,
      feelsLike: 26,
      tempMin: 21,
      tempMax: 28,
      humidity: 70,
      pressure: 1000,
      visibility: 10000,
      clouds: 40,
      windSpeed: 2,
      windDeg: 200,
      description: "Cielo claro",
      weatherMain: "clear sky",
      sunrise: 123,
      sunset: 456,
    });

    render(<Index />);

    const input = screen.getByPlaceholderText("Buscar ciudad...");
    const button = screen.getByRole("button", { name: "Buscar" });

    fireEvent.change(input, { target: { value: "Medellín" } });
    fireEvent.click(button);

    expect(fetchWeather).toHaveBeenCalledWith("Medellín");

    await waitFor(() => {
      expect(screen.getByText(/Medellín/i)).toBeInTheDocument();
    });
  });
});
