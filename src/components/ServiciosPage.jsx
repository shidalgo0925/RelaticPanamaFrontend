import {
  Newspaper,
  FileText,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  PenTool,
  LayoutDashboard,
  BookMarked,
  Users,
  Star,
  CheckCircle,
} from 'lucide-react';
const REGISTER_URL = 'https://miembros.relatic.org/register';
const services = [
  {
    id: 1,
    title: 'Revistas Indexadas',
    description: 'Publicaciones científicas de calidad. Acceso a nuestra biblioteca de revistas académicas y profesionales.',
    icon: Newspaper,
  },
  {
    id: 2,
    title: 'Carteles Digitales',
    description: 'Presenta tus trabajos en formato digital. Herramientas para difundir tu investigación de forma visual.',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Libros Digitales',
    description: 'Publica y difunde tus libros. Catálogo y recursos para autores e investigadores.',
    icon: BookOpen,
  },
  {
    id: 4,
    title: 'Aprendizaje Continuo',
    description: 'Formación y actualización constante. Cursos, webinars y recursos para tu desarrollo profesional.',
    icon: GraduationCap,
  },
  {
    id: 5,
    title: 'Propiedad Intelectual',
    description: 'Protege tus derechos de autor. Guía y asesoría para registro y protección de tu trabajo.',
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: 'Herramientas de apoyo para investigación',
    description: 'Apoyo en investigación y redacción científica. Formateo y recursos para publicar con estándares académicos.',
    icon: PenTool,
  },
];

const benefitsFromMembership = [
  {
    icon: BookMarked,
    title: 'Revistas especializadas',
    text: 'Acceso completo a nuestra biblioteca de revistas académicas y profesionales.',
  },
  {
    icon: BookOpen,
    title: 'Bases de datos',
    text: 'Explora bases de datos de investigación y recursos académicos especializados.',
  },
  {
    icon: Star,
    title: 'Asesoría profesional',
    text: 'Recibe asesoría especializada para publicaciones y proyectos académicos.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard personalizado',
    text: 'Panel de control con tus estadísticas, progreso y accesos rápidos a todos los servicios.',
  },
  {
    icon: BookMarked,
    title: 'Contenido exclusivo',
    text: 'Revistas, bases de datos, cursos, libros digitales y recursos según tu tipo de membresía.',
  },
  {
    icon: Users,
    title: 'Comunidad activa',
    text: 'Participa en foros, grupos de discusión, eventos y conecta con investigadores de toda Latinoamérica.',
  },
];

const membershipTypesBenefits = [
  { name: 'Básico', items: ['Boletines RELATIC', 'Recursos básicos', 'Invitaciones a eventos abiertos'] },
  { name: 'Pro', items: ['Todo lo de Básico', 'Revistas y bases de datos', 'Soporte por email prioritario', 'Certificaciones en eventos'] },
  { name: 'Premium', items: ['Todo lo de Pro', 'Asesoría de publicación', 'Soporte prioritario', 'Webinars exclusivos', 'Red de contactos académicos', 'Descuentos en conferencias'] },
  { name: 'DeLuxe', items: ['Todo lo de Premium', 'Acceso completo a O365', 'Consultoría estratégica', 'Soporte dedicado', 'API de integración', 'Capacitaciones personalizadas', 'Eventos exclusivos VIP'] },
];

const ServiciosPage = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
        {/* Intro */}
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Nuestros servicios
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-2">
            Todos estos servicios están disponibles en nuestro portal. Para acceder a ellos, solo tienes que registrarte.
          </p>
          <p className="text-xl md:text-2xl font-bold text-red-600">
            El registro es completamente Sin costo.
          </p>
        </section>

        {/* Servicios */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Servicios disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow">
                    {service.description}
                  </p>
                  <a
                    href={REGISTER_URL}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Registrarse para acceder
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Beneficios de la membresía */}
        <section className="py-10 bg-gradient-to-b from-slate-50 to-white rounded-2xl px-6 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">
            Beneficios de la membresía
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-xl mx-auto">
            Accede a recursos exclusivos diseñados para profesionales y académicos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {benefitsFromMembership.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-xl p-4 shadow-sm border border-slate-100"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.text}</p>
                </div>
              );
            })}
          </div>

          {/* Tipos de membresía (solo beneficios, sin precios) */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
              Según tu tipo de membresía podrás acceder a:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {membershipTypesBenefits.map((type) => (
                <div
                  key={type.name}
                  className="bg-white rounded-xl p-4 shadow-sm border border-slate-100"
                >
                  <h4 className="font-bold text-slate-800 mb-3 text-center">
                    {type.name}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {type.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA registro */}
        <section className="text-center py-10 bg-blue-600 rounded-2xl px-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Regístrate gratis y accede a todos los servicios
          </h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Crea tu cuenta en el portal de miembros. Sin costo. Acceso según tu tipo de membresía.
          </p>
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Crear cuenta gratis
          </a>
        </section>
    </div>
  );
};

export default ServiciosPage;
