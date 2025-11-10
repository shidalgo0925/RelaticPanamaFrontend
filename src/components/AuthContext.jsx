import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * Contexto de autenticación para gestionar el estado del usuario en toda la aplicación.
 * Proporciona funciones de login, logout y estado de autenticación.
 */
const AuthContext = createContext(null);

/**
 * Proveedor de autenticación que envuelve la aplicación y gestiona el estado del usuario.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto
 * @returns {React.ReactElement} Provider con el contexto de autenticación
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      // Si hay error al parsear, retornar null (usuario no autenticado)
      return null;
    }
  });

  const isAuthenticated = !!user;

  // Usa useCallback para mantener la referencia estable
  const login = useCallback((userData) => {
    setUser(userData);
    try {
      localStorage.setItem('user', JSON.stringify(userData));
    } catch {
      // Si hay error al guardar, continuar (el usuario se mantiene en memoria)
      // En producción, considerar logging a un servicio externo
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);
  
  const value = useMemo(() => ({ 
    isAuthenticated, 
    user, 
    login, 
    logout 
  }), [isAuthenticated, user, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook personalizado para acceder al contexto de autenticación.
 * Debe ser usado dentro de un componente envuelto por AuthProvider.
 * 
 * @returns {Object} Objeto con { user, isAuthenticated, login, logout }
 * @throws {Error} Si se usa fuera de AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};