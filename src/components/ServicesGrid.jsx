import { Newspaper, FileText, BookOpen, GraduationCap, ShieldCheck, PenTool } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Revistas Indexadas",
      description: "Publicaciones científicas de calidad",
      icon: Newspaper,
      href: "/detalles-revistas",
      featured: false
    },
    {
      id: 2,
      title: "Carteles Digitales",
      description: "Presenta tus trabajos en formato digital",
      icon: FileText,
      href: "/detalles-carteles",
      featured: false
    },
    {
      id: 3,
      title: "Libros Digitales",
      description: "Publica y difunde tus libros",
      icon: BookOpen,
      href: "/detalles-libros",
      featured: false
    },
    {
      id: 4,
      title: "Aprendizaje Continuo",
      description: "Formación y actualización constante",
      icon: GraduationCap,
      href: "/detalles-aprendizaje",
      featured: false
    },
    {
      id: 5,
      title: "Propiedad Intelectual",
      description: "Protege tus derechos de autor",
      icon: ShieldCheck,
      href: "/detalles-propiedad-intelectual",
      featured: false
    },
    {
      id: 6,
      title: "Formateo Rápido",
      description: "¿Quieres darle formato de forma rápida a tu manuscrito?",
      icon: PenTool,
      href: "/guia-paso-a-paso",
      featured: true
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
          Servicios Gratuitos
        </h2>
        <p className="text-xl md:text-2xl font-bold text-red-600 text-center mb-12">
          ¡Con solo registrarte!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  service.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Destacado
                  </div>
                )}
                
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  {service.featured ? (
                    <a
                      href={service.href}
                      className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-300"
                    >
                      Comenzar ahora →
                    </a>
                  ) : (
                    <a
                      href={service.href}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group"
                    >
                      Ver más
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

