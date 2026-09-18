export type Lang = "es" | "en";

export const copy = {
  es: {
    nav: {
      how: "Cómo",
      app: "La app",
      eat: "Hoy",
      list: "Lista",
      cta: "Avísame",
    },
    hero: {
      kicker: "Cali · Colombia",
      title: "¿Qué comemos hoy.",
      lede: "Restaurantes en Cali, contados por la gente que come ahí. Ningún sitio paga por aparecer primero.",
      cta: "Avísame cuando esté lista",
      secondary: "Cómo decide Mira Ve",
      chips: ["Abierto ahora", "En tendencia", "Cerca de ti"],
      floatLocal: "Local ×2",
      floatFair: "Sin anuncios",
      reviewBadge: "Local",
    },
    strip: {
      items: [
        {
          title: "Las reseñas locales pesan el doble",
          body: "Una reseña de alguien que vive en Cali cuenta el doble que la de un visitante. Vivir aquí es la credencial.",
        },
        {
          title: "El orden cambia cada día",
          body: "El feed se reordena para ti cada mañana, con una semilla distinta. Nadie se queda dueño de la primera fila.",
        },
        {
          title: "Nadie compra un puesto",
          body: "No existe destacado, patrocinado ni puesto a la venta. El orden no se paga.",
        },
      ],
    },
    principles: {
      index: "02",
      eyebrow: "Sin puestos a la venta",
      title: "Cómo funciona.",
      lede: "Ningún sitio paga por aparecer arriba. Así es como Mira Ve decide qué te muestra.",
      items: [
        {
          title: "Las reseñas de locales pesan el doble",
          body: "Una reseña de alguien que vive en Cali cuenta el doble que la de un visitante. Vivir aquí es la credencial.",
        },
        {
          title: "El orden cambia cada día",
          body: "El feed se reordena para ti cada día, con una semilla distinta. Los mismos diez sitios no se quedan pegados arriba para siempre.",
        },
        {
          title: "Los sitios poco vistos tienen un cupo reservado",
          body: "Una parte del feed está reservada para lugares que casi nadie ha visto todavía. Marcados como “Poco visto este mes”.",
        },
        {
          title: "Nadie compra un mejor puesto",
          body: "No existe una opción para pagar por aparecer primero, destacado o patrocinado. El orden no está a la venta.",
        },
      ],
    },
    showcase: {
      index: "03",
      eyebrow: "La app",
      title: "Descubre, guarda, camina.",
      lede: "Un mapa de Cali, una rotación diaria y una lista para después — sin el ruido de las plataformas que venden el feed.",
      tabs: [
        {
          id: "discover",
          label: "Descubre",
          caption: "Qué comemos hoy, según quien vive aquí.",
        },
        {
          id: "map",
          label: "Mapa",
          caption: "Cali entero, con lo que está abierto cerca.",
        },
        {
          id: "saved",
          label: "Guardados",
          caption: "Los sitios para después, en un solo lugar.",
        },
        {
          id: "how",
          label: "Reglas",
          caption: "Las reglas están a la vista. Siempre.",
        },
      ],
    },
    rotation: {
      index: "01",
      eyebrow: "Rotación de hoy",
      title: "No es el mismo ranking de siempre.",
      lede: "Cuatro sitios de Cali. Mañana el orden cambia. Así nadie se queda dueño de la primera fila.",
      known: "Lo que aquí se pide",
      noReviews: "Sin reseñas todavía",
      rare: "Poco visto este mes",
      cash: "Solo efectivo",
      closed: "Cerrado hoy",
    },
    badges: {
      index: "04",
      eyebrow: "Quién reseña",
      title: "No todas las voces pesan igual.",
      lede: "Mira Ve distingue a quien vive en Cali de quien está de paso.",
      items: [
        {
          name: "Local",
          body: "Vive en Cali: eligió su barrio y tiene 3 reseñas buenas. Su calificación cuenta doble.",
        },
        {
          name: "Buen Diente",
          body: "Come de verdad: reseñas constantes, platos concretos, sin relleno. Una voz que la ciudad ya reconoce.",
        },
      ],
    },
    city: {
      kicker: "Valle del Cauca",
      title: "Hecha en Cali. Para Cali.",
      lede: "San Antonio, Granada, La Flora, Centro, El Peñón. Mira Ve no es una guía mundial con Cali como filtro. Es Cali.",
    },
    waitlist: {
      eyebrow: "Próximamente en iPhone",
      title: "Entra a la lista.",
      lede: "Te escribimos cuando Mira Ve esté lista para instalar. Sin spam, sin newsletter semanal.",
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Correo",
      emailPh: "tu@correo.com",
      barrio: "Barrio",
      barrioPh: "Tu barrio en Cali",
      submit: "Quiero un lugar",
      sending: "Guardando…",
      successTitle: "Ya estás en la lista.",
      successBody:
        "Te escribimos cuando Mira Ve salga en iPhone. Gracias por esperar con nosotros.",
      error: "Revisa el correo e inténtalo de nuevo.",
      another: "Añadir otro correo",
    },
    footer: {
      mark: "Mira Ve",
      line: "Restaurantes en Cali, contados por quienes comen ahí.",
      rights: "Cali, Colombia",
    },
    lang: { es: "ES", en: "EN" },
  },
  en: {
    nav: {
      how: "How",
      app: "The app",
      eat: "Today",
      list: "List",
      cta: "Notify me",
    },
    hero: {
      kicker: "Cali · Colombia",
      title: "What are we eating today.",
      lede: "Restaurants in Cali, told by the people who eat there. Nobody pays to show up first.",
      cta: "Notify me when it’s ready",
      secondary: "How Mira Ve decides",
      chips: ["Open now", "Trending this week", "Near you"],
      floatLocal: "Local ×2",
      floatFair: "No ads",
      reviewBadge: "Local",
    },
    strip: {
      items: [
        {
          title: "Local reviews count double",
          body: "A review from someone who lives in Cali counts twice as much as one from a visitor. Living here is the credential.",
        },
        {
          title: "The order changes every day",
          body: "The feed is reshuffled for you each morning with a new seed. Nobody owns the front row.",
        },
        {
          title: "Nobody buys a seat",
          body: "No featured, no sponsored, no placement for sale. Rank is not for sale.",
        },
      ],
    },
    principles: {
      index: "02",
      eyebrow: "Placement is not for sale",
      title: "How it works.",
      lede: "No venue pays to appear on top. This is how Mira Ve decides what you see.",
      items: [
        {
          title: "Local reviews count double",
          body: "A review from someone who lives in Cali counts twice as much as one from a visitor. Living here is the credential.",
        },
        {
          title: "The order changes every day",
          body: "The feed is reshuffled for you each day with a new seed. The same ten places don’t stay glued to the top forever.",
        },
        {
          title: "Overlooked spots get a reserved slot",
          body: "Part of the feed is held for places almost nobody has seen yet — marked “Rarely seen this month.”",
        },
        {
          title: "Nobody buys a better seat",
          body: "There is no way to pay for first, featured, or sponsored. Rank is not for sale.",
        },
      ],
    },
    showcase: {
      index: "03",
      eyebrow: "The app",
      title: "Discover, save, walk.",
      lede: "A map of Cali, a daily rotation, and a list for later — without the noise of platforms that sell the feed.",
      tabs: [
        {
          id: "discover",
          label: "Discover",
          caption: "What we’re eating today, according to people who live here.",
        },
        {
          id: "map",
          label: "Map",
          caption: "All of Cali, with what’s open nearby.",
        },
        {
          id: "saved",
          label: "Saved",
          caption: "The places for later, in one list.",
        },
        {
          id: "how",
          label: "Rules",
          caption: "The rules are in the open. Always.",
        },
      ],
    },
    rotation: {
      index: "01",
      eyebrow: "Today’s rotation",
      title: "Not the same ranking as yesterday.",
      lede: "Four places in Cali. Tomorrow the order changes. Nobody owns the front row.",
      known: "What people order here",
      noReviews: "No reviews yet",
      rare: "Rarely seen this month",
      cash: "Cash only",
      closed: "Closed today",
    },
    badges: {
      index: "04",
      eyebrow: "Who’s reviewing",
      title: "Not every voice weighs the same.",
      lede: "Mira Ve tells apart someone who lives in Cali from someone just passing through.",
      items: [
        {
          name: "Local",
          body: "Lives in Cali: chose a neighborhood and has 3 solid reviews. Their rating counts double.",
        },
        {
          name: "Buen Diente",
          body: "Eats for real: steady reviews, specific dishes, no filler. A voice the city already knows.",
        },
      ],
    },
    city: {
      kicker: "Valle del Cauca",
      title: "Made in Cali. For Cali.",
      lede: "San Antonio, Granada, La Flora, Centro, El Peñón. Mira Ve is not a worldwide guide with Cali as a filter. It is Cali.",
    },
    waitlist: {
      eyebrow: "Coming soon on iPhone",
      title: "Get on the list.",
      lede: "We’ll write you when Mira Ve is ready to install. No spam, no weekly newsletter.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      barrio: "Neighborhood",
      barrioPh: "Your neighborhood in Cali",
      submit: "Save my spot",
      sending: "Saving…",
      successTitle: "You’re on the list.",
      successBody:
        "We’ll write you when Mira Ve ships on iPhone. Thanks for waiting with us.",
      error: "Check the email and try again.",
      another: "Add another email",
    },
    footer: {
      mark: "Mira Ve",
      line: "Restaurants in Cali, told by the people who eat there.",
      rights: "Cali, Colombia",
    },
    lang: { es: "ES", en: "EN" },
  },
} as const;

