# RELATIC Frontend

Frontend de la plataforma RELATIC Panamá - Sistema de membresía para investigadores y académicos.

## 📋 Descripción

Aplicación web desarrollada con React y Vite que proporciona una interfaz moderna y responsive para la plataforma RELATIC. Incluye gestión de membresías, servicios académicos, paneles de administración, y herramientas para investigadores.

## 🚀 Tecnologías Principales

- **React 18.3.1** - Biblioteca de UI
- **Vite 5.4.10** - Build tool y dev server
- **React Router DOM 6.30.0** - Enrutamiento
- **Tailwind CSS 3.4.14** - Framework CSS
- **Framer Motion 12.23.12** - Animaciones
- **Lucide React** - Iconos
- **Recharts 3.1.0** - Gráficos y métricas

## 📁 Estructura del Proyecto

```
relatic-frontend/
├── src/
│   ├── components/          # Componentes React
│   │   ├── AuthContext.jsx      # Contexto de autenticación
│   │   ├── ProtectedRoute.jsx   # Rutas protegidas
│   │   ├── Navbar.jsx           # Barra de navegación
│   │   ├── Footer.jsx           # Pie de página
│   │   ├── Carousel/            # Carrusel de imágenes
│   │   └── ...                  # Otros componentes
│   ├── assets/             # Recursos estáticos (imágenes, etc.)
│   ├── css/                # Estilos adicionales
│   ├── api/                # Configuración de API
│   ├── App.jsx             # Componente principal y rutas
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Archivos públicos
├── dist/                   # Build de producción (generado)
├── vite.config.js          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind
├── eslint.config.js        # Configuración de ESLint
└── package.json            # Dependencias y scripts
```

## 🛠️ Instalación

### Requisitos Previos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio** (si aplica):
```bash
git clone <repository-url>
cd relatic-frontend
```

2. **Instalar dependencias**:
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno** (si es necesario):
```bash
# Crear archivo .env si no existe
cp .env.example .env
# Editar .env con las configuraciones necesarias
```

## 🚀 Scripts Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173` con hot-reload.

### Build de Producción
```bash
npm run build
```
Genera los archivos optimizados en la carpeta `dist/`.

### Preview de Producción
```bash
npm run preview
```
Sirve la versión de producción localmente para pruebas.

### Linting
```bash
npm run lint
```
Ejecuta ESLint para verificar la calidad del código.

## 📖 Componentes Principales

### AuthContext
Proporciona el contexto de autenticación para toda la aplicación. Maneja el estado del usuario y las funciones de login/logout.

**Uso:**
```jsx
import { useAuth } from './components/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  // ...
}
```

### ProtectedRoute
Componente que protege rutas basándose en autenticación y roles de usuario.

**Uso:**
```jsx
<Route element={<ProtectedPageLayout allowedRoles={['admin', 'gestor']} />}>
  <Route path="/panel-admin" element={<AdminPanel />} />
</Route>
```

### Navbar
Barra de navegación principal con menú responsive y navegación por secciones.

### Carousel
Carrusel de imágenes para la página principal con animaciones.

## 🔐 Autenticación y Roles

La aplicación maneja tres tipos de roles:

- **member**: Miembro regular con acceso a panel de miembro
- **gestor**: Gestor con acceso a herramientas de gestión
- **admin**: Administrador con acceso completo

## 🎨 Estilos y Diseño

- **Tailwind CSS**: Utilizado para todos los estilos
- **Responsive Design**: Mobile-first approach
- **Animaciones**: Framer Motion para transiciones suaves
- **Iconos**: Lucide React y React Icons

## 📡 API y Backend

El frontend se comunica con el backend Flask en:
- Desarrollo: Proxy configurado en `vite.config.js`
- Producción: `https://relaticpanama.org`

## 🧪 Testing

Para ejecutar tests (si están configurados):
```bash
npm test
```

## 📦 Build y Despliegue

### Build de Producción

El build optimiza automáticamente:
- Code splitting por rutas y componentes grandes
- Minificación con Terser
- Eliminación de console.logs y debuggers
- Optimización de assets (CSS, imágenes)

### Despliegue

1. Ejecutar build:
```bash
npm run build
```

2. Los archivos en `dist/` están listos para servir con cualquier servidor web estático o CDN.

3. Configurar el servidor para:
   - Servir `index.html` para todas las rutas (SPA routing)
   - Configurar headers de seguridad apropiados
   - Habilitar compresión gzip/brotli

## 🔧 Configuración

### Vite Config
- Puerto: 5173
- Host: 0.0.0.0 (accesible desde red)
- Proxy para API: `/api` → backend
- Code splitting configurado para optimización

### Tailwind Config
- Contenido: `index.html` y todos los archivos `.jsx` en `src/`
- Animaciones personalizadas incluidas

### ESLint Config
- Reglas de React y React Hooks habilitadas
- Soporte para JSX runtime moderno

## 📝 Convenciones de Código

### Nomenclatura
- Componentes: PascalCase (ej: `UserLogin.jsx`)
- Funciones: camelCase (ej: `handleSubmit`)
- Constantes: UPPER_SNAKE_CASE (ej: `API_BASE_URL`)

### Estructura de Componentes
```jsx
// 1. Imports
import React from 'react';
import PropTypes from 'prop-types';

// 2. Componente
const MyComponent = ({ prop1, prop2 }) => {
  // 3. Hooks
  const [state, setState] = useState();
  
  // 4. Funciones
  const handleClick = () => {
    // ...
  };
  
  // 5. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 6. PropTypes
MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

// 7. Export
export default MyComponent;
```

### Comentarios
- Usar comentarios descriptivos para lógica compleja
- Documentar props y funciones con JSDoc cuando sea necesario
- Evitar código comentado innecesario

## 🐛 Troubleshooting

### Problemas Comunes

**Error: Cannot find module**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Puerto 5173 ya en uso**
- Cambiar el puerto en `vite.config.js` o matar el proceso que lo usa

**Errores de build**
- Verificar que todas las dependencias estén instaladas
- Limpiar cache: `rm -rf dist node_modules/.vite`

## 🤝 Contribución

1. Crear una rama desde `main`
2. Realizar cambios y commits descriptivos
3. Ejecutar `npm run lint` antes de commitear
4. Crear Pull Request con descripción clara

## 📄 Licencia

[Especificar licencia]

## 👥 Equipo

RELATIC Panamá - Desarrollo Frontend

## 📞 Soporte

Para problemas o preguntas, contactar al equipo de desarrollo.

---

**Última actualización**: Noviembre 2025
