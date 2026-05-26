export type Week = {
  n: number;
  title: string;
  topics: string[];
  summary: string;
  codeLang: string;
  codeTitle: string;
  code: string;
  myProject?: { name: string; href: string };
};

export const weeks: Week[] = [
  {
    n: 1,
    title: 'Fundamentos de las tecnologías web',
    topics: [
      'Soluciones web: sistema, aplicación, sitio y página web',
      'Funcionamiento de la Web: DNS, TCP/IP y protocolo HTTP',
      'Roles: frontend, backend, fullstack',
      'Visual Studio Code (atajos, extensiones)',
    ],
    summary:
      'Bases conceptuales de la Web: cómo viaja un request desde el navegador (DNS → TCP/IP → HTTP) hasta un servidor y vuelve. Distinción entre los roles del desarrollador y configuración del entorno de trabajo con VS Code.',
    codeLang: 'http',
    codeTitle: 'Anatomía de una petición HTTP',
    code: `GET /api/sismos?days=7 HTTP/1.1
Host: earthquake.usgs.gov
Accept: application/json
User-Agent: Mozilla/5.0

HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=60

{ "type": "FeatureCollection", "features": [ ... ] }`,
  },
  {
    n: 2,
    title: 'HTML, XML y CSS3',
    topics: [
      'Open Web Platform, HTML5 semántico, XML',
      'Árbol DOM y ciclo de vida de la página',
      'CSS3: flexbox, grid, position',
      'Diseño fluido y responsivo (SEO básico)',
    ],
    summary:
      'Estructura semántica con HTML5 y diseño con CSS3 moderno. El navegador construye el árbol DOM y aplica el árbol CSSOM para componer el render tree. Flexbox para componentes y Grid para layouts globales.',
    codeLang: 'html',
    codeTitle: 'Layout responsivo con Grid + Flexbox',
    code: `<main class="layout">
  <header>Sismos Perú</header>
  <aside>Filtros</aside>
  <section class="cards">
    <article>5.2 — Lima</article>
    <article>4.8 — Cusco</article>
  </section>
</main>

<style>
  .layout {
    display: grid;
    grid-template:
      "h h" auto
      "a m" 1fr / 220px 1fr;
    min-height: 100vh;
  }
  .cards {
    grid-area: m;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>`,
  },
  {
    n: 3,
    title: 'Bootstrap y Tailwind CSS',
    topics: [
      'Bootstrap: layout, components, Grid system',
      'Tailwind: utility-first, dark mode, responsive',
      'Tipografía, espaciado, tablas, navegación',
      'Sistema de diseño basado en tokens',
    ],
    summary:
      'Frameworks CSS que aceleran el desarrollo. Bootstrap entrega componentes prediseñados (clases semánticas). Tailwind aplica utilidades atómicas que componen el estilo directamente en el markup, sin salir del HTML.',
    codeLang: 'html',
    codeTitle: 'Card con Tailwind (utility-first)',
    code: `<article class="rounded-xl bg-white p-6 shadow-md
                ring-1 ring-slate-200 hover:shadow-lg
                dark:bg-slate-800 dark:ring-slate-700
                transition">
  <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
    Sismo Tracker Perú
  </h3>
  <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
    SPA con React Hooks y API USGS.
  </p>
  <a href="#" class="mt-4 inline-flex items-center gap-2
                     text-sm font-medium text-indigo-600
                     hover:text-indigo-500">
    Ver proyecto →
  </a>
</article>`,
  },
  {
    n: 4,
    title: 'JavaScript / TypeScript y DOM',
    topics: [
      'Tipos, operadores, estructuras de control',
      'Funciones: anónimas, flecha, closures, IIFE',
      'DOM API: selección, eventos, manipulación',
      'Canvas: animaciones y gráficos',
    ],
    summary:
      'JavaScript como motor del frontend dinámico. Manipulación del DOM, closures para encapsular estado privado, y dibujo programático sobre Canvas usando un loop de animación con requestAnimationFrame.',
    codeLang: 'javascript',
    codeTitle: 'Animación con Canvas + requestAnimationFrame',
    code: `const canvas = document.querySelector('#ruleta');
const ctx = canvas.getContext('2d');
let angle = 0;

function drawSlice(color, start, end) {
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.arc(150, 150, 140, start, end);
  ctx.fillStyle = color;
  ctx.fill();
}

function tick() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.save();
  ctx.translate(150, 150);
  ctx.rotate(angle);
  ctx.translate(-150, -150);
  ['#ef4444', '#22c55e', '#3b82f6', '#eab308']
    .forEach((c, i) => drawSlice(c, i * Math.PI/2, (i+1) * Math.PI/2));
  ctx.restore();
  angle += 0.02;
  requestAnimationFrame(tick);
}
tick();`,
    myProject: { name: 'Ruleta Interactiva', href: 'https://github.com/Sullu55/desarrollo-web-semana-6' },
  },
  {
    n: 5,
    title: 'Framework JS — React (CSR)',
    topics: [
      'Client Side Rendering y Virtual DOM',
      'Componentes funcionales y JSX',
      'Props, Children, composición',
      'Estilos: inline, modules, CSS frameworks',
    ],
    summary:
      'React introduce el modelo declarativo basado en componentes. Cada componente recibe props (entrada) y children (composición) para construir árboles reutilizables. JSX transpila a llamadas React.createElement.',
    codeLang: 'jsx',
    codeTitle: 'Componente con props y children',
    code: `function Card({ title, badge, children }) {
  return (
    <article className="card">
      <header className="card-head">
        <h3>{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </header>
      <div className="card-body">{children}</div>
    </article>
  );
}

export default function App() {
  return (
    <Card title="Sismo Tracker" badge="React">
      <p>Monitoreo en tiempo real con API USGS.</p>
      <a href="/proyectos">Ver más →</a>
    </Card>
  );
}`,
  },
  {
    n: 6,
    title: 'Eventos, condicionales, formularios, routing y APIs',
    topics: [
      'Manejo de eventos (onClick, onChange, onSubmit)',
      'Renderizado condicional e iterativo (.map)',
      'Formularios controlados y validación',
      'Routing (React Router) y consumo de APIs (fetch / axios)',
    ],
    summary:
      'Interactividad completa: formularios controlados con estado React, listas renderizadas con .map, rutas declarativas y consumo asíncrono de APIs externas con async/await.',
    codeLang: 'jsx',
    codeTitle: 'Formulario controlado + consumo de API',
    code: `function Buscador() {
  const [q, setQ] = useState('');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(\`/api/search?q=\${q}\`);
    const data = await res.json();
    setResultados(data.items);
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={q} onChange={(e) => setQ(e.target.value)} />
      <button disabled={loading}>
        {loading ? 'Buscando…' : 'Buscar'}
      </button>
      <ul>
        {resultados.map((r) => <li key={r.id}>{r.title}</li>)}
      </ul>
    </form>
  );
}`,
    myProject: { name: 'Ruleta + Sorteo (S6)', href: 'https://github.com/Sullu55/desarrollo-web-semana-6' },
  },
  {
    n: 7,
    title: 'Hooks de React',
    topics: [
      'useState, useEffect',
      'useContext, useRef',
      'useReducer, useCallback, useMemo',
      'Custom Hooks (useFetch, useDebounce, useLocalStorage)',
    ],
    summary:
      'Los hooks dan estado y efectos a los componentes funcionales. useReducer centraliza lógica compleja, useMemo/useCallback evitan re-renders y los custom hooks encapsulan comportamiento reutilizable como el fetching con cancelación.',
    codeLang: 'jsx',
    codeTitle: 'Custom hook con AbortController',
    code: `function useFetch(url, { transform } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    fetch(url, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((j) => setData(transform ? transform(j) : j))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err);
      })
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [url, transform]);

  return { data, loading, error };
}

// Uso:
const { data: sismos, loading } = useFetch(
  buildUsgsUrl({ days: 7, minMag: 4 }),
  { transform: transformUsgs }
);`,
    myProject: { name: 'Sismo Tracker Perú', href: 'https://github.com/Sullu55/desarrollo-web-semana-7' },
  },
  {
    n: 8,
    title: 'Revisión y primer consolidado',
    topics: [
      'Revisión de evaluación de logro 1',
      'Retroalimentación y reforzamiento',
      'Primer consolidado de notas (25–29 mayo 2026)',
      'Cierre Unidad I: Frontend SPA',
    ],
    summary:
      'Semana de cierre de la Unidad I. Consolidación de los temas de frontend SPA: HTML/CSS, JS/TS, React y Hooks. A partir de la Unidad II se entra a backend (PHP, JSP, Python, Django, REST, microservicios).',
    codeLang: 'text',
    codeTitle: 'Esquema de evaluación',
    code: `Primer parcial (PP1) = EL × 0.50 + PLP × 0.25 + TI × 0.25
  EL  = Evaluación de Logro 1   (Sem 7-8)
  PLP = Promedio Laboratorios   (Sem 1-7)
  TI  = Trabajo de Investigación / Portafolio

→ Aprobado si PP1 ≥ 10.5 (escala vigesimal)
→ Asistencia mínima requerida: 70%`,
  },
];
