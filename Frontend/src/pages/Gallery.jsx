import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Add this import

// Import icons for the animated gallery
const IconArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Custom card hover effect component
const HoverCardEffect = ({ children, className = "" }) => {
  return (
    <div className={`group relative w-full overflow-hidden rounded-xl bg-white shadow-card ${className}`}>
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-blue-100 to-blue-50 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
      <div className="relative p-4">
        {children}
      </div>
    </div>
  );
};

// Animated Testimonials Component adapted from aceternity
const AnimatedPhotoGallery = ({ images, autoplay = false }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 font-sans antialiased">
      <h2 className="font-display text-3xl font-bold text-spice-primary text-center mb-8">{t('gallery.featured.title')}</h2>
      <div className="relative grid grid-cols-1 gap-6 md:gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 md:h-96 w-full">
            <AnimatePresence>
              {images.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : images.length + 2 - index,
                    y: isActive(index) ? [0, -20, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={image.src}
                    alt={t(`gallery.images.${image.id}.alt`) || image.alt}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-spice-primary">
              {t(`gallery.images.${images[active].id}.title`) || images[active].title}
            </h3>
            <p className="text-sm text-spice-text">
              {t(`gallery.images.${images[active].id}.category`) || images[active].category}
            </p>
            <motion.p className="mt-8 text-lg text-spice-text">
              {(t(`gallery.images.${images[active].id}.description`) || images[active].description).split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
              aria-label={t('gallery.controls.previous')}
            >
              <IconArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
              aria-label={t('gallery.controls.next')}
            >
              <IconArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const { t } = useTranslation();
  
  // Define gallery categories
  const categories = [
    { id: "All", label: t('gallery.categories.all') },
    { id: "Products", label: t('gallery.categories.products') },
    { id: "Facilities", label: t('gallery.categories.facilities') },
    { id: "Events", label: t('gallery.categories.events') },
    { id: "Team", label: t('gallery.categories.team') }
  ];
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sample gallery images (using the existing images)
  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106327/Business_App/s1jlgk648cotphznkfww.jpg",
      alt: "Sugar Production",
      title: "Premium Sugar Products",
      description: "Our refined sugar manufacturing process ensures the highest quality product with optimal taste and purity. Each batch is carefully processed using modern technology while maintaining traditional quality standards.",
      category: "Products",
      featured: true
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106313/Business_App/qtpnhox07urfme1torrk.jpg",
      alt: "Jaggery",
      title: "Organic Jaggery",
      description: "Traditional jaggery production methods combined with organic farming practices create a nutrient-rich natural sweetener that preserves all the essential minerals and goodness of sugarcane.",
      category: "Products"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106313/Business_App/yxndry7q59y8khq9ekgp.jpg",
      alt: "Facility",
      title: "Processing Facility",
      description: "Our state-of-the-art processing facility combines modern technology with traditional wisdom to create products that meet international quality standards while maintaining authenticity and nutritional value.",
      category: "Facilities",
      tall: true
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/fl_preserve_transparency/v1744104890/spices_x73w3x.jpg",
      alt: "Spices",
      title: "Premium Spice Collection",
      description: "Authentic Indian spices sourced directly from farms across the country's most renowned growing regions. Each spice is carefully selected, processed and packaged to preserve its aroma and flavor.",
      category: "Products"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106328/Business_App/c1iuwp2tvucc3f4epvxj.jpg",
      alt: "Rice",
      title: "Basmati Rice",
      description: "Premium long-grain basmati rice grown in the foothills of the Himalayas, known for its distinctive aroma and taste. Our basmati rice undergoes stringent quality checks before reaching global markets.",
      category: "Products"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3",
      alt: "Team",
      title: "Our Team",
      description: "The dedicated people behind Briskwell International work tirelessly to ensure quality at every step of the supply chain. Our team combines decades of experience with innovative approaches to deliver excellence.",
      category: "Team"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3",
      alt: "Farming",
      title: "Sustainable Farming",
      description: "Working with local farmers for sustainable agriculture is a cornerstone of our business philosophy. We believe in fair trade practices that benefit both the farmers and the environment.",
      category: "Events",
      featured: true
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?ixlib=rb-4.0.3",
      alt: "Packaging",
      title: "Quality Packaging",
      description: "Modern packaging facility ensuring product freshness and extended shelf life while maintaining eco-friendly standards. Our packaging solutions are designed to preserve flavor and quality.",
      category: "Facilities"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1596978847924-a7efd7d51fea?ixlib=rb-4.0.3",
      alt: "Global Shipping",
      title: "Global Distribution",
      description: "Shipping our products worldwide with care involves sophisticated logistics and quality control systems. We ensure that our products reach customers in perfect condition regardless of destination.",
      category: "Events",
      tall: true
    }
  ];

  // Filter images based on selected category
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Select featured images for the animated gallery
  const featuredImages = galleryImages.filter(img => img.featured || img.tall).slice(0, 5);

  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-spice-primary mb-4">
            {t('gallery.title')}
          </h1>
          <p className="font-body text-lg text-spice-text max-w-3xl mx-auto">
            {t('gallery.description')}
          </p>
        </motion.div>
        
        {/* Animated Image Gallery - Aceternity Component */}
        <div className="mb-16">
          <AnimatedPhotoGallery images={featuredImages} autoplay={true} />
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'blue-gradient text-white shadow-blue-glow'
                  : 'bg-white border border-spice-border hover:bg-blue-50 text-spice-text'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Enhanced Hover Effects */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative overflow-hidden rounded-xl shadow-card group cursor-pointer`}
                style={{ 
                  height: image.featured ? '400px' : image.tall ? '500px' : '300px',
                  gridColumn: image.featured ? 'span 2' : 'span 1',
                  gridRow: image.tall ? 'span 2' : 'span 1' 
                }}
                onClick={() => setSelectedImage(image)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={image.src} 
                  alt={t(`gallery.images.${image.id}.alt`) || image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Enhanced Overlay with Aceternity-style glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  {/* Subtle glow effect on hover */}
                  {hoveredIndex === idx && (
                    <motion.div 
                      className="absolute inset-0 bg-blue-500/10 blur-xl" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  
                  <motion.h3 
                    className="text-xl font-bold text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {t(`gallery.images.${image.id}.title`) || image.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-white/80"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {(t(`gallery.images.${image.id}.description`) || image.description).substring(0, 75)}...
                  </motion.p>
                </div>
                
                {/* Aceternity-style floating dots decoration */}
                {hoveredIndex === idx && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-blue-500/50 blur-sm" />
                    <div className="absolute bottom-16 left-6 w-2 h-2 rounded-full bg-blue-300/60 blur-sm" />
                    <div className="absolute top-1/2 right-10 w-4 h-4 rounded-full bg-blue-400/40 blur-md" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal with Aceternity-style Animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background glow effect */}
              <motion.div 
                className="absolute inset-0 bg-blue-500/20 blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <img 
                src={selectedImage.src} 
                alt={t(`gallery.images.${selectedImage.id}.alt`) || selectedImage.alt}
                className="w-full h-auto object-contain max-h-[80vh] relative z-10"
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white z-20"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold">{t(`gallery.images.${selectedImage.id}.title`) || selectedImage.title}</h3>
                <p className="text-base opacity-90">{t(`gallery.images.${selectedImage.id}.description`) || selectedImage.description}</p>
              </motion.div>
              
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors z-20"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={t('gallery.modal.close')}
              >
                ✕
              </motion.button>
              
              {/* Aceternity-style floating decoration elements */}
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500/20 blur-xl" />
              <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-300/10 blur-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}