export default function BooksPortalSection() {

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
              PORTAL DE LIBROS DIGITALES CIENTÍFICOS
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Este portal de libros digitales científicos está concebido como una plataforma integral que ofrece acceso abierto y organizado a obras académicas de alta calidad, abarcando diversas disciplinas y enfoques metodológicos. Su finalidad es facilitar la difusión de conocimientos especializados, promoviendo la actualización constante e interdisciplinaria de investigadores, docentes, estudiantes y profesionales. Al igual que en las publicaciones científicas tradicionales, cada libro digital es evaluado bajo estándares rigurosos de calidad, precisión y ética, garantizando su relevancia y contribución al avance del saber.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Además, este espacio impulsa la colaboración y el intercambio académico mediante herramientas interactivas que permiten la consulta, descarga legal y citación de los libros en formatos accesibles y compatibles con diferentes dispositivos. La plataforma fomenta una comunidad científica conectada, donde los autores pueden alcanzar mayor visibilidad y reconocimiento, mientras los lectores acceden a recursos confiables y actualizados para el desarrollo de sus proyectos y formaciones. La integridad editorial y el compromiso con la excelencia científica orientan cada etapa del proceso editorial en este portal.
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

