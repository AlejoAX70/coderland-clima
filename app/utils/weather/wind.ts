export function windDirection(deg: number) {
  if (deg >= 337 || deg < 23) return "N";
  if (deg >= 23 && deg < 68) return "NE";
  if (deg >= 68 && deg < 113) return "E";
  if (deg >= 113 && deg < 158) return "SE";
  if (deg >= 158 && deg < 203) return "S";
  if (deg >= 203 && deg < 248) return "SO";
  if (deg >= 248 && deg < 293) return "O";
  if (deg >= 293 && deg < 337) return "NO";
  return "?";
}
