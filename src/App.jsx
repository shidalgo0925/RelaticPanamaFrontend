import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Importa el AuthProvider
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ Importa ProtectedRoute

// Componentes críticos - cargar inmediatamente (no lazy)
import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';

// Lazy imports para componentes secundarios
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

// Componente de loading optimizado - más ligero
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center">
      <div className="inline-block w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

// Componente de envoltura para páginas que no son el Home, incluye el botón
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

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Componente para manejar scroll al hash
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

// ✅ ProtectedPageLayout DEFINIDO en App.jsx (NO en archivo separado)
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

const App = () => (
  <Router>
    <AuthProvider>
      <Routes>
        {/* Rutas Públicas */}
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
        <Route path="/detalles-revistas" element={<PageLayout><div className='space-y-8'><JournalMetrics /><JournalsDetails /></div></PageLayout>} />
        <Route path="/detalles-carteles" element={<PageLayout><div className='space-y-8'><PostersMetrics /><PostersDetails /></div></PageLayout>} />
        <Route path="/detalles-libros" element={<PageLayout><div className='space-y-8'><BooksMetrics /><BooksDetails /></div></PageLayout>} />
        <Route path="/detalles-aprendizaje" element={<PageLayout><div className='space-y-8'><CoursesMetrics /><LearningDetails /></div></PageLayout>} />
        <Route path="/detalles-propiedad-intelectual" element={<PageLayout><IntellectualPropertyDetails /></PageLayout>} />
        <Route path="/panel-administracion" element={<PageLayout><AdminPanel /></PageLayout>} />
        <Route path="/guia-paso-a-paso" element={<PageLayout><StepByStepGuide /></PageLayout>} />
        
        {/* ✅ Rutas Protegidas de Gestor/Admin - SIN PageLayout DUPLICADO */}
        <Route element={<ProtectedPageLayout allowedRoles={['gestor', 'admin']} />}>
          <Route path="/panel-gestor/:id" element={<GestorDashboard />} />
          <Route path="/generar-certificado" element={<MainDashboard />} />
          <Route path="/generar-carnet" element={<GenerateCarnet />} />
          <Route path="/generar-carta" element={<MainDashboard />} /> {/* ✅ Vuelve a MainDashboard */}
        </Route>

        {/* ✅ Rutas Protegidas de Miembro - SIN PageLayout DUPLICADO */}
        <Route element={<ProtectedPageLayout allowedRoles={['member']} />}>
          <Route path="/panel-miembro/:id" element={<MemberPanel />} />
        </Route>

        {/* Catch-all para rutas no encontradas */}
        <Route path="*" element={<PageLayout><div className="text-center py-10">Ruta no encontrada</div></PageLayout>} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;