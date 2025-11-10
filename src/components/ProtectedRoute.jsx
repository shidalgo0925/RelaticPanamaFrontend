import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PropTypes from 'prop-types';

/**
 * Componente de ruta protegida que verifica autenticación y roles de usuario.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Componentes hijos a renderizar si el acceso es permitido
 * @param {string[]} props.allowedRoles - Array de roles permitidos para acceder a la ruta
 * @returns {React.ReactElement} Componente hijo o redirección según autenticación/rol
 */
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Si no está autenticado, lo redirigimos al login
  if (!isAuthenticated) {
    return <Navigate to="/login-usuario" state={{ from: location }} replace />;
  }

  // Si no tiene el rol correcto, lo redirigimos a la página de no autorizado
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  // Si todo está bien, muestra el componente hijo
  return children;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;