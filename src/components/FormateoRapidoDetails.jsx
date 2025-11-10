import { CheckCircle } from 'lucide-react';
import { renderStyledTitle } from './Carousel/carouselUtils.jsx';

export default function FormateoRapidoDetails() {
  // Datos de la slide de Herramientas de Apoyo para Investigación
  const slide = {
    id: 1,
    title: "HERRAMIENTAS DE APOYO PARA INVESTIGACIÓN",
    subtitle: "Apoyo en investigación y redacción científica",
    description: "Accede a asesoría especializada y recursos para todas las etapas del proceso científico, desde la formulación de preguntas hasta la publicación de manuscritos académicos.",
    bgImage: "https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg",
    bullets: ["Asesoría especializada", "Recursos didácticos", "Herramientas prácticas"]
  };

  return (
    <div className="relative w-full h-[68.75vh] overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${slide.bgImage})` }}
      />
      
      {/* Overlay oscuro para legibilidad (igual que el carrusel) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/80" />
      
      {/* Elementos decorativos geométricos sutiles (igual que el carrusel) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white transform rotate-45" />
        <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full" />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white transform rotate-12" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white transform -rotate-45" />
      </div>

      {/* Contenido - igual que el carrusel */}
      <div className="relative z-20 h-full flex items-center justify-center px-8 pt-16">
        <div className="text-center max-w-4xl">
          {/* Título principal */}
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {renderStyledTitle(slide.title)}
          </h1>

          {/* Subtítulo */}
          <h2 
            className="text-xl md:text-2xl font-normal mb-6 text-yellow-300"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6)',
              fontWeight: '600'
            }}
          >
            {slide.subtitle}
          </h2>

          {/* Descripción */}
          <p 
            className="text-lg md:text-xl text-yellow-300 max-w-2xl mx-auto leading-relaxed mb-6"
            style={{
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6)',
              fontWeight: '500'
            }}
          >
            {slide.description}
          </p>

          {/* Lista de características */}
          <ul className="mt-4 space-y-2 text-left text-base md:text-lg max-w-xl mx-auto text-white/85">
            {slide.bullets.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-white/90" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

