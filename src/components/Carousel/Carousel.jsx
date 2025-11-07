import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import { slides } from './carouselData';
import { renderStyledTitle } from './carouselUtils.jsx';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set([0])); // Pre-cargar primera imagen

  // Pre-cargar imágenes de forma progresiva
  useEffect(() => {
    const preloadImages = () => {
      slides.forEach((slide, index) => {
        if (index === 0) return; // Ya está cargada
        const img = new Image();
        img.src = slide.bgImage;
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]));
        };
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Overlay superior simplificado */}
      <div className="absolute top-0 left-0 w-full h-32 bg-slate-900/10 z-10 pointer-events-none" />

      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide && hasMounted;

          return (
            <div
              key={slide.id}
              className={`
                absolute inset-0 transition-opacity duration-1000 ease-in-out
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
              `}
            >
              {/* Imagen de fondo con lazy loading */}
              <div 
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-slate-800 animate-pulse" />
              )}
              
              {/* Overlay más oscuro para mejor legibilidad del texto amarillo */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/80" />
              
              {/* Elementos decorativos geométricos sutiles */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white transform rotate-45" />
                <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full" />
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-white transform rotate-12" />
                <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white transform -rotate-45" />
              </div>

              <div className="relative z-20 h-full flex items-center justify-center px-8 mobile-landscape-container">
                <div className="text-center max-w-4xl mobile-landscape-content carousel-slide-content">
                 {/* Título principal con estilo de tipografía */}
                  <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 delay-500 mobile-landscape-title
                    ${isActive ? 'translate-y-0 opacity-100 animate-zoom-in' : 'translate-y-8 opacity-0'}`}
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {renderStyledTitle(slide.title)}
                  </h1>

                  {/* Subtítulo */}
                  <h2 className={`text-xl md:text-2xl font-normal mb-6 text-yellow-300 transition-all duration-1000 delay-700 mobile-landscape-subtitle
                    ${isActive ? 'translate-y-0 opacity-90 animate-zoom-in' : 'translate-y-8 opacity-0'}`}
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6)',
                      fontWeight: '600'
                    }}>
                    {slide.subtitle}
                  </h2>

                  {/* Descripción */}
                  <p className={`text-lg md:text-xl text-yellow-300 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-900 mobile-landscape-description
                    ${isActive ? 'translate-y-0 opacity-80 animate-zoom-in' : 'translate-y-8 opacity-0'}`}
                    style={{
                      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.6)',
                      fontWeight: '500'
                    }}>
                    {slide.description}
                  </p>

                  {/* Lista de características */}
                  <ul className={`mt-4 space-y-2 text-left text-base md:text-lg max-w-xl mx-auto text-white/85 transition-all duration-1000 delay-[1050ms] mobile-landscape-bullets ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
        })}
      </div>

      {/* Botones de navegación con diseño institucional */}
      <button 
        onClick={prevSlide} 
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-lg bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110 mobile-landscape-nav-btn"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide} 
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-lg bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110 mobile-landscape-nav-btn"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores de slides institucionales */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3 mobile-landscape-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-600 scale-125' 
                : 'bg-slate-400 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Barra de progreso institucional */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-300 z-30">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-linear" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} 
        />
      </div>
    </div>
  );
};

export default Carousel;

