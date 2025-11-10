export default function IntellectualPropertyPortalSection() {

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
              PROPIEDAD INTELECTUAL
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Este portal de asesoría profesional en línea está diseñado para ofrecer a individuos y empresas un acceso ágil, confiable y seguro a servicios especializados en diversas áreas del derecho de autor y otros. Mediante una plataforma intuitiva y confidencial, se facilita la consulta con expertos legales calificados que brindan orientación, análisis y soluciones adaptadas a las necesidades concretas de cada usuario. La plataforma garantiza el cumplimiento de las normativas vigentes y la protección de datos, promoviendo una práctica ética y responsable en todos los procesos de asesoría.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Además, este espacio virtual integra recursos actualizados, herramientas interactivas y contenidos formativos que amplían el conocimiento jurídico y empresarial, contribuyendo a la toma de decisiones informadas. Con un enfoque en la accesibilidad y la calidad, el portal fortalece la confianza entre asesor y cliente, facilitando un acompañamiento profesional continuo que optimiza la gestión legal y el cumplimiento regulatorio en contextos dinámicos y complejos.
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

