import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudFog 
} from "lucide-react";
import { JSX } from "react";

export const weatherIcons: Record<string, JSX.Element> = {
  soleado: <Sun className="w-14 h-14 text-yellow-500" />,
  nublado: <Cloud className="w-14 h-14 text-gray-500" />,
  lluvioso: <CloudRain className="w-14 h-14 text-blue-500" />,
  tormenta: <CloudLightning className="w-14 h-14 text-yellow-600" />,
  nevado: <CloudSnow className="w-14 h-14 text-blue-300" />,
  "clima severo": <CloudLightning className="w-14 h-14 text-red-600" />,
  desconocido: <Cloud className="w-14 h-14 text-gray-400" />
};
