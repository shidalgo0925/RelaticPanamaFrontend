export default function JournalsPortalSection() {

  const handleVerMas = (e) => {
    e.preventDefault();
    window.location.href = "https://miembros.relatic.org/login";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#00BCD4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none text-white">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <strong className="text-white">El Portal Especializado de Relatic Panamá</strong> permite la difusión de revistas académicas y científicas, diseñado para promover el <strong className="text-white">acceso abierto al conocimiento</strong> y la colaboración entre investigadores, docentes y estudiantes. Nuestra plataforma facilita la <strong className="text-white">publicación, indexación y consulta</strong> de artículos científicos en diversas áreas del saber, garantizando estándares de calidad editorial y visibilidad internacional.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Comprometidos con la <strong className="text-white">innovación y el rigor académico</strong>, ofrecemos herramientas avanzadas para la gestión editorial, revisión por pares y acceso a contenido de alto impacto. <strong className="text-white">Relatic Panamá</strong> busca fortalecer la producción científica en la región y contribuir al desarrollo del conocimiento global.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleVerMas}
            className="inline-flex items-center px-8 py-4 bg-white font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ color: '#00BCD4' }}
          >
            <span>Ver más</span>
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
