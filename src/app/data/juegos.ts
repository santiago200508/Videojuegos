export interface Juego {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precioAntes?: number;
  categoria: string;
  plataformas: string[];
  imagen: string;
  descuento?: number;
  etiqueta?: string;
  rating: number;
  caracteristicas: string[];
  requisitos?: string[];
}

export const JUEGOS: Juego[] = [
  // PÁGINA 1
  {
    id: 1,
    nombre: "Elden Ring",
    descripcion: "Explora un vasto mundo lleno de peligros y misterios. El nuevo RPG de acción de FromSoftware.",
    precio: 249900,
    categoria: "RPG/Acción",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "eldenring.webp",
    etiqueta: "Popular",
    rating: 4.8,
    caracteristicas: [
      "Mundo abierto masivo",
      "Sistema de combate desafiante",
      "Multijugador cooperativo",
      "Historia épica"
    ],
    requisitos: [
      "Intel Core i7-8700K",
      "16 GB RAM",
      "NVIDIA GTX 1070",
      "60 GB espacio disponible"
    ]
  },
  {
    id: 2,
    nombre: "FIFA 24",
    descripcion: "La experiencia de fútbol más realista con HyperMotionV y tecnología de última generación.",
    precio: 299900,
    categoria: "Deportes",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "fifa24.jpg",
    etiqueta: "Nuevo",
    rating: 4.5,
    caracteristicas: [
      "Modo Carrera renovado",
      "Ultimate Team mejorado",
      "Gráficos fotorrealistas",
      "Multijugador en línea"
    ]
  },
  {
    id: 3,
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    descripcion: "Continúa la aventura de Link en Hyrule con nuevas mecánicas y un mundo expandido.",
    precio: 279900,
    categoria: "Aventura",
    plataformas: ["Nintendo Switch"],
    imagen: "zelda.webp",
    rating: 5.0,
    caracteristicas: [
      "Mundo abierto expansivo",
      "Nuevas habilidades",
      "Exploración aérea",
      "Historia envolvente"
    ]
  },
  {
    id: 4,
    nombre: "Call of Duty: Modern Warfare III",
    descripcion: "La franquicia de disparos más popular regresa con acción trepidante y multijugador competitivo.",
    precio: 319900,
    categoria: "Shooter",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "callofduty.webp",
    etiqueta: "Preventa",
    rating: 4.6,
    caracteristicas: [
      "Campaña cinematográfica",
      "Multijugador 6v6",
      "Modo Zombies",
      "Warzone integrado"
    ]
  },
  {
    id: 5,
    nombre: "Hogwarts Legacy",
    descripcion: "Vive tu propia aventura en el mundo mágico de Harry Potter en este RPG de acción.",
    precio: 259900,
    precioAntes: 299900,
    descuento: 13,
    categoria: "RPG/Aventura",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "hogwars.webp",
    etiqueta: "Oferta",
    rating: 4.7,
    caracteristicas: [
      "Explora Hogwarts",
      "Domina la magia",
      "Personalización profunda",
      "Criaturas fantásticas"
    ]
  },
  {
    id: 6,
    nombre: "Baldur's Gate 3",
    descripcion: "El RPG definitivo basado en Dungeons & Dragons con decisiones que importan.",
    precio: 229900,
    categoria: "RPG",
    plataformas: ["PS5", "PC"],
    imagen: "baldurs.webp",
    rating: 4.9,
    caracteristicas: [
      "Historia ramificada",
      "Combate por turnos",
      "Multijugador cooperativo",
      "Libertad absoluta"
    ]
  },

  // PÁGINA 2
  {
    id: 7,
    nombre: "Spider-Man 2",
    descripcion: "Balancea por Nueva York como Peter Parker y Miles Morales en esta secuela épica.",
    precio: 289900,
    categoria: "Acción/Aventura",
    plataformas: ["PS5"],
    imagen: "spiderman.webp",
    etiqueta: "Exclusivo PS5",
    rating: 4.9,
    caracteristicas: [
      "Dos Spider-Man jugables",
      "Nueva York de noche",
      "Villanos icónicos",
      "Combate fluido"
    ]
  },
  {
    id: 8,
    nombre: "Forza Horizon 5",
    descripcion: "Explora México en el mejor juego de carreras arcade con cientos de autos.",
    precio: 199900,
    precioAntes: 249900,
    descuento: 20,
    categoria: "Carreras",
    plataformas: ["Xbox Series X", "PC"],
    imagen: "forza horizon.webp",
    etiqueta: "Oferta",
    rating: 4.8,
    caracteristicas: [
      "México vibrante",
      "700+ vehículos",
      "Multijugador masivo",
      "Clima dinámico"
    ]
  },
  {
    id: 9,
    nombre: "Resident Evil 4 Remake",
    descripcion: "El clásico de survival horror reimaginado con gráficos de última generación.",
    precio: 269900,
    categoria: "Horror/Acción",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "resident.webp",
    rating: 4.8,
    caracteristicas: [
      "Gráficos RE Engine",
      "Combate renovado",
      "Terror psicológico",
      "Modo Mercenarios"
    ]
  },
  {
    id: 10,
    nombre: "Starfield",
    descripcion: "Explora el espacio en el nuevo RPG de Bethesda con libertad absoluta.",
    precio: 279900,
    categoria: "RPG/Ciencia Ficción",
    plataformas: ["Xbox Series X", "PC"],
    imagen: "starfield.webp",
    rating: 4.5,
    caracteristicas: [
      "1000+ planetas",
      "Personalización de naves",
      "Exploración espacial",
      "Misiones infinitas"
    ]
  },
  {
    id: 11,
    nombre: "Street Fighter 6",
    descripcion: "El rey de los juegos de pelea regresa con nuevos personajes y mecánicas.",
    precio: 249900,
    categoria: "Pelea",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "street.webp",
    rating: 4.7,
    caracteristicas: [
      "18 luchadores",
      "Modo World Tour",
      "Drive System nuevo",
      "Rollback netcode"
    ]
  },
  {
    id: 12,
    nombre: "Assassin's Creed Mirage",
    descripcion: "Regresa a las raíces de la saga en Bagdad con sigilo y parkour.",
    precio: 219900,
    precioAntes: 269900,
    descuento: 19,
    categoria: "Acción/Aventura",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "assassins.webp",
    etiqueta: "Oferta",
    rating: 4.4,
    caracteristicas: [
      "Bagdad histórica",
      "Sigilo renovado",
      "Sin RPG pesado",
      "Historia enfocada"
    ]
  },

  // PÁGINA 3
  {
    id: 13,
    nombre: "Cyberpunk 2077: Phantom Liberty",
    descripcion: "La expansión definitiva del RPG futurista de CD Projekt Red.",
    precio: 179900,
    categoria: "RPG/Acción",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "cyberpunk.jpg",
    rating: 4.6,
    caracteristicas: [
      "Nueva historia de espionaje",
      "Área Dogtown",
      "Nuevas habilidades",
      "Mejoras técnicas"
    ]
  },
  {
    id: 14,
    nombre: "Mortal Kombat 1",
    descripcion: "El reinicio definitivo con fatalities brutales y un nuevo universo.",
    precio: 289900,
    categoria: "Pelea",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "mortal.webp",
    etiqueta: "Nuevo",
    rating: 4.5,
    caracteristicas: [
      "Timeline reiniciada",
      "Kameo Fighters",
      "Invasiones PvE",
      "Fatalities mejoradas"
    ]
  },
  {
    id: 15,
    nombre: "Alan Wake 2",
    descripcion: "Horror psicológico de Remedy Entertainment con gráficos impresionantes.",
    precio: 269900,
    categoria: "Horror/Thriller",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "alan.webp",
    rating: 4.8,
    caracteristicas: [
      "Dos protagonistas",
      "Northlight Engine",
      "Terror atmosférico",
      "Historia compleja"
    ]
  },
  {
    id: 16,
    nombre: "Diablo IV",
    descripcion: "El hack and slash definitivo con mundo abierto y loot infinito.",
    precio: 299900,
    categoria: "RPG/Acción",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "diablo.webp",
    rating: 4.6,
    caracteristicas: [
      "Mundo abierto oscuro",
      "5 clases únicas",
      "Endgame masivo",
      "Temporadas continuas"
    ]
  },
  {
    id: 17,
    nombre: "The Last of Us Part II Remastered",
    descripcion: "La obra maestra de Naughty Dog remasterizada para PS5.",
    precio: 239900,
    precioAntes: 289900,
    descuento: 17,
    categoria: "Acción/Aventura",
    plataformas: ["PS5"],
    imagen: "thelast.webp",
    etiqueta: "Oferta",
    rating: 4.9,
    caracteristicas: [
      "60 FPS nativos",
      "Gráficos mejorados",
      "DualSense support",
      "Historia emocional"
    ]
  },
  {
    id: 18,
    nombre: "Tekken 8",
    descripcion: "La leyenda de los juegos de pelea regresa con Unreal Engine 5.",
    precio: 309900,
    categoria: "Pelea",
    plataformas: ["PS5", "Xbox Series X", "PC"],
    imagen: "takken.jpg",
    etiqueta: "Preventa",
    rating: 4.7,
    caracteristicas: [
      "32 personajes",
      "Heat System",
      "Arcade Quest",
      "Gráficos next-gen"
    ]
  }
];