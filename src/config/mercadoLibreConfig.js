// src/config/mercadoLibreConfig.js
export const mercadoLibreConfig = {
  ultimaActualizacion: "Enero 2026",
  // Tabla de comisiones Argentina - datos oficiales publicados por MercadoLibre
  // Fuente oficial: https://www.mercadolibre.com.ar/ayuda/Costos-de-vender-un-producto_1148

  categorias: {
    "Accesorios para Vehículos": {
      clasica: 0.13,
      premium: 0.28
    },
    "Alimentos y Bebidas": {
      clasica: 0.13,
      premium: 0.28
    },
    "Arte, Librería y Mercería": {
      clasica: 0.13,
      premium: 0.28
    },
    "Bebés": {
      clasica: 0.13,
      premium: 0.28
    },
    "Belleza y Cuidado Personal": {
      clasica: 0.13,
      premium: 0.28
    },
    "Cámaras y Accesorios": {
      clasica: 0.13,
      premium: 0.28
    },
    "Celulares y Teléfonos": {
      clasica: 0.13,
      premium: 0.28
    },
    "Computación": {
      clasica: 0.13,
      premium: 0.28
    },
    "Consolas y Videojuegos": {
      clasica: 0.13,
      premium: 0.28
    },
    "Deportes y Fitness": {
      clasica: 0.13,
      premium: 0.28
    },
    "Hogar y Muebles": {
      clasica: 0.13,
      premium: 0.28
    },
    "Indumentaria y Calzados": {
      clasica: 0.13,
      premium: 0.28
    },
    "Instrumentos Musicales": {
      clasica: 0.13,
      premium: 0.28
    },
    "Juguetes y Juegos": {
      clasica: 0.13,
      premium: 0.28
    },
    "Motores y Repuestos": {
      clasica: 0.13,
      premium: 0.28
    },
    "Relojes y Accesorios": {
      clasica: 0.13,
      premium: 0.28
    },
    "Salud": {
      clasica: 0.13,
      premium: 0.28
    },
    "TV, Audio y Video": {
      clasica: 0.13,
      premium: 0.28
    }
  },

  // Cargos adicionales por rangos de precio (oficial)
  cargosFijos: [
    { hasta: 15000, cargo: 1115 },
    { hasta: 25000, cargo: 2300 },
    { hasta: 33000, cargo: 2810 }
  ]
};