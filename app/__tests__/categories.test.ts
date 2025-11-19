import { getWeatherCategory } from "../../app/utils/weather/categories";

describe("getWeatherCategory", () => {
  it("retorna 'soleado' cuando main = clear", () => {
    expect(getWeatherCategory("Clear", "cielo despejado")).toBe("soleado");
  });

  it("retorna 'nublado' cuando main = clouds", () => {
    expect(getWeatherCategory("Clouds", "nubes dispersas")).toBe("nublado");
  });

  it("retorna 'lluvioso' cuando main es rain o drizzle", () => {
    expect(getWeatherCategory("Rain", "lluvia fuerte")).toBe("lluvioso");
    expect(getWeatherCategory("Drizzle", "llovizna")).toBe("lluvioso");
  });

  it("retorna 'tormenta' cuando main = thunderstorm", () => {
    expect(getWeatherCategory("Thunderstorm", "tormenta eléctrica")).toBe("tormenta");
  });

  it("retorna 'nevado' cuando main = snow", () => {
    expect(getWeatherCategory("Snow", "nieve ligera")).toBe("nevado");
  });

  it("retorna 'nublado' con niebla/mist/haze/smoke", () => {
    expect(getWeatherCategory("Fog", "niebla densa")).toBe("nublado");
    expect(getWeatherCategory("Mist", "neblina")).toBe("nublado");
    expect(getWeatherCategory("Haze", "neblina")).toBe("nublado");
    expect(getWeatherCategory("Smoke", "humo")).toBe("nublado");
  });

  it("retorna 'nublado' con polvo/arena/ceniza", () => {
    expect(getWeatherCategory("Dust", "polvo")).toBe("nublado");
    expect(getWeatherCategory("Sand", "arena")).toBe("nublado");
    expect(getWeatherCategory("Ash", "ceniza volcánica")).toBe("nublado");
  });

  it("retorna 'clima severo' con tornado/squall", () => {
    expect(getWeatherCategory("Tornado", "tornado")).toBe("clima severo");
    expect(getWeatherCategory("Squall", "ráfagas fuertes")).toBe("clima severo");
  });

  it("retorna 'nublado' cuando la descripción contiene 'bruma'", () => {
    expect(getWeatherCategory("Other", "bruma ligera")).toBe("nublado");
  });

  it("retorna 'desconocido' para valores no contemplados", () => {
    expect(getWeatherCategory("AlienWeather", "condición rara")).toBe("desconocido");
  });
});
