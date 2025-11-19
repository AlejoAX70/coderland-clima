# AtmósferaAlejo — Aplicación del Clima con Next.js + TypeScript + Jest

Esta es una aplicación que permite consultar el clima actual de cualquier ciudad del mundo utilizando la API de OpenWeatherMap.
Incluye pruebas unitarias completas con Jest y React Testing Library con un coverage superior al 80%.

## Tecnologías Utilizadas

Next.js 14

React 18

TypeScript

TailwindCSS

Jest

React Testing Library

OpenWeather API


## Instalación del Proyecto

#### 1. Clona este repositorio:

git clone https://github.com/AlejoAX70/coderland-clima.git

#### 2. Entra al proyecto:
````
cd atmosfera-alejo
````
#### 3. Instala dependencias:
````
npm install
````

## Ejecutar la Aplicación

#### Inicia el servidor de desarrollo

````
npm run dev
````

#### La aplicación estará disponible en:
````
http://localhost:3000
````
## Ejecutar Pruebas Unitarias

#### Para correr las pruebas:
````
npm test
````
#### Para generar reporte de cobertura:
````
npm run test:coverage
````
#### Tu resultado debe mostrar algo similar a:
````
All files | 93% statements | 94% branches | 92% functions | 93% lines
````

(El proyecto ya cumple el requisito de +80% coverage.)

## Pruebas Incluidas

Las pruebas unitarias cubren:

✔️ 1. Búsqueda exitosa

Verifica que la aplicación muestra los datos del clima cuando la API responde correctamente.

✔️ 2. Manejo de error

Valida que el usuario vea un mensaje cuando ingresa una ciudad inválida.

✔️ 3. Funcionalidad del input y botón

Confirma que:

el usuario puede escribir una ciudad,

el botón ejecuta la búsqueda,

se llama a la API con el valor ingresado.

✔️ Utilidades

Se testean funciones como:

#### normalizeWeatherData

#### getWeatherCategory

#### windDirection

#### manejo de fetch simulado
```
📁 Estructura del Proyecto
app/
  ├── components/
  │     ├── WeatherCard.tsx
  │     └── WeatherSearch.tsx
  ├── utils/
  │     ├── normalize.ts
  │     ├── categories.ts
  │     ├── wind.ts
  │     ├── format.ts
  │     ├── weatherIcons.tsx
  │     └── api.ts
  ├── page.tsx
  └── layout.tsx
__tests__/
coverage/
public/
.env
jest.config.js
jest.setup.ts
tsconfig.json
next.config.js
package.json
README.md
```

🧩 Funcionalidades Principales

Buscar clima por ciudad

Mostrar:

temperatura

sensación térmica

humedad

presión

velocidad y dirección del viento

nubosidad

hora de amanecer y atardecer

Mostrar iconos dinámicos según el clima

Normalización y categorización de datos

UX limpia y responsiva (Tailwind)
```
Scripts Disponibles
npm run dev         # Ejecuta el proyecto en desarrollo
npm run build       # Construye el proyecto para producción
npm test            # Ejecuta pruebas unitarias
npm run test:watch  # Ejecuta pruebas en modo observador
npm run test:coverage # Muestra reporte de cobertura
```
API Utilizada

OpenWeatherMap — https://openweathermap.org/api



