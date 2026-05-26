export type Project = {
  slug: string;
  title: string;
  description: string;
  week?: string;
  stack: string[];
  features: string[];
  repo: string;
  demo?: string;
  highlight?: boolean;
  private?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'killa-crm',
    title: 'Killa CRM',
    description:
      'CRM empresarial con autenticación Supabase SSR, envío de emails Resend y gestión de contactos.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Tailwind v4', 'Resend'],
    features: [
      'Auth Supabase con middleware SSR',
      'Dashboard multipágina (app router)',
      'API routes con rate limiting',
      'Tema dinámico (next-themes)',
    ],
    repo: 'https://github.com/Sullit0/killa-crm',
    demo: 'https://killa-crm.vercel.app',
    highlight: true,
    private: true,
  },
  {
    slug: 'insfor-makichay',
    title: 'Makichay Bot — InsFor',
    description:
      'Bot WhatsApp con IA para textiles artesanales de alpaca. Atiende consultas con LLMs y escala a humano.',
    stack: ['React 18', 'TypeScript', 'Vite', 'InsForge SDK', 'Supabase', 'Groq', 'OpenRouter'],
    features: [
      'WhatsApp Cloud API + HMAC webhook',
      'LLM dual: Groq (router) + OpenRouter (fallback)',
      '12 migraciones Supabase con RLS y pgvector',
      'Scripts Python para ingesta de catálogo',
    ],
    repo: 'https://github.com/Sullu55/insfor-makichay-bot',
    demo: 'https://559nwjc2-6dt.insforge.site',
    highlight: true,
    private: true,
  },
  {
    slug: 'sismo-tracker',
    title: 'Sismo Tracker Perú',
    description:
      'SPA que monitorea sismos en Perú consumiendo la API de USGS en tiempo casi-real con React Hooks avanzados.',
    week: 'Semana 7',
    stack: ['React 19', 'Vite', 'JavaScript', 'API USGS'],
    features: [
      'Filtros servidor (días, magnitud) + cliente (profundidad, búsqueda)',
      'Custom hooks: useFetch, useDebounce, useTheme, useAuth',
      'useReducer + useMemo + useCallback (sin re-renders)',
      'Tema claro/oscuro persistente',
    ],
    repo: 'https://github.com/Sullu55/desarrollo-web-semana-7',
  },
  {
    slug: 'cinetracker',
    title: 'CineTracker',
    description:
      'Watchlist de películas y series con búsqueda en TVMaze, filtros y persistencia. Práctica grupal.',
    week: 'Semana 7',
    stack: ['React 19', 'TypeScript', 'Vite', 'TVMaze API'],
    features: [
      'Búsqueda con debounce 400ms + AbortController',
      'Rating 1–5 ★ y estadísticas en vivo',
      'Tema claro/oscuro en localStorage',
      'useReducer + useContext + useMemo + useCallback',
    ],
    repo: 'https://github.com/SwodLore/Semana7_PGrupal',
  },
  {
    slug: 'ruleta',
    title: 'Ruleta Interactiva',
    description:
      'Aula virtual con ruleta dinámica y sorteo de equipos hecha solo con HTML, CSS y JavaScript vanilla.',
    week: 'Semana 6',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas'],
    features: [
      'Ruleta animada con Canvas + colores configurables',
      'Sorteo automático en equipos (hasta 100 personas)',
      'Atajos: SPACE/S/E/R/F + modo pantalla completa',
      'Export a JPG, copiar al portapapeles',
    ],
    repo: 'https://github.com/Sullu55/desarrollo-web-semana-6',
  },
];
