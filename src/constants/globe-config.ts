import { COBEOptions } from "cobe";

export const globeConfig: Omit<COBEOptions, "onRender"> = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [250 / 255, 253 / 255, 244 / 255], // brand-50 (#f0fdf4)
  markerColor: [34 / 255, 197 / 255, 94 / 255], // brand-500 (#22c55e)
  glowColor: [20 / 255, 184 / 255, 166 / 255 / 5], // accent-500 (#14b8a6)
  markers: [
    // Mexico Locations
    { location: [19.4326, -99.1332], size: 0.13 }, // Mexico City
    { location: [20.6597, -103.3496], size: 0.07 }, // Guadalajara
    { location: [25.6866, -100.3161], size: 0.06 }, // Monterrey
    { location: [16.7531, -93.1156], size: 0.045 }, // Tuxtla Gtz, Chiapas
    { location: [21.1619, -86.8515], size: 0.045 }, // Cancun
    { location: [19.7008, -101.1844], size: 0.04 }, // Morelia
    { location: [19.4326, -99.1332], size: 0.045 }, // Puebla

    // Latin America
    { location: [4.711, -74.0721], size: 0.045 }, // Bogotá
    { location: [-12.0464, -77.0428], size: 0.04 }, // Lima
    { location: [-34.6037, -58.3816], size: 0.045 }, // Buenos Aires
    { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo

    // Some international locations for diversity
    { location: [40.7128, -74.006], size: 0.06 }, // New York
    { location: [48.8566, 2.3522], size: 0.045 }, // Paris
    { location: [35.6895, 139.6917], size: 0.045 }, // Tokio
    { location: [51.5074, -0.1278], size: 0.04 }, // London
  ],
};
