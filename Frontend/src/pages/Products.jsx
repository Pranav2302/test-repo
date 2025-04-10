import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlowingEffect } from "../components/ui/glowing-effect";

export default function Products() {
  const { t } = useTranslation();
  const location = useLocation();
  const initialCategory = location.state?.category || 'all';
  
  // Define product categories
  const categories = [
    { id: "all", label: t('products.filters.all') },
    { id: "spices", label: t('products.filters.spices') },
    { id: "pulses", label: t('products.filters.pulses') },
    { id: "sugar", label: t('products.filters.sugar') },
    { id: "jaggery", label: t('products.filters.jaggery') },
    { id: "rice", label: t('products.filters.rice') },
    { id: "grains", label: t('products.filters.grains') },
    { id: "vegetables", label: t('products.filters.vegetables') },
    { id: "fruits", label: t('products.filters.fruits') }
  ];
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
      // Clear the state to prevent persisting after navigation
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Product data with all the images
  const products = [
    {
      id: 1,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/fl_preserve_transparency/v1744104890/spices_x73w3x.jpg",
      alt: "Premium Spices",
      title: "Premium Spices Collection",
      description: "Authentic Indian spices sourced directly from farms across the country's most renowned growing regions.",
      category: "spices"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106327/Business_App/s1jlgk648cotphznkfww.jpg",
      alt: "Sugar",
      title: "Premium Sugar",
      description: "High-quality refined and raw sugar available in various grades for commercial use.",
      category: "sugar"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106313/Business_App/qtpnhox07urfme1torrk.jpg",
      alt: "Jaggery",
      title: "Organic Jaggery",
      description: "Traditional jaggery production methods combined with organic farming practices.",
      category: "jaggery"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106328/Business_App/c1iuwp2tvucc3f4epvxj.jpg",
      alt: "Rice",
      title: "Premium Rice",
      description: "Finest basmati and non-basmati rice varieties known for their aroma, taste and quality.",
      category: "rice"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303071/Business_App/lke9ucjiklhaajgikvkr.jpg",
      alt: "Dal Cup",
      title: "Dal Cup",
      description: "High-quality pulses packaged in convenient cups for easy cooking and storage.",
      category: "pulses"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303071/Business_App/achxp9ucdda2ajbjeygp.jpg",
      alt: "Pulses Variety",
      title: "Pulses Variety Pack",
      description: "A selection of premium pulses including lentils, chickpeas and beans.",
      category: "pulses"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/if7fmackdd34uy6guyys.jpg",
      alt: "Vegetables",
      title: "Fresh Vegetables",
      description: "Farm-fresh vegetables sourced from local farmers with sustainable practices.",
      category: "vegetables"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/rnoohbyhkfxfy7ipinen.jpg",
      alt: "Fruits",
      title: "Exotic Fruits",
      description: "Fresh, juicy fruits from across India's diverse growing regions.",
      category: "fruits"
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/zmjjkou75h4w7igsopi8.jpg",
      alt: "Wheat",
      title: "Premium Wheat",
      description: "High-quality wheat grain suitable for various culinary applications.",
      category: "grains"
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303069/Business_App/eir3jbhafkl4hthv3a8r.jpg",
      alt: "Juaga",
      title: "Juaga Grain",
      description: "Traditional grain variety packed with nutrients and health benefits.",
      category: "grains"
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/qbgnuhdxwisle6styyea.jpg",
      alt: "Jowar",
      title: "Jowar Millet",
      description: "Nutrient-rich millet grain that's gluten-free and versatile in cooking applications.",
      category: "grains"
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303069/Business_App/tr7s1tbz7daehxinll2x.jpg",
      alt: "Mango",
      title: "Premium Mangoes",
      description: "India's famous alphonso and kesar mangoes known worldwide for their unique flavor.",
      category: "fruits"
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303065/Business_App/wsq4ax4uwnrawwspnlh8.jpg",
      alt: "Orange",
      title: "Fresh Oranges",
      description: "Sweet and juicy oranges sourced from prime growing regions in India.",
      category: "fruits"
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303064/Business_App/jurejtucymmfjpiy8ypk.jpg",
      alt: "White Onion",
      title: "White Onions",
      description: "Premium white onions known for their mild flavor and versatility in cooking.",
      category: "vegetables"
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303067/Business_App/byk9rdeivvfnk0ejjmfk.jpg",
      alt: "Bajra",
      title: "Bajra Millet",
      description: "Nutritious pearl millet that's a staple in many traditional Indian dishes.",
      category: "grains"
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303071/Business_App/argohmglzajcsspgz0fu.jpg",
      alt: "Mixed Spices",
      title: "Mixed Spices",
      description: "Carefully curated blend of premium Indian spices for authentic flavors.",
      category: "spices"
    }
  ];

  // Filter products based on selected category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
            {t('products.page.title')}
          </h1>
          <p className="font-body text-lg text-spice-text max-w-3xl mx-auto">
            {t('products.page.description')}
          </p>
        </motion.div>
        
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

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-xl shadow-card group cursor-pointer"
                style={{ height: '300px' }}
                onClick={() => setSelectedProduct(product)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-full rounded-2xl p-1">
                  <GlowingEffect
                    spread={30}
                    glow={hoveredIndex === idx}
                    disabled={false}
                    proximity={50}
                    inactiveZone={0.01}
                    blur={8}
                  />
                  <img 
                    src={product.src} 
                    alt={product.alt}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Enhanced Overlay with glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 rounded-xl">
                    {/* Subtle glow effect on hover */}
                    {hoveredIndex === idx && (
                      <motion.div 
                        className="absolute inset-0 bg-blue-500/10 blur-xl rounded-xl" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    
                    <motion.h3 
                      className="text-xl font-bold text-white relative z-10"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {product.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-white/80 relative z-10"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {product.description.substring(0, 75)}...
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-spice-text">{t('products.noProducts')}</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl relative z-10 p-6">
                <img 
                  src={selectedProduct.src} 
                  alt={selectedProduct.alt}
                  className="w-full h-auto object-cover rounded-lg"
                />
                
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-spice-primary mb-3">
                      {selectedProduct.title}
                    </h2>
                    <p className="text-spice-text mb-6">
                      {selectedProduct.description}
                    </p>
                    
                    {/* Product details */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-spice-primary mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-spice-dark">Quality Assurance</h4>
                          <p className="text-sm text-spice-text">All our products undergo rigorous quality checks</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-spice-primary mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-spice-dark">Origin</h4>
                          <p className="text-sm text-spice-text">Sourced from premium growing regions in India</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-spice-primary mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-spice-dark">Packaging</h4>
                          <p className="text-sm text-spice-text">Available in various packaging options for bulk and retail</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      onClick={() => window.location.href = '/contactus'}
                      className="w-full rounded-md bg-gradient-to-b from-spice-primary to-spice-accent px-8 py-3 font-body font-medium text-white transition-all shadow-md hover:shadow-blue-glow hover:-translate-y-0.5"
                    >
                      {t('products.modal.inquire')}
                    </button>
                  </div>
                </div>
              </div>
              
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors z-20"
                onClick={() => setSelectedProduct(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}