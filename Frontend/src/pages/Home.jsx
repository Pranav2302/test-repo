import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { useTranslation } from 'react-i18next';
import { Products } from "../components/ProductCarousel"

// Lazy load heavy components
const Githubglobe = lazy(() => import("./Githubglobe").then(module => ({ 
  default: module.Githubglobe 
})));

const WorldMapDemo = lazy(() => import("./WorldMap"));

// Updated product images with Cloudinary CDN links
const productImages = {
  spices: "https://res.cloudinary.com/doxrnqdwn/image/upload/fl_preserve_transparency/v1744104890/spices_x73w3x.jpg",
  sugar: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106327/Business_App/s1jlgk648cotphznkfww.jpg",
  jaggery: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106313/Business_App/qtpnhox07urfme1torrk.jpg",
  rice: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106328/Business_App/c1iuwp2tvucc3f4epvxj.jpg"
};

// Cloudinary hero images array
const heroImages = [
  "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744311491/aerial-view-cargo-ship-cargo-container-harbor_335224-1374_w7ev4r.jpg",
  "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744311429/port-6670684_1280_qmcoei.jpg",
  "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744311376/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177_nudvo2.jpg",
  "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744311423/aerial-view-cargo-ship-cargo-container-harbor_335224-1380_qmcnzl.jpg"
];

export default function Home() {
  const { t } = useTranslation();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Effect for rotating hero images with enhanced 3 second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage(prevImage => (prevImage + 1) % heroImages.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, []);

  // Animation variants for more impressive transitions
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }
    })
  };

  // Keep track of the direction for animation
  const [[page, direction], setPage] = useState([0, 0]);

  // Update both the current image and the direction
  useEffect(() => {
    setPage([currentHeroImage, 1]); // 1 for forward direction
  }, [currentHeroImage]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Enhanced Image Carousel */}
      <section className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 h-[80vh] md:h-[90vh]">
        {/* Dynamic Hero Image Carousel with improved animation */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div 
              key={page}
              className="absolute inset-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 1,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${heroImages[currentHeroImage]})`,
                  filter: "brightness(0.85)",
                }}
              >
                {/* Add a subtle motion effect to the background image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${heroImages[currentHeroImage]})`,
                    backgroundPosition: 'center',
                  }}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Hero Content with staggered animation */}
        <div className="container mx-auto px-6 py-24 relative z-10 h-full flex items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-3xl text-left"
          >
            <motion.h1 
              className="font-display text-4xl md:text-6xl font-bold mb-6 text-white"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              {t('hero.title.start')} <span className="text-blue-300">{t('hero.title.highlight')}</span>
            </motion.h1>
            
            <motion.p 
              className="font-body text-lg md:text-xl mb-8 text-white/90"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <Link to="/products" className="rounded-md bg-gradient-to-b from-spice-primary to-spice-accent hover:shadow-blue-glow hover:-translate-y-0.5 px-8 py-3 font-body font-medium text-white transition-all shadow-md">
                {t('hero.cta.explore')}
              </Link>
              <Link to="/contactus" className="rounded-md bg-white/90 border border-transparent hover:bg-white hover:shadow-md px-8 py-3 font-body font-medium text-spice-primary transition-all">
                {t('hero.cta.quote')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Image Indicator Dots with enhanced animations */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
          {heroImages.map((_, index) => (
            <motion.button 
              key={index} 
              className={`w-3 h-3 rounded-full transition-all`}
              initial={false}
              animate={{
                backgroundColor: currentHeroImage === index ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)',
                scale: currentHeroImage === index ? 1.25 : 1
              }}
              whileHover={{ 
                backgroundColor: currentHeroImage === index ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)',
                scale: 1.2
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrentHeroImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 mb-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-spice-primary mb-3">{t('products.section.title')}</h2>
            <p className="font-body text-spice-text max-w-2xl mx-auto">
              {t('products.carousel.subtitle')}
            </p>
          </div>
        </div>
        
        <Products />
        
        <div className="container mx-auto px-6 mt-12 text-center">
          <Link to="/products" className="inline-block rounded-md bg-gradient-to-b from-spice-primary to-spice-accent px-8 py-3 font-body font-medium text-white transition-all shadow-md hover:shadow-blue-glow hover:-translate-y-0.5">
            {t('products.viewAllButton')}
          </Link>
        </div>
      </section>

    {/* Globe visualization can remain in another section if needed */}
<section className="py-10 bg-white">
  <Suspense fallback={
    <div className="h-[500px] w-full flex items-center justify-center">
      <div className="text-spice-primary">{t('loading.globe')}</div>
    </div>
  }>
    {/* Uncomment if you want to use the GitHub globe */}
{/*     <Githubglobe /> */}
  </Suspense>
</section>
      {/* What we do section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-spice-primary mb-4">
              {t('whatWeDo.title')}
            </h2>
            <p className="font-body text-lg text-spice-text max-w-2xl mx-auto">
              {t('whatWeDo.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative group">
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-glossy-hover transition-all h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-spice-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t('whatWeDo.sourcing.title')}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t('whatWeDo.sourcing.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-glossy-hover transition-all h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-spice-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t('whatWeDo.quality.title')}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t('whatWeDo.quality.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-glossy-hover transition-all h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-spice-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t('whatWeDo.export.title')}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t('whatWeDo.export.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/aboutUs" className="inline-flex items-center gap-2 text-spice-primary hover:text-spice-secondary font-medium transition-colors">
              {t('whatWeDo.learnMore')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-spice-primary mb-4">
              {t('whyChooseUs.title')}
            </h2>
            <p className="font-body text-lg text-spice-text max-w-2xl mx-auto">
              {t('whyChooseUs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
            <div className="relative group">
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-glossy-hover transition-all h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-spice-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.88 3.549a9 9 0 11-9.76 0M12 12v.01" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t('whyChooseUs.quality.title')}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t('whyChooseUs.quality.description')}
                  </p>
                </div>
              </div>
            </div>
            
         
            <div className="relative group">
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-glossy-hover transition-all h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-spice-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t('whyChooseUs.ethical.title')}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t('whyChooseUs.ethical.description')}
                  </p>
                </div>
              </div>
            </div>
            
         
            <div className="relative group">
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-glossy-hover transition-all h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-spice-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11l-1 9H4l-1-9zm5 0V7a4 4 0 118 0v3" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t('whyChooseUs.delivery.title')}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t('whyChooseUs.delivery.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
*/}



{/* Global Reach Section - Globe Visualization */}
<section className="py-10 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="font-display text-3xl font-bold text-spice-primary mb-3">
        {t('globalReach.title')}
      </h2>
      <p className="font-body text-spice-text max-w-2xl mx-auto">
        {t('globalReach.description')}
      </p>
    </div>
    
    <Suspense fallback={
      <div className="h-[500px] w-full flex items-center justify-center">
        <div className="text-spice-primary">{t('loading.worldMap')}</div>
      </div>
    }>
      <WorldMapDemo />
    </Suspense>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-spice-primary to-spice-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link 
            to="/contactus" 
            className="inline-block rounded-md bg-white px-8 py-3 font-body font-bold text-spice-primary hover:bg-spice-light transition-all shadow-md hover:shadow-blue-glow hover:-translate-y-0.5"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>

      
    </div>
  );
}
