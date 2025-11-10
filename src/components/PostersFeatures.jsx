import { Palette, Eye, Globe } from 'lucide-react';

export default function PostersFeatures() {
  const features = [
    {
      id: 1,
      icon: Palette,
      title: "Diseño Atractivo",
      description: "Moderno y visualmente impactante"
    },
    {
      id: 2,
      icon: Eye,
      title: "Fácil Visualización",
      description: "Accesible en línea desde cualquier dispositivo"
    },
    {
      id: 3,
      icon: Globe,
      title: "Difusión Académica",
      description: "Exposición en eventos científicos"
    }
  ];

  const handleVerMas = (e) => {
    e.preventDefault();
    window.location.href = "https://miembros.relatic.org/dashboard";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleVerMas}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Ver más</span>
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

