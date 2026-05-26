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
];
