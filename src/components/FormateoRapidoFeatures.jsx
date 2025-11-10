import { Upload, Zap, Download } from 'lucide-react';

export default function FormateoRapidoFeatures() {
  const steps = [
    {
      id: 1,
      number: "1",
      icon: Upload,
      title: "Sube tus archivos",
      description: "Carga las instrucciones de la revista y tu manuscrito en formato Word"
    },
    {
      id: 2,
      number: "2",
      icon: Zap,
      title: "Procesamiento automático",
      description: "El sistema analiza y aplica el formato correcto a tu documento"
    },
    {
      id: 3,
      number: "3",
      icon: Download,
      title: "Descarga y envía",
      description: "Obtén tu manuscrito formateado listo para enviar a la revista"
    }
  ];

  const handleVerMas = (e) => {
    e.preventDefault();
    window.location.href = "https://miembros.relatic.org/login";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm">
                    {step.description}
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



