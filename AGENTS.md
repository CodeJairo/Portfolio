# AGENTS.md — Guía del Proyecto y Reglas para Agentes

Este archivo define el contexto arquitectónico, estructura, convenciones de código y comandos operativos del portafolio personal de **Jairo Esteban Herrera Rentería (`codejairo`)**. Cualquier agente que opere en este repositorio debe seguir estas directrices.

---

## 1. Visión General del Proyecto

- **Propósito:** Portafolio técnico profesional orientado a destacar experiencia en ingeniería de software, desarrollo full stack, arquitectura backend, diseño de interfaces y proyectos clave de alto impacto.
- **Autor:** Jairo Esteban Herrera Rentería ([GitHub: codejairo](https://github.com/codejairo) / [LinkedIn: codejairo](https://www.linkedin.com/in/codejairo/)).
- **Dominio / Producción:** `https://codejairo.netlify.app`
- **Idioma principal del contenido:** Español (`lang="es"`).

---

## 2. Stack Tecnológico y Dependencias

| Tecnología | Versión / Tipo | Uso y Rol |
| :--- | :--- | :--- |
| **Astro** | `^5.8.0` | Meta-framework generador de sitios estáticos (SSG) y renderizado de componentes. |
| **Tailwind CSS** | `^4.1.7` (`@tailwindcss/vite`) | Framework de estilos utilitarios (versión 4 con Vite plugin nativo). |
| **Alpine.js** | `v3.x` (CDN en layout) | Reactividad ligera para modales e interactividad UI sin sobrecargar el bundle. |
| **AOS (Animate On Scroll)** | `^2.3.4` + `@types/aos` | Efectos y transiciones al hacer scroll, con perfil dinámico según página. |
| **Sharp** | `^0.34.5` | Procesamiento y optimización automática de imágenes vía `astro:assets`. |
| **@astrojs/sitemap** | `^3.7.0` | Generación automática del mapa del sitio para SEO. |
| **Fuentes locales** | Satoshi (Woff2) | Tipografía personalizada autohospedada en `public/fonts/`. |
| **Gestor de Paquetes** | `pnpm` | Gestor rápido y consistente de dependencias (`pnpm-lock.yaml`). |

---

## 3. Estructura de Directorios

```text
Portfolio/
├── .astro/                  # Tipos y caché generada por Astro
├── public/                  # Assets estáticos servidos directamente
│   ├── favicon.ico
│   ├── favicon.svg
│   └── fonts/               # Fuentes Satoshi-Regular y Satoshi-Bold (.woff2)
├── src/
│   ├── assets/              # Imágenes y SVGs optimizados por Astro (Sharp)
│   │   ├── fraud-detection/ # Gráficos y capturas del proyecto Fintech Fraud Detection
│   │   ├── higinex/         # Capturas del proyecto Higinex B2B
│   │   ├── pleroma/         # Capturas del proyecto Pleroma
│   │   ├── profile.png      # Foto de perfil del hero
│   │   └── background.svg
│   ├── components/          # Componentes Astro reutilizables
│   │   ├── card.astro       # Tarjeta de proyectos con badges de techs y enlaces
│   │   ├── footer.astro     # Pie de página responsive con navegación y redes
│   │   ├── modal-button.astro # Botón flotante y modal de contacto (Alpine.js)
│   │   ├── navbar.astro     # Barra de navegación fija con backdrop blur
│   │   ├── theme-toggle.astro # Switch Dark/Light con animación View Transitions
│   │   └── projects/        # Secciones modulares de páginas de detalle de proyecto
│   │       ├── higinex/     # HiginexHero, HiginexLearnings, HiginexFooter
│   │       └── pleroma/     # PleromaHero, PleromaLearnings, PleromaFooter
│   ├── layouts/
│   │   └── Layout.astro     # Plantilla HTML global, SEO, Schema.org, script anti-FOUC, AOS
│   ├── pages/
│   │   ├── index.astro      # Página principal (Home)
│   │   └── projects/
│   │       ├── esp-contrata.astro # Caso de estudio detallado de ESP Contrata (Contratación Pública)
│   │       ├── fraud-detection.astro # Caso de estudio de Fintech Fraud Detection (Streaming & Lakehouse ML)
│   │       ├── guardrail-api.astro # Caso de estudio de Guardrail API (Auditoría DAST/SAST y SARIF)
│   │       └── higinex.astro # Caso de estudio detallado de Higinex (E-commerce B2B)
│   ├── sections/            # Secciones principales del Home
│   │   ├── section1.astro   # Hero: Presentación, máquina de escribir, CTA
│   │   ├── section2.astro   # Proyectos destacados (Fintech Fraud Detection, Higinex, ESP Contrata, Guardrail API)
│   │   └── section3.astro   # Sobre mí (Tarjetas: Quién soy, Stack, Metas, etc.)
│   ├── styles/
│   │   └── global.css       # Configuración Tailwind v4, animaciones, scrollbar y tema
│   └── types/
│       └── aos.d.ts         # Tipado de declaraciones TypeScript para AOS
├── astro.config.mjs         # Configuración de Astro, Vite y plugins
├── package.json             # Scripts y dependencias del proyecto
├── pnpm-lock.yaml           # Bloqueo de dependencias pnpm
├── robots.txt               # Directivas de rastreo de motores de búsqueda
├── tsconfig.json            # Configuración estricta de TypeScript ("astro/tsconfigs/strict")
└── README.md                # Resumen técnico y perfil del autor
```

---

## 4. Detalles de Arquitectura e Implementación

### 4.1. Layout Base (`src/layouts/Layout.astro`)
- **Navegación SPA & Transiciones:** Astro `<ClientRouter />` para navegación fluida e instantánea entre rutas, con resincronización de tema y reactivación del árbol Alpine (`Alpine.initTree(document.body)`) en `astro:after-swap`.
- **Gestión de Tema (Dark/Light):** Script inline en el `<head>` para evitar FOUC (Flash of Unstyled Content), leyendo de `localStorage` con fallback a `'dark'`.
- **SEO & Metadatos Dinámicos:** Soporte configurable de OpenGraph y Twitter Cards por proyecto (`ogImage`, `ogType`, `canonical`), verificación de Google Search Console, Schema.org en formato `application/ld+json` con tipo `Person`.
- **Fondo Atmosférico:** Gradientes radiales con desenfoque (`blur-[120px]`) y una capa de ruido procedimental SVG con baja opacidad.
- **Configuración de AOS:**
  - Desactiva animaciones si el usuario tiene `prefers-reduced-motion`.
  - Configura perfiles diferenciados según el path (`/projects/*` tiene duración menor y offset bajo para mejor lectura de documentación; la home tiene mayor fluidez).
  - Escucha el evento `astro:page-load` para compatibilidad con navegación SPA.

### 4.2. Estilos Globales y Tailwind CSS v4 (`src/styles/global.css`)
- Usa `@import "tailwindcss";` y `@custom-variant dark (&:where(.dark, .dark *));`.
- Tipografía Satoshi cargada con `@font-face` con `font-display: swap`.
- Estilizado de scrollbars personalizadas para WebKit.
- Soporte para la API de transiciones de vista circular (`::view-transition-old(root)` y `::view-transition-new(root)`).
- Keyframes utilitarios: `blink`, `fadeUp`, `fadeIn`.
- Control y anulación de animaciones mediante `:root[data-is-animating]` y `data-reduced-motion`.

### 4.3. Páginas de Detalle de Proyectos (`src/pages/projects/`)
- **Fintech Fraud Detection (`fraud-detection.astro`):** Caso de estudio sobre plataforma de detección de fraude en streaming. Detalla arquitectura Medallion (Bronze/Silver/Gold), ingesta Kafka/Redpanda con semántica at-least-once, motor de feature engineering en Polars, clasificación supervisada con LightGBM, motor híbrido de reglas contables y microservicio FastAPI con latencia <5ms.
- **Higinex (`higinex.astro`):** Caso de estudio sobre plataforma de e-commerce B2B de productos de aseo e higiene. Presenta stack, pilares comerciales, flujo de despacho y catálogo con precios negociados.
- **ESP Contrata (`esp-contrata.astro`):** Caso de estudio sobre sistema institucional de contratación pública colombiana (gestión de terceros, CDP presupuestal, expedientes contractuales, resguardo en AWS S3 y logs de auditoría multi-tenant).
- **Guardrail API (`guardrail-api.astro`):** Caso de estudio sobre herramienta CLI y paquete npm para auditoría de seguridad en APIs modernas mediante análisis estático de contratos OpenAPI y probes dinámicos (DAST) con reportes SARIF 2.1.0 para CI/CD.

### 4.4. Componentes y UI
- **`theme-toggle.astro`:** Switch estilizado que desencadena `document.startViewTransition()` calculando el radio del círculo con `Math.hypot` desde la posición del clic del cursor.
- **`modal-button.astro`:** Botón flotante accesible implementado con `Alpine.js` (`x-data`, `x-show`, `x-transition`) para contacto directo.
- **`card.astro`:** Card interactiva con soporte para enlaces externos, accesibilidad de teclado (`onkeydown`), tags de tecnologías con enlaces directos y parada de propagación de eventos (`stopPropagation`).

---

## 5. Comandos de Desarrollo y Operación

Todos los comandos deben ejecutarse utilizando **`pnpm`**:

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo local
pnpm dev

# Construir para producción
pnpm build

# Previsualizar el build de producción
pnpm preview

# Validar / ejecutar CLI de Astro
pnpm astro
```

---

## 6. Reglas y Convenciones para el Desarrollo

Al realizar cambios en este proyecto, los agentes deben cumplir estrictamente:

1. **Gestor de paquetes:** Usar **`pnpm`** en todo momento (no usar `npm` ni `yarn` para evitar conflictos en `pnpm-lock.yaml`).
2. **Tailwind CSS v4:** No recurrir a archivos obsoletos de `tailwind.config.js`. Respetar la sintaxis de Tailwind v4 y las clases utilitarias definidas en `src/styles/global.css`.
3. **Optimización de Imágenes:** Usar siempre el componente `Image` de `astro:assets` con `src` importado estáticamente para permitir compresión y generación de formatos modernos (`webp`/`avif`) vía `sharp`.
4. **Modo Oscuro:** Mantener soporte completo tanto para modo claro como oscuro en cada componente nuevo o modificado utilizando las variantes `dark:*`.
5. **Accesibilidad (a11y):**
   - Asegurar atributos `alt` descriptivos en imágenes.
   - Preservar `aria-label`, roles de accesibilidad y foco navegable en botones y modales.
   - Respetar `prefers-reduced-motion` al añadir nuevas animaciones o estilos interactivos.
6. **Integridad del Código:**
   - Mantener las rutas relativas o absolutas coherentes.
   - Respetar el tipado estricto definido en `tsconfig.json`.
   - No romper las transiciones de vista ni la inicialización de Alpine / AOS.
