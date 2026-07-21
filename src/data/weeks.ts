export type Week = {
  n: number;
  title: string;
  topics: string[];
  summary: string;
  details: string[];
  concepts: { name: string; desc: string }[];
  codeLang: string;
  codeTitle: string;
  code: string;
  applied?: string;
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
    details: [
      'Una **página web** es un documento HTML único; un **sitio** agrupa varias páginas bajo un mismo dominio; una **aplicación web** añade lógica e interacción dinámica (estado, autenticación, base de datos).',
      'El navegador resuelve el dominio vía **DNS** (Domain Name System) → obtiene la IP → abre una conexión **TCP** (con TLS si es HTTPS) → envía la petición **HTTP** (verbo + ruta + headers + body) → recibe la respuesta (status + headers + body).',
      'El **frontend** se ejecuta en el navegador del cliente (HTML/CSS/JS). El **backend** corre en el servidor (Node, Python, Java) y expone APIs. Un **fullstack** trabaja ambos lados y suele tocar también la base de datos y el deploy.',
      'VS Code se vuelve mucho más productivo con extensiones (ESLint, Prettier, GitLens, Tailwind IntelliSense) y atajos como `Cmd+P` (buscar archivo), `Cmd+Shift+P` (paleta de comandos) y `Cmd+D` (selección múltiple).',
    ],
    concepts: [
      { name: 'URL', desc: 'protocolo://host:puerto/ruta?query#fragmento' },
      { name: 'DNS', desc: 'Traduce dominios (uncp.edu.pe) a IPs (190.x.x.x).' },
      { name: 'HTTP verbos', desc: 'GET (leer), POST (crear), PUT/PATCH (actualizar), DELETE (borrar).' },
      { name: 'Status codes', desc: '2xx éxito · 3xx redirecciones · 4xx error cliente · 5xx error servidor.' },
    ],
    codeLang: 'http',
    codeTitle: 'Anatomía de una petición HTTP',
    code: `# Request
GET /api/sismos?days=7 HTTP/1.1
Host: earthquake.usgs.gov
Accept: application/json
User-Agent: Mozilla/5.0

# Response
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=60
Access-Control-Allow-Origin: *

{
  "type": "FeatureCollection",
  "metadata": { "count": 42 },
  "features": [ /* ... */ ]
}`,
    applied:
      'Configuré VS Code con ESLint, Prettier y Tailwind IntelliSense; aprendí a leer las DevTools del navegador (pestaña Network) para inspeccionar las peticiones reales de cada proyecto.',
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
    details: [
      'HTML5 introdujo etiquetas **semánticas** (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) que ayudan al SEO y a lectores de pantalla. Antes todo era `<div>` con clases.',
      'El navegador parsea el HTML → construye el **DOM tree**, parsea el CSS → construye el **CSSOM**, los combina en el **Render tree**, calcula **Layout** (posiciones y tamaños), pinta los píxeles y compone capas en la GPU.',
      '**Flexbox** es 1-dimensional (fila o columna), ideal para componentes (header, toolbar, card body). **Grid** es 2-dimensional (filas y columnas), ideal para layouts globales (sidebar + main, dashboards complejos).',
      'Las **media queries** y unidades relativas (`rem`, `%`, `vw/vh`, `clamp()`) son la base del diseño responsivo. `mobile-first` significa diseñar primero para celular y usar `min-width` para añadir reglas en pantallas mayores.',
    ],
    concepts: [
      { name: 'Box model', desc: 'content → padding → border → margin (configurable con box-sizing).' },
      { name: 'Cascada', desc: 'Especificidad: inline > id > class > tag. !important sobreescribe todo (evítalo).' },
      { name: 'Position', desc: 'static (default), relative, absolute (vs ancestro positioned), fixed, sticky.' },
      { name: 'Display', desc: 'block, inline, inline-block, flex, grid, none (oculta + saca del flow).' },
    ],
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
    gap: 1rem;
  }
  header { grid-area: h; }
  aside  { grid-area: a; }
  .cards {
    grid-area: m;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 640px) {
    .layout {
      grid-template:
        "h" auto
        "a" auto
        "m" 1fr / 1fr;
    }
  }
</style>`,
    applied:
      'Apliqué HTML semántico y CSS Grid en la base del proyecto de la Ruleta (Semana 6). El layout pasa de 2 columnas en desktop a una sola columna en móvil sin tocar JS.',
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
    details: [
      '**Bootstrap** es "componente-first": importa botones, navbars, modales ya estilizados. Es rápido para prototipos pero todos los sitios se parecen entre sí; personalizar requiere sobreescribir su SCSS.',
      '**Tailwind** es "utility-first": clases atómicas como `flex`, `p-4`, `text-indigo-500`. El estilo vive con el componente, no en archivos CSS separados. El bundle final solo incluye las clases que realmente usas (purge automático).',
      'Tailwind v4 trae el plugin de Vite (`@tailwindcss/vite`), `@import "tailwindcss"` en lugar de las 3 directivas antiguas, y configuración por CSS variables (sin `tailwind.config.js` para casos simples).',
      'El **prefijo responsivo** (`sm:`, `md:`, `lg:`) y los modificadores (`hover:`, `focus:`, `dark:`, `group-hover:`) hacen que el sistema escale sin perder legibilidad.',
    ],
    concepts: [
      { name: 'Utility-first', desc: 'Componer estilos con clases pequeñas en lugar de escribir CSS custom.' },
      { name: 'JIT', desc: 'Just-In-Time: Tailwind genera solo las clases que aparecen en tu código.' },
      { name: 'Tokens', desc: 'Espaciado (4=1rem), colores (indigo-500), tipografía — todo derivado de una escala.' },
      { name: 'Dark mode', desc: 'class="dark" en <html> + variantes dark: en clases.' },
    ],
    codeLang: 'html',
    codeTitle: 'Card con Tailwind (utility-first)',
    code: `<article class="group rounded-xl bg-white p-6 shadow-md
                ring-1 ring-slate-200 hover:shadow-lg
                dark:bg-slate-800 dark:ring-slate-700
                transition">
  <div class="flex items-start gap-3">
    <span class="grid h-10 w-10 place-items-center
                 rounded-lg bg-indigo-100 text-indigo-600
                 dark:bg-indigo-500/10 dark:text-indigo-400">
      ⚡
    </span>
    <div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
        Sismo Tracker Perú
      </h3>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
        SPA con React Hooks y API USGS.
      </p>
    </div>
  </div>
  <a href="#" class="mt-4 inline-flex items-center gap-2
                     text-sm font-medium text-indigo-600
                     hover:text-indigo-500
                     group-hover:gap-3 transition-all">
    Ver proyecto →
  </a>
