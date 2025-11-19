export function getWeatherCategory(main: string, description: string) {
  
  const m = main.toLowerCase();
  const d = description.toLowerCase();
  

  if (m === "clear") return "soleado";
  if (m === "clouds") return "nublado";
  if (["rain", "drizzle"].includes(m)) return "lluvioso";
  if (m === "thunderstorm") return "tormenta";
  if (m === "snow") return "nevado";
  if (["fog", "mist", "haze", "smoke"].includes(m)) return "nublado";
  if (["dust", "sand", "ash"].includes(m)) return "nublado";
  if (["tornado", "squall"].includes(m)) return "clima severo";

  if (d.includes("bruma")) return "nublado";

  return "desconocido";
}
