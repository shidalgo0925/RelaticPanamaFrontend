import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  CreditCard, 
  Users, 
  Settings, 
  Gift, 
  ShoppingCart,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menuKey) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const menuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      path: '/dashboard'
    },
    {
      key: 'servicios-gratuitos',
      label: 'Servicios Gratuitos',
      icon: Gift,
      path: '/servicios-gratuitos',
      children: [
        { label: 'PDF a Word/Excel', path: '/servicios-gratuitos/pdf-word' },
        { label: 'Conversor de Formatos', path: '/servicios-gratuitos/conversor' },
        { label: 'Herramientas de Texto', path: '/servicios-gratuitos/texto' }
      ]
    },
    {
      key: 'servicios-premium',
      label: 'Servicios Premium',
      icon: ShoppingCart,
      path: '/servicios-premium',
      children: [
        { label: 'Registro de Dominio', path: '/servicios-premium/dominio' },
        { label: 'Hosting Premium', path: '/servicios-premium/hosting' },
        { label: 'Soporte Técnico', path: '/servicios-premium/soporte' }
      ]
    },
    {
      key: 'documentos',
      label: 'Documentos',
      icon: FileText,
      path: '/documentos'
    },
    {
      key: 'usuarios',
      label: 'Usuarios',
      icon: Users,
      path: '/usuarios'
    },
    {
      key: 'configuracion',
      label: 'Configuración',
      icon: Settings,
      path: '/configuracion'
    }
  ];

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Overlay para móviles */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64 overflow-y-auto`}
        style={{
          background: 'linear-gradient(to bottom, #6B21A8, #9333EA, #A855F7)'
        }}
      >
        {/* Header del Sidebar */}
        <div className="p-6 border-b border-purple-700 border-opacity-30">
          <h1 className="text-2xl font-bold text-white">
            Easy Tech Services
          </h1>
        </div>

        {/* Menú de Navegación */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedMenus[item.key];
              const active = isActive(item.path);

              return (
                <li key={item.key}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => toggleMenu(item.key)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                          active 
                            ? 'bg-purple-700 bg-opacity-50 text-white' 
                            : 'text-white hover:bg-purple-700 hover:bg-opacity-30'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      {isExpanded && (
                        <ul className="mt-2 ml-4 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.path}>
                              <Link
                                to={child.path}
                                className={`block px-4 py-2 rounded-lg transition-colors ${
                                  isActive(child.path)
                                    ? 'bg-purple-700 bg-opacity-50 text-white'
                                    : 'text-purple-100 hover:bg-purple-700 hover:bg-opacity-30'
                                }`}
                                onClick={onToggle}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        active
                          ? 'bg-purple-700 bg-opacity-50 text-white'
                          : 'text-white hover:bg-purple-700 hover:bg-opacity-30'
                      }`}
                      onClick={onToggle}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

