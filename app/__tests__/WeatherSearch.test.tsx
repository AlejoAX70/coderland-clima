import { render, screen, fireEvent } from "@testing-library/react";
import WeatherSearch from "../components/WeatherSearch";

describe("Componente WeatherSearch", () => {
  it("permite escribir y ejecutar búsqueda", () => {
    const mockOnSearch = jest.fn();

    render(<WeatherSearch onSearch={mockOnSearch} isLoading={false} />);

    const input = screen.getByPlaceholderText("Buscar ciudad...");
    const button = screen.getByRole("button", { name: "Buscar" });

    fireEvent.change(input, { target: { value: "Bogotá" } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("Bogotá");
  });
});