</article>`,
    applied:
      'Tailwind es lo que uso en este mismo portfolio, en Killa CRM y en Makichay Bot. Me deja iterar diseño sin saltar entre archivos.',
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
    details: [
      'JavaScript es **dinámicamente tipado** (los tipos se infieren en tiempo de ejecución). TypeScript añade tipos estáticos opcionales que se borran al compilar — atrapa errores antes de ejecutar y mejora el autocompletado.',
      'Las **funciones flecha** (`() => {}`) no tienen su propio `this`: heredan el del scope que las contiene. Son ideales para callbacks; las funciones `function` tradicionales son necesarias cuando sí quieres rebindear `this` (por ejemplo, métodos de un objeto).',
      'Un **closure** es una función que "recuerda" las variables del scope donde fue creada, incluso después de que ese scope terminó. Sirve para crear estado privado (contadores, módulos, custom hooks).',
      'El **DOM** es el árbol vivo de la página: `document.querySelector()` lo navega, `addEventListener()` escucha eventos, `element.classList.toggle()` modifica clases sin reescribir el HTML.',
      '**Canvas** es un mapa de bits programable. `requestAnimationFrame` sincroniza el repintado con el refresco del monitor (típicamente 60 fps) y se pausa automáticamente cuando la pestaña no está visible.',
    ],
    concepts: [
      { name: 'let vs const', desc: 'const por defecto; let solo si vas a reasignar; var prácticamente nunca.' },
      { name: '=== vs ==', desc: 'Siempre === (sin coerción de tipos). == hace conversiones implícitas confusas.' },
      { name: 'map / filter / reduce', desc: 'Métodos de Array funcionales que devuelven nuevos arrays/valores sin mutar.' },
      { name: 'Promise / async-await', desc: 'Manejo asíncrono. await pausa la función hasta que la promesa resuelva.' },
    ],
    codeLang: 'javascript',
    codeTitle: 'Animación con Canvas + requestAnimationFrame',
    code: `const canvas = document.querySelector('#ruleta');
const ctx = canvas.getContext('2d');
let angle = 0;
let speed = 0.04;

function drawSlice(color, start, end) {
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.arc(150, 150, 140, start, end);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function tick() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.save();
  ctx.translate(150, 150);
  ctx.rotate(angle);
  ctx.translate(-150, -150);
  const colors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308'];
  colors.forEach((c, i) =>
    drawSlice(c, (i * Math.PI) / 2, ((i + 1) * Math.PI) / 2)
  );
  ctx.restore();

  angle += speed;
  speed *= 0.995; // fricción
  if (speed > 0.001) requestAnimationFrame(tick);
}

document.querySelector('#girar').addEventListener('click', () => {
  speed = 0.4 + Math.random() * 0.2;
  requestAnimationFrame(tick);
});`,
    applied:
      'En la Ruleta usé Canvas + requestAnimationFrame con fricción simulada para que la rueda gire y desacelere de forma natural. El click del botón rebobina la velocidad inicial.',
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
    details: [
      'En **CSR** (Client-Side Rendering) el navegador descarga un HTML casi vacío y un bundle JS; React renderiza todo en el cliente. Es rápido para apps interactivas, pero más lento en el primer pintado y peor para SEO (versus SSR/SSG).',
      'El **Virtual DOM** es una representación en memoria del UI. Cuando el estado cambia, React calcula el diff con el render anterior y aplica solo las mutaciones mínimas al DOM real (más rápido que reescribir).',
      '**Props** son inmutables y unidireccionales (padre → hijo). Si un hijo quiere modificar algo del padre, recibe un callback como prop. **Children** es una prop especial que permite componer: `<Card>contenido</Card>`.',
      'Cada componente debe ser **pure** (mismo input → mismo output, sin efectos). Los efectos secundarios (fetch, timers, listeners) van en `useEffect`, que vemos en Semana 7.',
      'Vite es el build tool moderno por defecto: usa esbuild para dev (instantáneo) y Rollup para producción. Reemplazó a Create React App.',
    ],
    concepts: [
      { name: 'Composición', desc: 'Construir UIs combinando componentes pequeños, no extendiendo clases.' },
      { name: 'key', desc: 'Prop obligatoria en listas — React la usa para identificar items entre renders.' },
      { name: 'Fragment', desc: '<></> devuelve varios elementos sin envoltorio en el DOM.' },
      { name: 'StrictMode', desc: 'Re-monta componentes en dev para detectar efectos no idempotentes.' },
    ],
    codeLang: 'jsx',
    codeTitle: 'Componente con props y children',
    code: `// Card.jsx — componente reutilizable
