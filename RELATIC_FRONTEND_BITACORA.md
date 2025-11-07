# Bitácora de cambios - Proyecto `relatic-frontend`

## Contexto
- **Fecha de trabajo principal:** Noviembre 2025
- **Ruta del proyecto:** `/home/relaticpanama2025/projects/relatic-frontend`
- **Stack:** React + Vite, Tailwind CSS, componentes personalizados.

## Cambios destacados

1. **Navbar**
   - Reemplazo del logo por versión con `Globe` y dot azul.
   - Enlaces de “Iniciar Sesión” y “Registrarse” apuntan al backend Flask (`http://localhost:9000/login` y `/register`).
   - Se añadió “Administrador de Correos” en el entorno `membresia-relatic` (navbar correspondiente) para abrir Listmonk.

2. **Carousel & Services**
   - Separación de datos (`carouselData.js`) y utilidades (`carouselUtils.jsx`).
   - Nuevo slide “Ser Integrante de RELATIC”.
   - Títulos y subtítulos estilizados (blanco / amarillo) con overlays oscuros para mejorar contraste.
   - Eliminación de iconos en progreso y cambios de velocidad (10s).

3. **Componentes nuevos**
   - `ServicesGrid.jsx` con sección “Servicios Gratuitos” (6 tarjetas, estilos base azul/slate).
   - `MembershipBenefits.jsx` (3 tarjetas: Revistas, Bases de Datos, Asesoría).

4. **Chatbot**
   - CSS y JS separados a `public/css/chatbot.css` y `public/js/chatbot.js`.
   - El asistente queda oculto por defecto y se muestra al pulsar el botón flotante.

5. **Optimización**
   - `vite.config.js` ajustado para minificación Terser, manualChunks, warmup, optimizeDeps.
   - `LoadingFallback` ligero en `App.jsx`.

6. **Estética general**
   - Paleta base en los componentes principales: fondo blanco, resaltados azules/slate.
   - Footer actualizado con “Powered by Innova Proyectos & Easytech Services”.

7. **Integraciones**
   - Botones de login/registro redirigen a `membresia-relatic` (porta 9000).
   - Preparado para futura integración con Listmonk (API ready via entorno Python en `/projects/listmonk`).

## Pendientes / Sugerencias
- Revisar versión de dependencias (actualizar `npm audit fix` si es necesario).
- Añadir tests o storybook para servicios y carousel.
- Ajustar diseño responsive extremo (mobile landscape) según feedback.


