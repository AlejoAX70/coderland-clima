import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Index from "../../app/page";
import { fetchWeather } from "../utils/weather/api";


jest.mock("../../app/utils/weather/api");

describe("Clima App - Manejo de Error", () => {
  it("muestra un mensaje cuando la ciudad es inválida", async () => {
    (fetchWeather as jest.Mock).mockRejectedValue(
      new Error("Ciudad no encontrada")
    );

    render(<Index />);

    const input = screen.getByPlaceholderText("Buscar ciudad...");
    const button = screen.getByRole("button", { name: "Buscar" });

    fireEvent.change(input, { target: { value: "Xyz123" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("Ciudad no encontrada")
      ).toBeInTheDocument();
    });
  });
});