export const neighborhoods = [
  "San Antonio",
  "Granada",
  "El Peñón",
  "Centro",
  "La Flora",
  "Ciudad Jardín",
  "Chipichape",
  "San Fernando",
  "El Ingenio",
  "Pance",
  "Menga",
  "La Hacienda",
] as const;

export type Place = {
  name: string;
  cuisineEs: string;
  cuisineEn: string;
  barrio: string;
  price: string;
  dishEs: string;
  dishEn: string;
  rare?: boolean;
  cash?: boolean;
  closed?: boolean;
};

export const places: Place[] = [
  {
    name: "El Deleite del Mar.",
    cuisineEs: "Mariscos",
    cuisineEn: "Seafood",
    barrio: "Centro",
    price: "$",
    dishEs: "Sancocho de pescado",
    dishEn: "Fish sancocho",
    rare: true,
    cash: true,
    closed: true,
  },
  {
    name: "Platillos Voladores.",
    cuisineEs: "Pacífico",
    cuisineEn: "Pacific",
    barrio: "Granada",
    price: "$$$$",
    dishEs: "Encocado de pescado",
    dishEn: "Coconut fish stew",
    rare: true,
    closed: true,
  },
  {
    name: "Ioenta.",
    cuisineEs: "Siria",
    cuisineEn: "Syrian",
    barrio: "San Antonio",
    price: "$$",
    dishEs: "Pizza margarita",
    dishEn: "Margherita pizza",
  },
  {
    name: "Palomulata Parrilla Boutique.",
    cuisineEs: "Asadero",
    cuisineEn: "Grill",
    barrio: "La Flora",
    price: "$$$$",
    dishEs: "Entraña",
    dishEn: "Skirt steak",
  },
];

export function rotatePlaces(list: Place[], date = new Date()): Place[] {
  const seed =
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const copyList = [...list];
  let s = seed || 1;
  for (let i = copyList.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    const a = copyList[i]!;
    const b = copyList[j]!;
    copyList[i] = b;
    copyList[j] = a;
  }
  return copyList;
}
