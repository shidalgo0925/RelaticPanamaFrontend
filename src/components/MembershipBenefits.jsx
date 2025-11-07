import { 
  BookOpen, 
  Database, 
  GraduationCap,
  BadgeCheck,
  Award,
  Users,
  FileBarChart,
  Star,
  Mail,
  BookMarked,
  DollarSign
} from 'lucide-react';

const MembershipBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Revistas Especializadas",
      description: "Acceso completo a nuestra biblioteca de revistas académicas y profesionales.",
      icon: BookOpen,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      id: 2,
      title: "Bases de Datos",
      description: "Explora bases de datos de investigación y recursos académicos especializados.",
      icon: Database,
      iconColor: "text-green-600",
      iconBg: "bg-green-600"
    },
    {
      id: 3,
      title: "Asesoría Profesional",
      description: "Recibe asesoría especializada para publicaciones y proyectos académicos.",
      icon: GraduationCap,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-600"
    },
    {
      id: 4,
      title: "Carné de Miembro",
      description: "Identificación oficial",
      icon: BadgeCheck,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      id: 5,
      title: "Certificados Académicos",
      description: "En actividades educativas",
      icon: Award,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      id: 6,
      title: "Apoyo para Perfil Científico",
      description: "En redes sociales",
      icon: Users,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      id: 7,
      title: "Facilidades de Publicación",
      description: "En portales aliados",
      icon: FileBarChart,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      id: 8,
      title: "Descuentos en Eventos",
      description: "Todas las actividades",
      icon: Star,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      id: 9,
      title: "Cartas de Referencia",
      description: "Academia y profesionales",
      icon: Mail,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      id: 10,
      title: "Asesorías Especializadas",
      description: "Investigaciones y publicaciones",
      icon: BookMarked,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      id: 11,
      title: "Incentivos Económicos",
      description: "Por organizar actividades",
      icon: DollarSign,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Múltiples beneficios de membresía
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
            con RELATIC PANAMÁ
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Accede a recursos exclusivos diseñados para profesionales y académicos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col">
                  <div className={`w-12 h-12 ${benefit.iconBg} rounded-lg flex items-center justify-center mb-4 flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;


