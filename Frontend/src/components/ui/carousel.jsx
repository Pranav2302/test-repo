import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function Carousel({ slides, onSlideClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    // Auto resize handler
    const handleResize = () => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const calculatePosition = (index) => {
    // Calculate the position based on the current index
    const totalSlides = slides.length;
    const midPoint = Math.floor(totalSlides / 2);
    let distance = index - currentIndex;
    
    // Handle wrapping around for circular effect
    if (distance > midPoint) distance -= totalSlides;
    if (distance < -midPoint) distance += totalSlides;
    
    return distance;
  };

  const calculateScale = (distance) => {
    // Center card is larger, others get progressively smaller
    if (distance === 0) return 1; // Center card
    return Math.max(0.7, 1 - Math.abs(distance) * 0.15); // Scale down based on distance
  };

  const calculateOpacity = (distance) => {
    // Center card is fully visible, others get darker
    if (distance === 0) return 1; // Center card fully visible
    return Math.max(0.5, 1 - Math.abs(distance) * 0.3); // Darken based on distance
  };

  const calculateZIndex = (distance) => {
    // Center card has highest z-index
    return 20 - Math.abs(distance);
  };

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Main Carousel */}
      <motion.div 
        ref={carousel} 
        className="carousel"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px', // Increased height for bigger cards
          position: 'relative'
        }}
      >
        {/* Radial gradient overlay that darkens the edges */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)'
          }}
        />
        
        {slides.map((slide, index) => {
          const position = calculatePosition(index);
          const scale = calculateScale(position);
          const opacity = calculateOpacity(position);
          const zIndex = calculateZIndex(position);
          
          // Determine horizontal position
          const x = position * 320; // Increased spacing between cards
          
          return (
            <motion.div
              key={index}
              className="carousel-item relative cursor-pointer"
              style={{
                position: 'absolute',
                width: '380px', // Increased width
                height: '450px', // Increased height
                borderRadius: '16px',
                overflow: 'hidden',
                zIndex,
                boxShadow: position === 0 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease'
              }}
              initial={{ x, scale, opacity }}
              animate={{ 
                x, 
                scale,
                opacity,
                transition: { type: 'spring', stiffness: 300, damping: 30 }
              }}
              onClick={() => {
                setCurrentIndex(index);
                onSlideClick(slide.category);
              }}
              whileHover={{ scale: scale * 1.05 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay for non-active slides */}
                {position !== 0 && (
                  <div className="absolute inset-0 bg-black opacity-50" />
                )}
              </div>
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSlideClick(slide.category);
                  }}
                >
                  {slide.button}
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-30"
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-30"
        onClick={() => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}