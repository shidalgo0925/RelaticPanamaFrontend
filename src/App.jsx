/**
 * Componente principal de la aplicación RELATIC Frontend.
 * 
 * Este archivo gestiona:
 * - Configuración de rutas con React Router
 * - Lazy loading de componentes para optimización
 * - Layouts para diferentes secciones de la aplicación
 * - Protección de rutas basada en roles de usuario
 * 
 * @module App
 */

import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Importa el AuthProvider para gestión de autenticación
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Componentes críticos - cargar inmediatamente (no lazy)
// Estos componentes son necesarios para el renderizado inicial
import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';

// Lazy imports para componentes secundarios
// Estos componentes se cargan bajo demanda para mejorar el rendimiento inicial
const Footer = lazy(() => import('./components/Footer'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Agreements = lazy(() => import('./components/Agreements'));
const RedirectToHomeButton = lazy(() => import('./components/RedirectToHomeButton'));
const ServicesGrid = lazy(() => import('./components/ServicesGrid'));
const MembershipBenefits = lazy(() => import('./components/MembershipBenefits'));
const UpcomingActivities = lazy(() => import('./components/UpcomingActivities'));
const PreviousActivities = lazy(() => import('./components/PreviousActivities'));
const Suscription = lazy(() => import('./components/Suscription'));
const CreateOrcidGguide = lazy(() => import('./components/CreateOrcidGuide'));
const JournalsDetails = lazy(() => import('./components/JournalsDetails'));
const PostersDetails = lazy(() => import('./components/PostersDetails'));
const BooksDetails = lazy(() => import('./components/BooksDetails'));
const LearningDetails = lazy(() => import('./components/LearningDetails'));
const IntellectualPropertyDetails = lazy(() => import('./components/IntellectualPropertyDetails'));
const SearchPage = lazy(() => import('./components/SearchPage'));
const JournalMetrics = lazy(() => import('./components/JournalMetrics'));
const PostersMetrics = lazy(() => import('./components/PostersMetrics'));
const BooksMetrics = lazy(() => import('./components/BooksMetrics'));
const CoursesMetrics = lazy(() => import('./components/CoursesMetrics'));
const GenerateCarnet = lazy(() => import('./components/GenerateCarnet'));
const UserRegistration = lazy(() => import('./components/UserRegistration'));
const AdminPanel = lazy(() => import('./components/AdminPanel'));
const MemberPanel = lazy(() => import('./components/MemberPanel'));
const UserLogin = lazy(() => import('./components/UserLogin'));
const Unauthorized = lazy(() => import('./components/Unauthorized'));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions'));
const MainDashboard = lazy(() => import('./components/MainDashboard'));
const GestorDashboard = lazy(() => import('./components/GestorDashboard'));
const StepByStepGuide = lazy(() => import('./components/StepByStepGuide'));
const JournalsPortalSection = lazy(() => import('./components/JournalsPortalSection'));
const PostersPortalSection = lazy(() => import('./components/PostersPortalSection'));
const BooksPortalSection = lazy(() => import('./components/BooksPortalSection'));
const LearningPortalSection = lazy(() => import('./components/LearningPortalSection'));
const IntellectualPropertyPortalSection = lazy(() => import('./components/IntellectualPropertyPortalSection'));
const FormateoRapidoDetails = lazy(() => import('./components/FormateoRapidoDetails'));
const FormateoRapidoPortalSection = lazy(() => import('./components/FormateoRapidoPortalSection'));
const JournalsFeatures = lazy(() => import('./components/JournalsFeatures'));
const PostersFeatures = lazy(() => import('./components/PostersFeatures'));
const BooksFeatures = lazy(() => import('./components/BooksFeatures'));
const IntellectualPropertyFeatures = lazy(() => import('./components/IntellectualPropertyFeatures'));
const FormateoRapidoFeatures = lazy(() => import('./components/FormateoRapidoFeatures'));

/**
 * Componente de loading optimizado que se muestra mientras se cargan componentes lazy.
 * Diseñado para ser ligero y no bloquear el renderizado.
 */
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center">
      <div className="inline-block w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

/**
 * Layout para páginas secundarias que incluye botón de regreso al inicio.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido de la página
 */
const PageLayout = ({ children }) => (
  <Suspense fallback={<LoadingFallback />}>
    <main className="flex flex-col min-h-screen container mx-auto px-4 py-10">
      <div className="flex justify-start mb-6">
        <RedirectToHomeButton />
      </div>
      {children}
    </main>
  </Suspense>
);

/**
 * Layout para páginas que incluyen Navbar y Footer pero sin botón de regreso.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido de la página
 */
const PageLayoutNoButton = ({ children }) => (
  <>
    <Navbar />
    <Suspense fallback={<LoadingFallback />}>
      <main className="flex flex-col min-h-screen container mx-auto px-4 py-10">
        {children}
      </main>
    </Suspense>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

PageLayoutNoButton.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Componente que maneja el scroll automático a secciones cuando hay un hash en la URL.
 * Útil para navegación directa a secciones específicas de una página.
 */
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

/**
 * Layout principal de la página de inicio.
 * Incluye todas las secciones principales: carrusel, servicios, beneficios, búsqueda, etc.
 */
const HomeLayout = () => (
  <>
    <ScrollToHash />
    {/* Componentes críticos - cargan inmediatamente */}
    <Navbar />
    <section id="inicio">
      <Carousel />
    </section>
    
    {/* Componentes secundarios - carga progresiva */}
    <section id="servicios">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <ServicesGrid />
      </Suspense>
    </section>
    
    <section id="beneficios">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <MembershipBenefits />
      </Suspense>
    </section>
    
    <section id="busqueda">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <div className="container mx-auto px-4 py-10">
          <SearchPage />
        </div>
      </Suspense>
    </section>
    
    <section id="nosotros">
      <Suspense fallback={null}>
        <AboutUs />
      </Suspense>
    </section>
    
    <section id="actividades">
      <Suspense fallback={null}>
        <div className="container mx-auto px-4 py-10">
          <UpcomingActivities />
        </div>
      </Suspense>
    </section>
    
    <Suspense fallback={null}>
      <Agreements />
    </Suspense>
    
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </>
);

/**
 * Layout específico para la página de revistas indexadas.
 * Incluye detalles, portal de revistas, características y métricas.
 */
const JournalsPageLayout = () => (
  <>
    <ScrollToHash />
    {/* Componentes críticos - cargan inmediatamente */}
    <Navbar />
    <section id="inicio">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <JournalsDetails />
      </Suspense>
    </section>
    
    {/* Sección Portal de Revistas */}
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <JournalsPortalSection />
    </Suspense>
    
    {/* Sección de Características de Revistas */}
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <JournalsFeatures />
    </Suspense>
    
    {/* Componentes secundarios - carga progresiva */}
    <section id="beneficios">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <MembershipBenefits />
      </Suspense>
    </section>
    
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    
    {/* Métricas al final */}
    <Suspense fallback={null}>
      <div className="container mx-auto px-4 py-10">
        <JournalMetrics />
      </div>
    </Suspense>
  </>
);

/**
 * Layout específico para la página de carteles digitales.
 * Similar a JournalsPageLayout pero adaptado para carteles.
 */
const PostersPageLayout = () => (
  <>
    <ScrollToHash />
    {/* Componentes críticos - cargan inmediatamente */}
    <Navbar />
    <section id="inicio">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <PostersDetails />
      </Suspense>
    </section>
    
    {/* Sección Portal de Carteles Digitales */}
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <PostersPortalSection />
    </Suspense>
    
    {/* Sección de Características de Carteles Digitales */}
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <PostersFeatures />
    </Suspense>
    
    {/* Componentes secundarios - carga progresiva */}
    <section id="beneficios">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <MembershipBenefits />
      </Suspense>
    </section>
    
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    
    {/* Métricas al final */}
    <Suspense fallback={null}>
      <div className="container mx-auto px-4 py-10">
        <PostersMetrics />
      </div>
    </Suspense>
  </>
);

/**
 * Layout específico para la página de libros digitales.
 */
const BooksPageLayout = () => (
  <>
    <ScrollToHash />
    <Navbar />
    <section id="inicio">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <BooksDetails />
      </Suspense>
    </section>
    
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <BooksPortalSection />
    </Suspense>
    
    {/* Sección de Características de Libros Digitales */}
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <BooksFeatures />
    </Suspense>
    
    <section id="beneficios">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <MembershipBenefits />
      </Suspense>
    </section>
    
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    
    <Suspense fallback={null}>
      <div className="container mx-auto px-4 py-10">
        <BooksMetrics />
      </div>
    </Suspense>
  </>
);

/**
 * Layout específico para la página de aprendizaje continuo.
 */
const LearningPageLayout = () => (
  <>
    <ScrollToHash />
    <Navbar />
    <section id="inicio">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <LearningDetails />
      </Suspense>
    </section>
    
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <LearningPortalSection />
    </Suspense>
    
    <section id="beneficios">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <MembershipBenefits />
      </Suspense>
    </section>
    
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    
    <Suspense fallback={null}>
      <div className="container mx-auto px-4 py-10">
        <CoursesMetrics />
      </div>
    </Suspense>
  </>
);

/**
 * Layout específico para la página de propiedad intelectual.
 */
const IntellectualPropertyPageLayout = () => (
  <>
    <ScrollToHash />
    <Navbar />
    <section id="inicio">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <IntellectualPropertyDetails />
      </Suspense>
    </section>
    
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <IntellectualPropertyPortalSection />
    </Suspense>
    
    {/* Sección de Características de Propiedad Intelectual */}
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <IntellectualPropertyFeatures />
    </Suspense>
    
    <section id="beneficios">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <MembershipBenefits />
      </Suspense>
    </section>
    
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </>
);

/**
 * Layout específico para la página de formateo rápido.
 */
const FormateoRapidoPageLayout = () => (
  <>
    <ScrollToHash />
    <Navbar />
    <section id="inicio">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <FormateoRapidoDetails />
      </Suspense>
    </section>
    
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <FormateoRapidoPortalSection />
    </Suspense>
    
    {/* Sección de Proceso de Formateo Rápido */}
    <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
      <FormateoRapidoFeatures />
    </Suspense>
    
    <section id="beneficios">
      <Suspense fallback={<div className="py-16"><div className="text-center"><div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div></div>}>
        <MembershipBenefits />
      </Suspense>
    </section>
    
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </>
);

/**
 * Layout para páginas protegidas que requieren autenticación y roles específicos.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string[]} props.allowedRoles - Array de roles permitidos para acceder
 */
const ProtectedPageLayout = ({ allowedRoles }) => (
  <ProtectedRoute allowedRoles={allowedRoles}>
    <PageLayout>
      <Outlet />
    </PageLayout>
  </ProtectedRoute>
);

ProtectedPageLayout.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/**
 * Componente principal de la aplicación.
 * Configura el router, el proveedor de autenticación y todas las rutas.
 */
const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        {/* ========== RUTAS PÚBLICAS ========== */}
        {/* Estas rutas son accesibles sin autenticación */}
        <Route path="/" element={<HomeLayout />} />
        <Route path="/unauthorized" element={<PageLayout><Unauthorized /></PageLayout>} />
        <Route path="/terminos-condiciones" element={<PageLayout><TermsAndConditions /></PageLayout>} />
        <Route path="/nosotros" element={<PageLayout><AboutUs /></PageLayout>} />
        <Route path="/actividades/proximas" element={<PageLayout><UpcomingActivities /></PageLayout>} />
        <Route path="/actividades/anteriores" element={<PageLayout><PreviousActivities /></PageLayout>} />
        <Route path="/suscription" element={<PageLayout><Suscription /></PageLayout>} />
        <Route path="/crear-orcid" element={<PageLayout><CreateOrcidGguide /></PageLayout>} />
        <Route path="/registro-usuario" element={<PageLayout><UserRegistration /></PageLayout>} />
        <Route path="/login-usuario" element={<PageLayout><UserLogin /></PageLayout>} />
        <Route path="/detalles-revistas" element={<JournalsPageLayout />} />
        <Route path="/detalles-carteles" element={<PostersPageLayout />} />
        <Route path="/detalles-libros" element={<BooksPageLayout />} />
        <Route path="/detalles-aprendizaje" element={<LearningPageLayout />} />
        <Route path="/detalles-propiedad-intelectual" element={<IntellectualPropertyPageLayout />} />
        <Route path="/detalles-formateo-rapido" element={<FormateoRapidoPageLayout />} />
        <Route path="/panel-administracion" element={<PageLayout><AdminPanel /></PageLayout>} />
        <Route path="/guia-paso-a-paso" element={<PageLayout><StepByStepGuide /></PageLayout>} />
        
        {/* ========== RUTAS PROTEGIDAS ========== */}
        {/* Estas rutas requieren autenticación y roles específicos */}
        {/* Rutas Protegidas de Gestor/Admin */}
        <Route element={<ProtectedPageLayout allowedRoles={['gestor', 'admin']} />}>
          <Route path="/panel-gestor/:id" element={<GestorDashboard />} />
          <Route path="/generar-certificado" element={<MainDashboard />} />
          <Route path="/generar-carnet" element={<GenerateCarnet />} />
          <Route path="/generar-carta" element={<MainDashboard />} /> {/* ✅ Vuelve a MainDashboard */}
        </Route>

        {/* Rutas Protegidas de Miembro */}
        <Route element={<ProtectedPageLayout allowedRoles={['member']} />}>
          <Route path="/panel-miembro/:id" element={<MemberPanel />} />
        </Route>

        {/* ========== RUTA CATCH-ALL ========== */}
        {/* Maneja todas las rutas no definidas arriba */}
        <Route path="*" element={<PageLayout><div className="text-center py-10">Ruta no encontrada</div></PageLayout>} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;