function Card({ title, badge, children, onClick }) {
  return (
    <article className="card" onClick={onClick}>
      <header className="card-head">
        <h3>{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </header>
      <div className="card-body">{children}</div>
    </article>
  );
}

// App.jsx — composición
export default function App() {
  const proyectos = [
    { id: 1, name: 'Sismo Tracker', tag: 'React' },
    { id: 2, name: 'Killa CRM', tag: 'Next.js' },
  ];

  return (
    <main>
      <h1>Mis proyectos</h1>
      {proyectos.map((p) => (
        <Card key={p.id} title={p.name} badge={p.tag}>
          <p>Click para ver detalles.</p>
          <a href={\`/p/\${p.id}\`}>Abrir →</a>
        </Card>
      ))}
    </main>
  );
}`,
    applied:
      'Toda la arquitectura del Sismo Tracker y de Killa CRM se basa en componentes funcionales con props. El portfolio que ves está construido con la misma idea pero usando .astro en lugar de .jsx.',
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
    details: [
      'En un **formulario controlado** cada input lee su valor del estado React y notifica cambios con `onChange`. Eso permite validar, transformar o deshabilitar el submit en tiempo real.',
      '**Renderizado condicional**: `&&` para mostrar/ocultar (`{loading && <Spinner/>}`), operador ternario para alternativas (`{ok ? <Ok/> : <Err/>}`), early return para casos vacíos.',
      '**`.map()`** convierte un array de datos en un array de elementos React. Siempre necesita una `key` única y estable (no uses el índice si la lista puede reordenarse).',
      '**fetch** está integrado en el navegador; **axios** es una librería más cómoda (interceptors, JSON automático, cancelación con AbortController). Para proyectos pequeños fetch sobra.',
      '**React Router** define rutas declarativamente con `<Routes>` y `<Route path="/x" element={<X/>}>`. La navegación SPA cambia el componente sin recargar la página.',
    ],
    concepts: [
      { name: 'Synthetic events', desc: 'React envuelve los eventos nativos para que sean consistentes entre navegadores.' },
      { name: 'preventDefault', desc: 'En onSubmit evita que el form recargue la página al enviar.' },
      { name: 'CORS', desc: 'El navegador bloquea peticiones cross-origin sin headers correctos.' },
      { name: 'loading states', desc: 'Modela explícitamente loading / error / empty / data — la UI siempre debe responder.' },
    ],
    codeLang: 'jsx',
    codeTitle: 'Formulario controlado + consumo de API con async/await',
    code: `function Buscador() {
  const [q, setQ] = useState('');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    if (!q.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(\`/api/search?q=\${encodeURIComponent(q)}\`);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      const data = await res.json();
      setResultados(data.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar..."
        disabled={loading}
      />
      <button type="submit" disabled={loading || !q.trim()}>
        {loading ? 'Buscando…' : 'Buscar'}
      </button>

      {error && <p className="error">⚠ {error}</p>}
      {!loading && resultados.length === 0 && q && <p>Sin resultados.</p>}

      <ul>
        {resultados.map((r) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </form>
  );
}`,
    applied:
      'Usé este patrón completo (loading + error + empty + data) en CineTracker (TVMaze) y en Sismo Tracker (USGS). Tener los 4 estados explícitos evita las pantallas "en blanco" cuando algo falla.',
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
    details: [
      '**useState** declara estado local; **useEffect** corre código después de cada render (o solo cuando cambian sus dependencias). Devolver una función desde useEffect = cleanup (cancelar timers, listeners, peticiones).',
      '**useRef** crea una referencia mutable que NO causa re-render al cambiar. Sirve para acceder al DOM (`<input ref={...}/>`) o para guardar valores entre renders sin re-renderizar (timers, abort controllers).',
      '**useContext** evita el "prop drilling" — pasar props por 5 niveles. Defines un Provider arriba en el árbol y cualquier hijo lo consume con `useContext(MiContexto)`.',
      '**useReducer** es como useState pero para lógica compleja: `(state, action) => newState`. Centraliza transiciones en un único lugar (estilo Redux pero sin librería).',
      '**useMemo** memoriza un cálculo costoso entre renders. **useCallback** memoriza una función para que la referencia sea estable (importante si la pasas como prop o dep de useEffect).',
      'Un **custom hook** es una función que empieza con `use` y combina otros hooks. Encapsula lógica reutilizable (fetching, debounce, localStorage) sin necesidad de HOCs ni render props.',
    ],
    concepts: [
      { name: 'Reglas de hooks', desc: 'Solo en el top-level de un componente o de otro hook. No dentro de if/for/funciones anidadas.' },
      { name: 'Dependencias', desc: 'El array de useEffect/useMemo/useCallback debe listar TODO lo que leen del scope externo.' },
      { name: 'AbortController', desc: 'Cancela un fetch en curso. Esencial en useEffect para evitar setState tras unmount.' },
      { name: 'Optimización', desc: 'Mide antes de memoizar. React.memo + useMemo + useCallback ayudan, pero también complican.' },
    ],
    codeLang: 'jsx',
    codeTitle: 'Custom hook con AbortController + transform',
    code: `// useFetch.js — hook reutilizable
import { useState, useEffect } from 'react';

export function useFetch(url, { transform } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    setError(null);

    fetch(url, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error(\`HTTP \${r.status}\`);
        return r.json();
      })
      .then((json) => setData(transform ? transform(json) : json))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err);
      })
      .finally(() => setLoading(false));

    return () => ctrl.abort(); // cleanup
  }, [url, transform]);

  return { data, loading, error };
}

// ───── Uso en Sismo Tracker ─────
function Dashboard({ filters }) {
  // url solo cambia si días o magnitud cambian (no si tipea en buscador)
  const url = useMemo(
    () => buildUsgsUrl({ days: filters.days, minMag: filters.minMag }),
    [filters.days, filters.minMag]
  );

  const { data: sismos, loading, error } = useFetch(url, {
    transform: transformUsgs,
  });

  if (loading) return <Skeleton />;
  if (error)   return <ErrorBox msg={error.message} />;
  if (!sismos?.length) return <Empty />;
  return <SismosList items={sismos} />;
}`,
    applied:
      'En Sismo Tracker uso useFetch + useDebounce + useTheme + useAuth. En CineTracker la división por personas fue: P1 useReducer, P2 useContext, P3 useMemo+useCallback, P4 QA. El Profiler de React DevTools confirmó 0 re-renders innecesarios.',
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
    details: [
      'La Unidad I cubrió el flujo completo del **frontend moderno**: marcado semántico, estilos con frameworks de utilidad, lógica con TypeScript, framework declarativo basado en componentes y hooks para estado y efectos.',
      'Las **evaluaciones de logro** son aplicaciones prácticas — no exámenes teóricos. Lo que cuenta es que el proyecto corra, esté en GitHub y demuestre los conceptos pedidos (props, hooks, consumo de API real).',
      'El **portafolio** (este sitio) es parte del Trabajo de Investigación (TI). Mostrar el proceso, no solo el resultado, ayuda a defender la nota.',
      'La Unidad II arranca con **backend**: PHP/JSP introductorios, luego Python para llegar a Django y REST APIs, y termina con microservicios y Docker/Kubernetes.',
    ],
    concepts: [
      { name: 'Mínima nota', desc: '10.5 / 20 (escala vigesimal) para aprobar el consolidado.' },
      { name: 'Asistencia', desc: '70% mínimo, según el reglamento.' },
      { name: 'Evidencias', desc: 'Repositorios GitHub + portafolio + entregables de laboratorio.' },
    ],
    codeLang: 'text',
    codeTitle: 'Esquema de evaluación',
    code: `Primer parcial (PP1) = EL × 0.50 + PLP × 0.25 + TI × 0.25
  EL  = Evaluación de Logro 1   (Sem 7-8) — aplicación web operativa
  PLP = Promedio Laboratorios   (Sem 1-7)
  TI  = Trabajo de Investigación / Portafolio

Segundo parcial (PP2) = mismo formato (Sem 9-16, backend)
Nota final = (PP1 + PP2) / 2

→ Aprobado si nota final ≥ 10.5 (escala vigesimal)
→ Asistencia mínima requerida: 70%

Próximo: Unidad II — Desarrollo Web Backend
  · Tecnología web backend, PHP, JSP
  · Python (sintaxis, POO)
  · Django (MVT, vistas, modelos, formularios, admin)
  · REST APIs (HATEOAS, paginación, CSRF, CORS)
  · Microservicios, Docker, Kubernetes`,
    applied:
      'Para el consolidado entrego: Sismo Tracker (Sem 7), CineTracker grupal (Sem 7), Ruleta (Sem 6) y este portafolio. Todos públicos en GitHub bajo @Sullu55.',
  },
  {
    n: 9,
    title: 'Tecnología Web Backend — PHP y JSP',
    topics: [
      'Arquitectura de aplicaciones web y server side',
      'Servidores web: Apache (PHP) y Tomcat (JSP)',
      'Aplicaciones web con PHP',
      'Aplicaciones web con JSP',
    ],
    summary:
      'Inicio de la Unidad II (backend). El servidor deja de servir archivos estáticos y empieza a ejecutar lógica: recibe el request, valida, mantiene estado con sesiones y compone la respuesta. Se comparan dos stacks clásicos — PHP sobre Apache y JSP sobre Tomcat.',
    details: [
      'En **server-side rendering** el navegador manda un request (formulario, API) y el servidor **ejecuta código** (PHP/Java) antes de devolver el HTML o JSON. A diferencia del frontend, aquí viven la validación real, el acceso a base de datos y los secretos.',
      '**PHP** se ejecuta sobre **Apache**: el intérprete parsea el `.php`, ejecuta el script (superglobales `$_POST`, `$_SERVER`, `$_SESSION`) y emite la salida. Es de bajo acoplamiento — un archivo = un endpoint.',
      '**JSP** (JavaServer Pages) corre sobre **Tomcat 10** (Jakarta EE): el `.jsp` se compila a un servlet Java. El descriptor `WEB-INF/web.xml` configura rutas, `session-timeout` y cookies `HttpOnly`.',
      'La **validación nunca se confía al cliente**: en PHP uso `filter_input()` y devuelvo códigos HTTP correctos (405 si el método no es POST, 400 si la entrada es inválida). El estado entre requests (HTTP es *stateless*) se mantiene con **sesiones**.',
    ],
    concepts: [
      { name: 'Ciclo PHP', desc: 'parse → execute → output. Cada request arranca un intérprete limpio.' },
      { name: 'JSP → Servlet', desc: 'El .jsp se compila a una clase Java la primera vez que se pide (por eso el primer acceso es lento).' },
      { name: 'Sesión', desc: 'session_start() en PHP / HttpSession en JSP — estado por usuario sobre HTTP stateless.' },
      { name: 'Jakarta vs javax', desc: 'Tomcat 10 migró el namespace javax.* → jakarta.* (causa típica de error 500).' },
    ],
    codeLang: 'php',
    codeTitle: 'procesar.php — validación server-side + sesión (Lab 09)',
    code: `<?php
require_once __DIR__ . '/config.php';
session_start();

// 1) Validar método HTTP: solo POST, si no -> 405
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit('405 Method Not Allowed - Solo se acepta POST');
}

// 2) Validación de entrada (NO confiar en el cliente)
$nombre  = filter_input(INPUT_POST, 'nombre',  FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW);
$correo  = filter_input(INPUT_POST, 'correo',  FILTER_VALIDATE_EMAIL);
$edad    = filter_input(INPUT_POST, 'edad',    FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 1, 'max_range' => 120]
]);

$errores = [];
if (!$nombre || trim($nombre) === '') { $errores[] = 'El nombre es obligatorio.'; }
if (!$correo)                         { $errores[] = 'Correo inválido.'; }
if ($edad === false || $edad === null){ $errores[] = 'Edad fuera de rango (1-120).'; }

// 3) Con errores -> 400 ; sin errores -> guardar en sesión
if (!empty($errores)) {
    http_response_code(400);
} else {
    $_SESSION['ultimo_envio'] = [
        'nombre' => $nombre, 'correo' => $correo, 'edad' => $edad,
        'hora'   => date('Y-m-d H:i:s'),
    ];
    $_SESSION['contador'] = ($_SESSION['contador'] ?? 0) + 1;
}
// La respuesta se escapa con htmlspecialchars() para evitar XSS.`,
    applied:
      'Construí el mismo formulario en PHP (Apache) y JSP (Tomcat 10) para comparar ambos stacks: validación con filter_input(), respuestas HTTP correctas (200/400/405), escape anti-XSS con htmlspecialchars() y sesiones con cookie HttpOnly. Documenté las diferencias en docs/COMPARACION_PHP_JSP.md. El bug más instructivo: Tomcat 10 devolvía 500 porque el web.xml usaba el namespace javax.* en lugar de jakarta.*.',
  },
  {
    n: 10,
    title: 'Lenguaje Python — sintaxis y POO',
    topics: [
      'Sintaxis, indentación, variables, cadenas y números',
      'Colecciones: listas, tuplas, diccionarios',
      'Estructuras de control y funciones (retorno, imperativas)',
      'POO: clases, herencia múltiple, polimorfismo, excepciones, módulos',
    ],
    summary:
      'Python como lenguaje del backend moderno (paso previo a Django). La indentación es sintaxis, el tipado es dinámico pero fuerte, y la POO —clases, herencia, polimorfismo, excepciones— es la base sobre la que Django construye sus modelos y vistas.',
    details: [
      'Python usa **indentación** (no llaves) para delimitar bloques. Es **dinámicamente tipado** pero **fuertemente tipado**: no mezcla `str + int` en silencio como JavaScript. Las anotaciones de tipo (`def f(x: int) -> str`) son opcionales y no se comprueban en runtime.',
      'Las **colecciones** core: `list` (mutable, ordenada), `tuple` (inmutable), `dict` (clave→valor, ordenada desde 3.7) y `set` (únicos). Las *comprehensions* (`[x*2 for x in nums if x > 0]`) reemplazan muchos `for` explícitos.',
      'La **POO**: `class` define atributos e instancias; `__init__` es el constructor; `self` es la instancia. Python soporta **herencia múltiple** (resuelta por MRO) y **polimorfismo** vía *duck typing* — si un objeto tiene el método, sirve, sin importar su clase.',
      'Las **excepciones** (`try/except/finally`, `raise`) modelan los errores; los **módulos** (`import`) y paquetes organizan el código. Este es exactamente el modelo mental que Django reutiliza: un modelo es una clase, una vista es una función o clase.',
    ],
    concepts: [
      { name: 'Indentación', desc: 'Los bloques se definen por sangría (4 espacios), no por llaves. Es sintaxis, no estilo.' },
      { name: 'Duck typing', desc: '"Si camina como pato y suena como pato, es un pato." Polimorfismo sin interfaces explícitas.' },
      { name: 'self', desc: 'Primer parámetro de todo método de instancia; referencia al objeto actual (como this).' },
      { name: 'Comprehensions', desc: '[expr for x in iter if cond] — construir listas/dicts/sets de forma declarativa.' },
    ],
    codeLang: 'python',
    codeTitle: 'POO en Python: clases, herencia y polimorfismo',
    code: `class Producto:
    """Clase base. __init__ es el constructor; self es la instancia."""
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def etiqueta(self):
        return f"{self.nombre}: S/ {self.precio:.2f}"


class Bebida(Producto):          # herencia
    def __init__(self, nombre, precio, ml):
        super().__init__(nombre, precio)
        self.ml = ml

    def etiqueta(self):          # polimorfismo (sobrescribe el método)
        return f"{self.nombre} ({self.ml}ml): S/ {self.precio:.2f}"


carta = [
    Producto("Alfajor", 3.50),
    Bebida("Capuchino", 8.00, 240),
]

# Duck typing: no importa la clase, todos responden a .etiqueta()
for p in carta:
    print(p.etiqueta())

# Comprehension + excepciones
try:
    caros = [p.nombre for p in carta if p.precio > 5]
    print("Caros:", caros)
except AttributeError as e:
    print("Error de atributo:", e)`,
    applied:
      'Python es la base de todo el backend que viene después: en las semanas 11-13 lo uso vía Django (modelos = clases, vistas = funciones/clases, managers = métodos). El modelo mental de POO —herencia y polimorfismo— es justo lo que aplico al extender ModelForm, ListView y ModelViewSet.',
  },
  {
    n: 11,
    title: 'Django — patrón MTV, vistas y plantillas',
    topics: [
      'Django MVC/MTV, instalación y gestión de proyectos',
      'Enrutamiento: urls.py, include() y rutas con name',
      'Vistas basadas en funciones (FBV) y en clases (CBV)',
      'Plantillas (herencia, tags, filtros) y modelo de datos (ORM)',
    ],
    summary:
      'Django introduce el patrón **MTV** (Model-Template-View), su variante del MVC. El ORM mapea clases Python a tablas SQL, las vistas (función o clase) resuelven el request→response y las plantillas heredan de una base con bloques, tags y filtros.',
    details: [
      'En **MTV** el *Model* es la clase que define los datos (Django genera el SQL vía **migraciones**), la *View* contiene la lógica (recibe `request`, devuelve `response`) y el *Template* es el HTML con lógica de presentación. El "Controller" es el propio framework (el enrutador).',
      'El **enrutamiento** se arma con `urls.py` e `include()`: cada app tiene sus rutas y el proyecto las agrupa. Nombrar las rutas (`name="catalogo:home"`) permite **reversibilidad** — generar URLs sin hardcodearlas.',
      'Las **FBV** (vistas función) son explícitas y directas; las **CBV** como `ListView` traen comportamiento reutilizable (paginación, `get_context_data`). Uso `home` como FBV y `ProductoListView` como CBV en el mismo proyecto para comparar.',
      'Las **plantillas** usan herencia (`{% extends "base.html" %}`), bloques, tags (`{% for %}`, `{% if %}`, `{% regroup %}`) y filtros (`|title`, `|date`, `|pluralize`). El **ORM** (`Producto.objects.filter(...)`) reemplaza el SQL manual y previene inyección.',
    ],
    concepts: [
      { name: 'MTV', desc: 'Model (datos) + Template (HTML) + View (lógica). El "Controller" es Django mismo.' },
      { name: 'ORM', desc: 'Producto.objects.filter(disponible=True) → SQL seguro y portable, sin escribir queries a mano.' },
      { name: 'Migraciones', desc: 'makemigrations + migrate: versionan los cambios del modelo y los aplican a la BD.' },
      { name: 'FBV vs CBV', desc: 'Función (explícita, simple) vs Clase (reutilizable: ListView, DetailView, get_context_data).' },
    ],
    codeLang: 'python',
    codeTitle: 'Vistas FBV + CBV con el ORM (Cafetería UNCP)',
    code: `from django.shortcuts import render
from django.views.generic import ListView
from .models import Producto


# --- Vista Basada en Función (FBV) ---
def home(request):
    """Ciclo request -> response con render()."""
    contexto = {
        'titulo': 'cafetería UNCP',
        'total_productos': Producto.objects.count(),
        'disponibles': Producto.objects.filter(disponible=True).count(),
        'destacados': Producto.objects.filter(destacado=True, disponible=True),
    }
    return render(request, 'catalogo/home.html', contexto)


# --- Vista Basada en Clase (CBV) ---
class ProductoListView(ListView):
    model = Producto
    template_name = 'catalogo/catalogo.html'
    context_object_name = 'productos'
    # Ordenado por categoría para agrupar con {% regroup %} en la plantilla
    queryset = Producto.objects.order_by('categoria', '-destacado', 'nombre')

    def get_context_data(self, **kwargs):
        contexto = super().get_context_data(**kwargs)
        contexto['disponibles'] = Producto.objects.filter(disponible=True).count()
        return contexto`,
    applied:
      'Construí "Cafetería UNCP": un catálogo con modelo Producto (nombre, precio, categoría, disponible, destacado, calificación), portada FBV con estadísticas y carta CBV con productos agrupados por categoría vía {% regroup %}, insignias Disponible/Agotado/Favorito y estrellas de calificación. Datos poblados por un management command con el ORM (poblar_datos).',
    myProject: { name: 'Cafetería UNCP (Django MTV)', href: 'https://github.com/Sullit0/semana11-cafeteria' },
  },
  {
    n: 12,
    title: 'Django — formularios, admin, middleware y seguridad',
    topics: [
      'Formularios: ModelForm, validación en 3 niveles y sanitización',
      'Django Admin: list_display, filtros, acciones, campos calculados',
      'Middleware custom, sesiones y cabeceras de seguridad',
      'Autenticación y autorización por roles/permisos + CSRF',
    ],
    summary:
      'El ciclo completo de gestión segura de datos en Django: formularios que validan en varios niveles, un panel de administración personalizado, middleware propio que audita cada request, y autorización basada en grupos y permisos con protección CSRF.',
    details: [
      'Un **ModelForm** deriva sus campos del modelo y valida en **3 niveles**: por campo (`clean_<campo>`), cruzada entre campos (`clean()` — ej. "solo becado si promedio ≥ 14") y a nivel de modelo. La entrada se **sanitiza** (`strip()` + `escape()`) para mitigar XSS. Nunca se confía en el frontend: todo pasa por `is_valid()` antes de `save()`.',
      'El **Django Admin** se personaliza con `list_display`, `list_filter`, `search_fields`, `readonly_fields`, `actions` y `@admin.display` — un CRUD administrativo completo casi gratis.',
      'Un **middleware custom** es una clase con `__init__` (una vez al arrancar) y `__call__` (en cada request): ejecuta código antes de la vista, llama a `get_response(request)`, y ejecuta código después. Lo uso para auditar método, ruta, status, usuario y duración de cada petición.',
      'La **autorización** usa grupos y permisos de Django: `@login_required` protege vistas función y `PermissionRequiredMixin` protege CBV. **CSRF** (`{% csrf_token %}` + cookie `HttpOnly`/`SameSite=Lax`), sesiones con expiración (30 min) y cabeceras (`X-Frame-Options: DENY`, `nosniff`) cierran el modelo de seguridad.',
    ],
    concepts: [
      { name: 'clean_<campo> / clean()', desc: 'Validación por campo y cruzada. add_error() asocia un error no fatal a un campo.' },
      { name: 'CSRF', desc: 'Token por sesión que evita que un tercero envíe formularios en tu nombre. Obligatorio en POST.' },
      { name: 'Middleware', desc: '__init__ (arranque) + __call__ (cada request). Envuelve la vista: antes → get_response → después.' },
      { name: 'Permisos', desc: 'Grupos + permisos (view_estudiante). @login_required y PermissionRequiredMixin protegen vistas.' },
    ],
    codeLang: 'python',
    codeTitle: 'Validación en 3 niveles con ModelForm (Sistema de Gestión)',
    code: `import re
from django import forms
from django.utils.html import escape
from .models import Estudiante


def sanitize_input(valor):
    """Recorta espacios y escapa HTML para mitigar XSS (no reemplaza la validación)."""
    return escape(valor.strip()) if valor else valor


class EstudianteForm(forms.ModelForm):
    class Meta:
        model = Estudiante
        fields = ['codigo', 'nombres', 'apellidos', 'correo',
                  'telefono', 'promedio', 'becado', 'activo']

    # Nivel 1: validación por campo
    def clean_correo(self):
        correo = self.cleaned_data.get('correo', '').strip().lower()
        if correo and not correo.endswith('@uncp.edu.pe'):
            raise forms.ValidationError('El correo debe ser del dominio @uncp.edu.pe')
        return correo

    def clean_telefono(self):
        tel = self.cleaned_data.get('telefono', '').strip()
        if tel and not re.fullmatch(r'9\\d{8}', tel):
            raise forms.ValidationError('El teléfono debe tener 9 dígitos y empezar con 9.')
        return tel

    # Nivel 2: validación cruzada entre campos
    def clean(self):
        cleaned = super().clean()
        if cleaned.get('becado') and (cleaned.get('promedio') or 0) < 14:
            self.add_error('becado', 'Solo pueden ser becados con promedio >= 14.')
        return cleaned`,
    applied:
      'Sistema de gestión de estudiantes con el ciclo de seguridad completo: ModelForm con validación en 3 niveles + sanitización, Django Admin personalizado, un middleware AuditLogMiddleware que registra [AUDIT] método/ruta/status/usuario/duración y añade la cabecera X-Tiempo-Respuesta, y autorización por grupos (rol Coordinador con permiso view_estudiante). Verificado con python manage.py check --deploy.',
    myProject: { name: 'Gestión Django (forms + auth)', href: 'https://github.com/Sullit0/practica-semana12-django' },
  },
  {
    n: 13,
    title: 'Diseño de APIs RESTful con Django REST Framework',
    topics: [
      'REST, HATEOAS y serialización de modelos',
      'ViewSets + Routers (CRUD automático) y acciones custom',
      'Filtrado, búsqueda, paginación y throttling',
      'CORS, CSRF y documentación OpenAPI (Swagger/ReDoc)',
    ],
    summary:
      'Diseño de una API REST profesional con Django REST Framework. Los serializers hipervinculados implementan HATEOAS, los ViewSets + Router generan el CRUD automáticamente, y las políticas transversales (filtrado, paginación, throttling, permisos) viven en la configuración, no en las vistas.',
    details: [
      '**REST** modela recursos con URLs y verbos HTTP (`GET` listar/leer, `POST` crear, `PUT/PATCH` actualizar, `DELETE` borrar). **HATEOAS** añade hipervínculos en cada respuesta (campo `url` + enlaces a recursos relacionados) para navegar la API sin documentación externa — lo logro con `HyperlinkedModelSerializer`.',
      'La **serialización** convierte modelos ↔ JSON y **valida ahí** (regla de laboratorio: `validate_<campo>()` y `validate()` en el serializer, no en la vista). Se exponen solo los campos listados explícitamente — nunca campos sensibles.',
      'Los **ViewSets** (`ModelViewSet`) + un **Router** (`DefaultRouter`) generan todas las rutas del CRUD automáticamente. Las vistas quedan "delgadas": añado endpoints extra con `@action` (ej. `/productos/destacados/`, `/productos/{id}/agotar/`).',
      'Las políticas transversales van en `settings`: **filtrado/búsqueda/ordenamiento** (`DjangoFilterBackend`, `SearchFilter`, `OrderingFilter`), **paginación** con metadatos, **throttling** (30/min anónimo, 120/min autenticado), **permisos** globales (`IsAuthenticatedOrReadOnly`), **CORS** con orígenes explícitos (no `*`) y docs **OpenAPI 3.0** automáticas (Swagger/ReDoc).',
    ],
    concepts: [
      { name: 'HATEOAS', desc: 'Cada recurso trae su url y enlaces a los relacionados — la API se autodescribe.' },
      { name: 'ViewSet + Router', desc: 'ModelViewSet + DefaultRouter generan list/create/retrieve/update/destroy sin escribir rutas.' },
      { name: 'Throttling', desc: 'Límite de tasa por cliente (30/min anónimo, 120/min auth) contra abuso y scraping.' },
      { name: 'CORS', desc: 'Orígenes cross-domain permitidos, explícitos (nunca *). Distinto de CSRF (formularios de sesión).' },
    ],
    codeLang: 'python',
    codeTitle: 'Serializer hipervinculado + ViewSet con @action (API MercadoAndino)',
    code: `from rest_framework import serializers, viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Categoria, Producto


# --- Serialización con HATEOAS (la validación vive AQUÍ) ---
class CategoriaSerializer(serializers.HyperlinkedModelSerializer):
    total_productos = serializers.SerializerMethodField()  # campo derivado read-only

    class Meta:
        model = Categoria
        fields = ['id', 'url', 'nombre', 'slug', 'activa', 'total_productos']
        read_only_fields = ['slug']

    def get_total_productos(self, obj) -> int:
        return obj.productos.count()

    def validate_nombre(self, value):
        if value.strip().isdigit():
            raise serializers.ValidationError('El nombre no puede ser solo números.')
        return value.strip()


# --- ViewSet: el Router genera list/create/retrieve/update/destroy ---
class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['nombre', 'descripcion']

    @action(detail=True, methods=['get'])
    def productos(self, request, pk=None):
        """GET /api/categorias/{id}/productos/ -> productos de la categoría (paginado)."""
        qs = self.get_object().productos.all().order_by('-created')
        page = self.paginate_queryset(qs)
        ser = ProductoSerializer(page or qs, many=True, context={'request': request})
        return self.get_paginated_response(ser.data)`,
    applied:
      'Construí "API MercadoAndino": una API REST de catálogo andino (categorías + productos) con Django REST Framework. Serializers hipervinculados (HATEOAS), ViewSets + DefaultRouter para el CRUD, acciones custom (destacados, agotar), filtrado/búsqueda/paginación, throttling (30/120 por min), CORS con orígenes explícitos y documentación OpenAPI 3.0 con Swagger UI y ReDoc. Incluye un frontend demo que consume la API vía fetch() y una colección api.http para REST Client.',
    myProject: { name: 'API MercadoAndino (DRF)', href: 'https://github.com/Sullit0/desarrollo-web-semana-13' },
  },
  {
    n: 14,
    title: 'Microservicios en Django — Docker y Kubernetes',
    topics: [
      'Arquitectura de microservicios vs monolito',
      'Primer microservicio con Django y comunicación entre servicios',
      'Bases de datos por servicio y contenedores (Docker)',
      'Despliegue, monitoreo y escalado con Kubernetes',
    ],
    summary:
      'Cierre técnico de la Unidad II: descomponer el backend en servicios pequeños e independientes, cada uno con su base de datos, empaquetados en contenedores Docker y orquestados con Kubernetes para escalarlos y monitorearlos por separado.',
    details: [
      'Un **monolito** es una sola aplicación desplegable; los **microservicios** la parten en servicios pequeños que hacen una cosa y se comunican por red (REST/HTTP o mensajería). Cada servicio se despliega, escala y falla de forma independiente — a cambio de más complejidad operativa.',
      'La regla **database-per-service**: cada microservicio es dueño de su propia base de datos y nadie más la toca directamente. Se sincronizan por API o eventos, no compartiendo tablas. Esto evita el acoplamiento oculto del monolito.',
      '**Docker** empaqueta cada servicio con sus dependencias en una imagen reproducible (`Dockerfile` + `docker-compose` para desarrollo local). "Funciona en mi máquina" deja de ser excusa: el contenedor lleva su entorno consigo.',
      '**Kubernetes** orquesta los contenedores en producción: los reinicia si caen (self-healing), los escala según carga (réplicas), hace balanceo de carga y despliegues sin downtime. Encima se añaden **monitoreo** y **escalado** para operar el sistema.',
    ],
    concepts: [
      { name: 'Microservicio', desc: 'Servicio pequeño, autónomo, con un único propósito y su propia BD, comunicado por red.' },
      { name: 'Docker', desc: 'Imagen = app + dependencias + entorno. Contenedor = instancia en ejecución, reproducible.' },
      { name: 'Kubernetes', desc: 'Orquestador: self-healing, réplicas, balanceo y despliegues sin downtime.' },
      { name: 'DB per service', desc: 'Cada servicio dueño de su BD; se integran por API/eventos, no compartiendo tablas.' },
    ],
    codeLang: 'yaml',
    codeTitle: 'Contenerizar un microservicio Django con Docker Compose',
    code: `# docker-compose.yml — servicio de catálogo + su propia base de datos
services:
  catalogo:
    build: ./catalogo            # Dockerfile del microservicio Django
    command: gunicorn config.wsgi:application --bind 0.0.0.0:8000
    environment:
      - DATABASE_URL=postgres://app:secret@catalogo-db:5432/catalogo
    ports:
      - "8001:8000"
    depends_on:
      - catalogo-db

  # Base de datos PROPIA de este servicio (database-per-service)
  catalogo-db:
    image: postgres:16
    environment:
      - POSTGRES_USER=app
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=catalogo
    volumes:
      - catalogo_data:/var/lib/postgresql/data

volumes:
  catalogo_data:

# En producción, un Deployment de Kubernetes corre N réplicas de "catalogo"
# detrás de un Service que balancea la carga y las reinicia si caen.`,
    applied:
      'Semana en curso (voy en la ~15). El objetivo es descomponer el backend de las semanas anteriores en microservicios Django contenerizados con Docker, cada uno con su BD, y orquestarlos con Kubernetes. Actualizaré esta sección con mi microservicio y su repositorio cuando lo termine.',
  },
];
