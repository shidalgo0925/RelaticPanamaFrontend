export default function PostersPortalSection() {

  const handleVerMas = (e) => {
    e.preventDefault();
    window.location.href = "https://miembros.relatic.org/dashboard";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#00BCD4' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              PORTAL DE CARTELES DIGITALES CIENTIFICOS
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Este portal está diseñado para proporcionar un espacio accesible y organizado donde investigadores, académicos y estudiantes puedan presentar sus trabajos en formato póster, facilitando así la comunicación y el intercambio de conocimiento científico de manera eficiente y atractiva. Al igual que en las revistas científicas, la calidad, claridad y rigurosidad del contenido son aspectos prioritarios para asegurar la relevancia y el impacto de cada cartel. Los carteles digitales científicos representan una herramienta esencial para la difusión rápida y visual de resultados de investigación en múltiples disciplinas.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Este espacio pretende fomentar la colaboración interdisciplinaria y la innovación mediante la creación de un repositorio dinámico y actualizado de carteles digitales científicos, que permita también la interacción mediante comentarios y retroalimentación constructiva. Disponer de esta plataforma contribuye a ampliar la visibilidad de los estudios, fortalecer las redes académicas y promover una cultura de divulgación científica accesible y democrática. En línea con las mejores prácticas editoriales, invitamos a los autores a respetar criterios éticos, metodológicos y formales para garantizar la excelencia científica en cada publicación.
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

