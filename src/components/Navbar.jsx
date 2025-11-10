import { 
  useState, 
  useEffect 
} from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown,
  Newspaper,
  UserPlus,
  Rocket,
  Settings,
  BookOpen, 
  FileText, 
  GraduationCap, 
  ShieldCheck, 
  CalendarCheck, 
  History,
  Globe
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isPostersPage = location.pathname === '/detalles-carteles';
  const isJournalsPage = location.pathname === '/detalles-revistas';
  const isBooksPage = location.pathname === '/detalles-libros';
  const isLearningPage = location.pathname === '/detalles-aprendizaje';
  const isIntellectualPropertyPage = location.pathname === '/detalles-propiedad-intelectual';
  const isFormateoRapidoPage = location.pathname === '/detalles-formateo-rapido' || location.pathname === '/formateo-rapido';
  const isSimplifiedMenu = isPostersPage || isJournalsPage || isBooksPage || isLearningPage || isIntellectualPropertyPage || isFormateoRapidoPage;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId, e) => {
    e?.preventDefault();
    
    // Si no estamos en la página principal, redirigir primero
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Cerrar menú móvil
    setActiveDropdown(null); // Cerrar dropdowns
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  const services = [
    { name: 'Revistas Indexadas', href: 'https://relaticpanama.org/_journals/', icon: Newspaper },
    { name: 'Carteles Digitales', href: '/detalles-carteles', icon: FileText },
    { name: 'Libros Digitales', href: 'https://relaticpanama.org/_books/index.php/edrp/catalog', icon: BookOpen },
    { name: 'Aprendizaje Continuo', href: 'https://relaticpanama.org/_classroom/', icon: GraduationCap },
    { name: 'Propiedad Intelectual', href: 'https://relaticpanama.org/_protect/', icon: ShieldCheck }
  ];

  const activities = [
    { name: 'Próximas Actividades', href: '/actividades/proximas', icon: CalendarCheck },
    { name: 'Actividades Anteriores', href: '/actividades/anteriores', icon: History }
  ];

  const textColor = isScrolled ? 'text-slate-700' : 'text-white';
  const hoverTextColor = isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-200';
  const dropdownBg = isScrolled ? 'bg-white' : 'bg-slate-800';
  const dropdownHoverBg = isScrolled ? 'hover:bg-slate-50' : 'hover:bg-slate-700';
  const dropdownItemTextColor = isScrolled ? 'text-slate-700' : 'text-white';
  const dropdownItemHoverTextColor = isScrolled ? 'group-hover:text-blue-600' : 'group-hover:text-blue-200';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200'
        : 'bg-transparent'
    }`}>
      {/* Elementos decorativos geométricos simplificados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-2 left-4 sm:left-10 w-6 h-6 sm:w-8 sm:h-8 border border-slate-300/30 transform rotate-45 transition-opacity duration-500 ${isScrolled ? 'opacity-20' : 'opacity-40'}`} />
        <div className={`absolute top-4 right-8 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 border border-slate-300/30 rounded-full transition-opacity duration-500 ${isScrolled ? 'opacity-20' : 'opacity-40'}`} />
        <div className={`absolute bottom-2 right-4 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-slate-300/20 transform rotate-12 transition-opacity duration-500 ${isScrolled ? 'opacity-20' : 'opacity-40'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 overflow-visible">
          {/* Logo con diseño institucional limpio */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink-0">
            <a href="#inicio" onClick={(e) => scrollToSection('inicio', e)} className="min-w-0 block flex items-center space-x-2 sm:space-x-3 cursor-pointer">
              <div className="relative flex-shrink-0">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${
                  isScrolled 
                    ? 'bg-blue-600' 
                    : 'bg-slate-700'
                } rounded-lg flex items-center justify-center transition-colors duration-500`}>
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className={`absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                  isScrolled ? 'bg-orange-400' : 'bg-blue-300'
                } rounded-full transition-colors duration-500`} />
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-sm sm:text-base lg:text-xl font-bold transition-colors duration-500 ${textColor}`}>
                  RELATIC PANAMÁ
                </h1>
                <span className={`text-xs sm:text-xs lg:text-xs tracking-wider leading-tight block transition-colors duration-500 ${
                  isScrolled ? 'text-slate-500' : 'text-slate-300'
                }`}>
                  Red Latinoamericana de Investigaciones Cualitativas
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Diseño limpio y profesional */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-3 flex-nowrap overflow-visible">
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection('inicio', e)}
              className={`${textColor} ${hoverTextColor} transition-all duration-300 font-semibold relative group text-xs lg:text-sm xl:text-base 2xl:text-base cursor-pointer whitespace-nowrap`}
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}
            >
              Inicio
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full`} />
            </a>

            {/* Services Dropdown */}
            {!isSimplifiedMenu && (
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Si está en la página principal, hacer scroll, sino mostrar dropdown
                    if (window.location.pathname === '/') {
                      scrollToSection('servicios', e);
                    } else {
                      handleDropdown('services');
                    }
                  }}
                  className={`flex items-center space-x-1 ${textColor} ${hoverTextColor} transition-all duration-300 font-semibold relative group text-xs lg:text-sm xl:text-base 2xl:text-base cursor-pointer whitespace-nowrap`}
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}
                >
                  <span>Servicios</span>
                  <ChevronDown className={`w-3 h-3 2xl:w-4 2xl:h-4 transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full`} />
                </button>

                {/* Services Dropdown Menu */}
                {activeDropdown === 'services' && (
                  <div className={`absolute top-full left-0 mt-2 w-56 xl:w-64 ${dropdownBg} border border-slate-200 rounded-lg overflow-hidden z-50 shadow-lg`}>
                    <div className="p-2">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <a
                            key={service.name}
                            href={service.href}
                            className={`flex items-center space-x-3 p-2 xl:p-3 rounded-md ${dropdownHoverBg} transition-all duration-300 group`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className={`w-7 h-7 xl:w-8 xl:h-8 ${
                              isScrolled ? 'bg-blue-50' : 'bg-slate-700'
                            } rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                              <IconComponent className={`w-3 h-3 xl:w-4 xl:h-4 ${
                                isScrolled ? 'text-blue-600' : 'text-blue-200'
                              }`} />
                            </div>
                            <span className={`${dropdownItemTextColor} ${dropdownItemHoverTextColor} transition-colors duration-300 font-medium text-sm xl:text-base`}>
                              {service.name}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!isSimplifiedMenu && (
              <a 
                href="#nosotros" 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    scrollToSection('nosotros', e);
                  }
                }}
                className={`${textColor} ${hoverTextColor} transition-all duration-300 font-semibold relative group text-xs lg:text-sm xl:text-base 2xl:text-base cursor-pointer whitespace-nowrap`}
                style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}
              >
                Nosotros
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full`} />
              </a>
            )}

            {/* Activities Dropdown */}
            {!isSimplifiedMenu && (
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Si está en la página principal, hacer scroll, sino mostrar dropdown
                    if (window.location.pathname === '/') {
                      scrollToSection('actividades', e);
                    } else {
                      handleDropdown('activities');
                    }
                  }}
                  className={`flex items-center space-x-1 ${textColor} ${hoverTextColor} transition-all duration-300 font-semibold relative group text-xs lg:text-sm xl:text-base 2xl:text-base cursor-pointer whitespace-nowrap`}
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}
                >
                  <span>Actividades</span>
                  <ChevronDown className={`w-3 h-3 2xl:w-4 2xl:h-4 transition-transform duration-300 ${
                    activeDropdown === 'activities' ? 'rotate-180' : ''
                  }`} />
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full`} />
                </button>

                {/* Activities Dropdown Menu */}
                {activeDropdown === 'activities' && (
                  <div className={`absolute top-full left-0 mt-2 w-56 xl:w-64 ${dropdownBg} border border-slate-200 rounded-lg overflow-hidden z-50 shadow-lg`}>
                    <div className="p-2">
                      {activities.map((activity) => {
                        const IconComponent = activity.icon;
                        return (
                          <a
                            key={activity.name}
                            href={activity.href}
                            className={`flex items-center space-x-3 p-2 xl:p-3 rounded-md ${dropdownHoverBg} transition-all duration-300 group`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className={`w-7 h-7 xl:w-8 xl:h-8 ${
                              isScrolled ? 'bg-blue-50' : 'bg-slate-700'
                            } rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                              <IconComponent className={`w-3 h-3 xl:w-4 xl:h-4 ${
                                isScrolled ? 'text-blue-600' : 'text-blue-200'
                              }`} />
                            </div>
                            <span className={`${dropdownItemTextColor} ${dropdownItemHoverTextColor} transition-colors duration-300 font-medium text-sm xl:text-base`}>
                              {activity.name}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!isSimplifiedMenu && (
              <a 
                href="https://relaticpanama.org/_blog/" 
                className={`${textColor} ${hoverTextColor} transition-all duration-300 font-semibold relative group text-xs lg:text-sm xl:text-base 2xl:text-base whitespace-nowrap`}
                style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}
              >
                Blog
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full`} />
              </a>
            )}

            {/* Botón de Administración con icono de engranaje */}
            {!isSimplifiedMenu && (
              <a
                href="/panel-administracion"
                className={`p-2 ${textColor} ${hoverTextColor} transition-all duration-300 rounded-lg hover:bg-slate-100/50`}
                title="Administración"
              >
                <Settings className="w-5 h-5" />
              </a>
            )}

            {/* Botón de Registrarse */}
            <a
              href="https://miembros.relatic.org/register"
              className="px-2 lg:px-3 xl:px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-300 text-xs lg:text-sm xl:text-base whitespace-nowrap"
            >
              Registrarse
            </a>

            {/* Botón de Iniciar Sesión */}
            <a
              href="https://miembros.relatic.org/login"
              className="px-2 lg:px-3 xl:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300 text-xs lg:text-sm xl:text-base whitespace-nowrap"
            >
              Iniciar Sesión
            </a>
          </div>

          {/* Tablet Navigation (lg to xl) - Ahora integrado en Desktop */}
          <div className="hidden">
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection('inicio', e)}
              className={`${textColor} ${hoverTextColor} transition-colors duration-300 font-medium text-sm cursor-pointer`}
            >
              Inicio
            </a>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.location.pathname === '/') {
                    scrollToSection('servicios', e);
                  } else {
                    handleDropdown('services');
                  }
                }}
                className={`flex items-center space-x-1 ${textColor} ${hoverTextColor} transition-colors duration-300 font-medium text-sm cursor-pointer`}
              >
                <span>Servicios</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>

              {activeDropdown === 'services' && (
                <div className={`absolute top-full right-0 mt-2 w-52 ${dropdownBg} border border-slate-200 rounded-lg overflow-hidden z-50 shadow-lg`}>
                  <div className="p-2">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <a
                          key={service.name}
                          href={service.href}
                          className={`flex items-center space-x-2 p-2 rounded-md ${dropdownHoverBg} transition-all duration-300 group`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <IconComponent className={`w-3 h-3 ${
                            isScrolled ? 'text-blue-600' : 'text-blue-200'
                          } flex-shrink-0`} />
                          <span className={`${dropdownItemTextColor} ${dropdownItemHoverTextColor} transition-colors duration-300 font-medium text-sm`}>
                            {service.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#nosotros" 
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  scrollToSection('nosotros', e);
                }
              }}
              className={`${textColor} ${hoverTextColor} transition-colors duration-300 font-medium text-sm cursor-pointer`}
            >
              Nosotros
            </a>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.location.pathname === '/') {
                    scrollToSection('actividades', e);
                  } else {
                    handleDropdown('activities');
                  }
                }}
                className={`flex items-center space-x-1 ${textColor} ${hoverTextColor} transition-colors duration-300 font-medium text-sm cursor-pointer`}
              >
                <span>Actividades</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                  activeDropdown === 'activities' ? 'rotate-180' : ''
                }`} />
              </button>

              {activeDropdown === 'activities' && (
                <div className={`absolute top-full right-0 mt-2 w-52 ${dropdownBg} border border-slate-200 rounded-lg overflow-hidden z-50 shadow-lg`}>
                  <div className="p-2">
                    {activities.map((activity) => {
                      const IconComponent = activity.icon;
                      return (
                        <a
                          key={activity.name}
                          href={activity.href}
                          className={`flex items-center space-x-2 p-2 rounded-md ${dropdownHoverBg} transition-all duration-300 group`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <IconComponent className={`w-3 h-3 ${
                            isScrolled ? 'text-blue-600' : 'text-blue-200'
                          } flex-shrink-0`} />
                          <span className={`${dropdownItemTextColor} ${dropdownItemHoverTextColor} transition-colors duration-300 font-medium text-sm`}>
                            {activity.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a href="https://relaticpanama.org/_blog/" className={`${textColor} ${hoverTextColor} transition-colors duration-300 font-medium text-sm`}>
              Blog
            </a>
            
            {/* Botón de Administración con icono de engranaje para Tablet */}
            <a
              href="/panel-administracion"
              className={`p-2 ${textColor} ${hoverTextColor} transition-all duration-300 rounded-lg hover:bg-slate-100/50`}
              title="Administración"
            >
              <Settings className="w-5 h-5" />
            </a>

            {/* Botón de Registrarse para Tablet */}
            <a
              href="https://miembros.relatic.org/register"
              className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              Registrarse
            </a>

            {/* Botón de Iniciar Sesión para Tablet */}
            <a
              href="https://miembros.relatic.org/login"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              Iniciar Sesión
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobile}
              className={`${textColor} ${hoverTextColor} transition-colors duration-300 p-2`}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 pb-4 sm:pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`${dropdownBg} border border-slate-200 rounded-lg mt-4 shadow-lg ${
            // Ajuste para móviles en horizontal: limita la altura y permite el scroll
            'h-auto max-h-[80vh] overflow-y-auto'
          }`}>
            <div className="p-3 sm:p-4 space-y-2">
              <a 
                href="#inicio" 
                onClick={(e) => {
                  scrollToSection('inicio', e);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 sm:px-4 sm:py-3 ${dropdownItemTextColor} ${dropdownHoverBg} rounded-md transition-all duration-300 font-medium text-sm sm:text-base cursor-pointer`}
              >
                Inicio
              </a>

              {/* Mobile Services */}
              {!isSimplifiedMenu && (
                <div className="space-y-1 sm:space-y-2">
                  <div className={`px-3 py-1 sm:px-4 sm:py-2 font-semibold text-xs sm:text-sm tracking-wider uppercase ${
                    isScrolled ? 'text-blue-600' : 'text-blue-200'
                  }`}>
                    Servicios
                  </div>
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <a
                        key={service.name}
                        href={service.href}
                        className={`flex items-center space-x-3 px-3 py-2 sm:px-4 sm:py-3 ${dropdownItemTextColor} ${dropdownHoverBg} rounded-md transition-all duration-300 text-sm sm:text-base`}
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className={`w-4 h-4 ${
                          isScrolled ? 'text-blue-600' : 'text-blue-200'
                        } flex-shrink-0`} />
                        <span>{service.name}</span>
                      </a>
                    );
                  })}
                </div>
              )}

              {!isSimplifiedMenu && (
                <a 
                  href="#nosotros" 
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      scrollToSection('nosotros', e);
                    }
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 sm:px-4 sm:py-3 ${dropdownItemTextColor} ${dropdownHoverBg} rounded-md transition-all duration-300 font-medium text-sm sm:text-base cursor-pointer`}
                >
                  Nosotros
                </a>
              )}

              {/* Mobile Activities */}
              {!isSimplifiedMenu && (
                <div className="space-y-1 sm:space-y-2">
                  <div className={`px-3 py-1 sm:px-4 sm:py-2 font-semibold text-xs sm:text-sm tracking-wider uppercase ${
                    isScrolled ? 'text-blue-600' : 'text-blue-200'
                  }`}>
                    Actividades
                  </div>
                  {activities.map((activity) => {
                    const IconComponent = activity.icon;
                    return (
                      <a
                        key={activity.name}
                        href={activity.href}
                        className={`flex items-center space-x-3 px-3 py-2 sm:px-4 sm:py-3 ${dropdownItemTextColor} ${dropdownHoverBg} rounded-md transition-all duration-300 text-sm sm:text-base`}
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className={`w-4 h-4 ${
                          isScrolled ? 'text-blue-600' : 'text-blue-200'
                        } flex-shrink-0`} />
                        <span>{activity.name}</span>
                      </a>
                    );
                  })}
                </div>
              )}

              {!isSimplifiedMenu && (
                <a 
                  href="https://relaticpanama.org/_blog/" 
                  className={`block px-3 py-2 sm:px-4 sm:py-3 ${dropdownItemTextColor} ${dropdownHoverBg} rounded-md transition-all duration-300 font-medium text-sm sm:text-base`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </a>
              )}

              {/* Botón de Administración con icono de engranaje Móvil */}
              {!isSimplifiedMenu && (
                <a
                  href="/panel-administracion"
                  className={`flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 ${dropdownItemTextColor} ${dropdownHoverBg} rounded-md transition-all duration-300 font-medium text-sm sm:text-base`}
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  <span>Administración</span>
                </a>
              )}

              {/* Botón de Registrarse Móvil */}
              <a
                href="https://miembros.relatic.org/register"
                className="block w-full px-4 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-semibold text-center transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Registrarse
              </a>

              {/* Botón de Iniciar Sesión Móvil */}
              <a
                href="https://miembros.relatic.org/login"
                className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-center transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Iniciar Sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;