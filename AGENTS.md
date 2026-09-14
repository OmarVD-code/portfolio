# Descripción general del proyecto

Este proyecto es el portafolio personal de un desarrollador fullstack. Su identidad visual está claramente inspirada en Las Vegas y los juegos de azar, y presenta de forma creativa las secciones habituales de un portafolio: bienvenida, información personal, proyectos, skills y contacto.

## Stack

- React 19.1.1.
- React DOM 19.1.1.
- TypeScript 5.8.3.
- Vite 7.1.5.
- SWC mediante `@vitejs/plugin-react-swc` 4.0.1.
- CSS 3 para los estilos y las animaciones.

## Setup

Instala las dependencias y arranca el entorno de desarrollo:

```bash
npm install
npm run dev
```

Antes de subir cambios a producción, genera y valida el build:

```bash
npm run build
```

El resultado de producción se genera en `dist/`. Para comprobarlo localmente:

```bash
npm run preview
```

## Estilo

- Mantener en toda la interfaz la temática de Las Vegas y los juegos de azar.
- Usar colores, iluminación, contrastes, efectos y animaciones acordes con la estética nocturna, brillante y llamativa de un casino.
- Declarar en inglés los nombres de variables, funciones, tipos, interfaces y clases de código.
- Nombrar los archivos `.tsx` en PascalCase.
- Escribir en kebab-case las clases CSS utilizadas por los componentes dentro del JSX.
- No hardcodear textos visibles para el usuario. Centralizarlos siempre en `src/i18n/translations.ts` y consumirlos mediante el sistema de internacionalización.
- Importar imágenes e iconos desde `src/assets/`. Nunca insertar recursos visuales directamente en el JSX.

## Límites

- No modificar `src/styles/globals.css`. Si un cambio lo requiere, preguntar primero al usuario.
- No agregar, eliminar ni actualizar dependencias sin preguntar primero al usuario.

## Arquitectura

- `src/main.tsx` es el punto de entrada y monta `App` dentro de `I18nProvider`.
- `src/App.tsx` compone las secciones principales del portafolio: navegación, bienvenida, información personal, proyectos, skills y contacto.
- `src/components/` organiza los componentes por dominio o sección: `Navbar`, `Hero`, `About`, `Portfolio`, `Skills` y `Contact`.
- Cada sección se divide en un componente principal y, cuando corresponde, componentes secundarios con responsabilidades concretas.
- Cada grupo de componentes mantiene sus estilos en su propio directorio `styles/` y en un archivo CSS asociado a la sección. Los componentes importan directamente ese archivo CSS.
- Los datos propios de una sección se separan en archivos `*.data.ts`, como los proyectos y las skills.
- `src/hooks/` contiene hooks reutilizables para navegación, detección de sección activa y animaciones al hacer scroll.
- `src/i18n/` centraliza el proveedor de internacionalización y todas las traducciones.
- `src/assets/` centraliza las imágenes, iconos y demás recursos visuales.
