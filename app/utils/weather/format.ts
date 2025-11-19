export function formatTime(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
