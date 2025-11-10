export default function LearningPortalSection() {

  const handleVerMas = (e) => {
    e.preventDefault();
    window.location.href = "https://miembros.relatic.org/login";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#00BCD4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              PORTAL DE FORMACIÓN CONTINUA
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Este portal de formación continua está diseñado para ofrecer a profesionales, académicos y estudiantes una amplia variedad de programas y cursos actualizados, orientados al desarrollo de competencias especializadas y al perfeccionamiento permanente. Su estructura y contenidos responden a los más altos estándares de las instituciones de educación superior, asegurando calidad académica, pertinencia y flexibilidad para facilitar el acceso al aprendizaje a lo largo de toda la vida profesional. El portal promueve la integración de conocimientos teóricos y prácticos, apoyados en metodologías innovadoras y recursos digitales interactivos.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Con una oferta educativa diversificada que incluye talleres, diplomados, certificaciones y actividades formativas en modalidad virtual, semipresencial y presencial, esta plataforma fomenta la mejora continua y la actualización profesional en contextos cambiantes. A través de herramientas de seguimiento, evaluación y retroalimentación, el portal garantiza la eficacia del aprendizaje, permitiendo a los usuarios certificar sus avances y fortalecer sus perfiles en el ámbito académico y laboral. La formación continua se presenta, así como un eje estratégico para la innovación, la competitividad y el crecimiento profesional sostenido.
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

