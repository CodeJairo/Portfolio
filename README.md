# Portfolio Personal - Jairo Herrera

> Portafolio web profesional construido con Astro y Tailwind CSS

[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat&logo=netlify)](https://codejairo.netlify.app/)
[![Astro](https://img.shields.io/badge/Astro-5.8.0-FF5D01?style=flat&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.7-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)

** Sitio en vivo:** [https://codejairo.netlify.app/](https://codejairo.netlify.app/)

---

## Sobre el Desarrollador

¡Hola! Soy **Jairo Herrera**, un **Ingeniero de Software** y **Desarrollador Full Stack** apasionado por crear aplicaciones web robustas y eficientes. Me especializo en el ecosistema JavaScript y combino estudios formales con aprendizaje autodidacta para mantenerme actualizado con las últimas tecnologías.

### Proyectos Destacados

**Pleroma** - Software de gestión contractual con arquitectura MVC e inyección de dependencias, diseñado con un enfoque profesional desde el backend.

---

## Tabla de Contenido

- [Características](#características)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Características

- **Ultra rápido**: Construido con Astro para máximo rendimiento
- **Diseño moderno**: Interfaz limpia con Tailwind CSS
- **Modo oscuro**: Cambio de tema light/dark
- **Totalmente responsivo**: Adaptado para todos los dispositivos
- **Accesible**: Diseñado pensando en la accesibilidad
- **Animaciones suaves**: Efectos de escritura y transiciones fluidas
- **SEO optimizado**: Preparado para los motores de búsqueda

---

## Instalación

### Requisitos Previos

- **Node.js**: 18.x o superior
- **npm**: 9.x o superior (o pnpm/yarn)

### Pasos de Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/CodeJairo/Portfolio-copy.git
cd Portfolio-copy
```

2. **Instala las dependencias**

```bash
npm install
```

---

## Desarrollo

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa del build de producción localmente |
| `npm run astro` | Ejecuta comandos CLI de Astro |

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Construir para producción

```bash
npm run build
```

Los archivos optimizados se generarán en el directorio `./dist/`

---

## Estructura del Proyecto

```
Portfolio-copy/
├── public/              # Archivos estáticos (favicon, fonts)
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── assets/          # Imágenes y recursos
│   │   ├── gato.png
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/      # Componentes reutilizables
│   │   ├── Welcome.astro
│   │   ├── card.astro
│   │   ├── footer.astro
│   │   ├── modal-button.astro
│   │   ├── navbar.astro
│   │   └── theme-toggle.astro
│   ├── layouts/         # Layouts de página
│   │   └── Layout.astro
│   ├── pages/           # Rutas de la aplicación
│   │   └── index.astro
│   ├── sections/        # Secciones de la página principal
│   │   ├── section1.astro    # Sección Hero/Inicio
│   │   ├── section2.astro    # Sección Proyectos
│   │   └── section3.astro    # Sección Sobre Mí
│   └── styles/          # Estilos globales
│       └── global.css
├── astro.config.mjs     # Configuración de Astro
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
└── README.md            # Este archivo
```

### Descripción de Secciones

- **Section 1 (Hero)**: Presentación principal con animación de texto dinámico
- **Section 2 (Proyectos)**: Showcase de proyectos demostrativos con tecnologías utilizadas
- **Section 3 (Sobre Mí)**: Información sobre habilidades, objetivos y stack tecnológico

---

## Nota Importante

> Este portfolio está en **desarrollo continuo**. Los proyectos mostrados son demostrativos y están diseñados para exhibir habilidades en diseño y desarrollo web. Para ver ejemplos reales de trabajo y proyectos en producción, no dudes en contactarme directamente.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## Contacto

¿Interesado en colaborar o tienes alguna pregunta?

- 🌐 **Portfolio**: [codejairo.netlify.app](https://codejairo.netlify.app/)
- 💼 **LinkedIn**: [linkedin.com/in/codejairo](https://www.linkedin.com/in/codejairo/)
- 💻 **GitHub**: [github.com/CodeJairo](https://github.com/CodeJairo)

---

<div align="center">

**⭐ Si te gusta este proyecto, considera darle una estrella en GitHub ⭐**

Hecho con ❤️ por [Jairo Herrera](https://github.com/CodeJairo)

</div>
