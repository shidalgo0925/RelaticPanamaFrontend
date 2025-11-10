export default function FormateoRapidoPortalSection() {

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
              HERRAMIENTAS DE APOYO PARA INVESTIGACIÓN
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Este portal en línea de asesoría en investigación y redacción científica está diseñado para apoyar a estudiantes, docentes e investigadores en todas las etapas del proceso científico, desde la formulación de preguntas de investigación hasta la preparación y publicación de manuscritos académicos. Ofrece acceso a expertos especializados que brindan orientación personalizada sobre metodología, diseño de estudios, análisis de datos y mejores prácticas de redacción, contribuyendo a elevar la calidad y el rigor científico de los trabajos. La plataforma promueve un aprendizaje colaborativo y actualizado, alineado con los estándares internacionales y las normativas de las principales revistas científicas.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Además, este espacio virtual facilita recursos didácticos, talleres interactivos y herramientas prácticas para potenciar las habilidades comunicativas y editoriales de sus usuarios. Su estructura flexible y accesible permite acompañar a investigadores en contextos diversos, desde la investigación básica hasta la aplicada, fortaleciendo la visibilidad y el impacto de sus producciones científicas. De esta manera, el portal fomenta la excelencia académica y la ética en la investigación, consolidándose como un referente de apoyo en la comunidad científica.
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

