import React, { lazy, Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { useTranslation } from "react-i18next";
import { Products } from "../components/ProductCarousel";

// Import local images from assets folder
import bgImage1 from "../assets/background/bg1.jpg";
import bgImage2 from "../assets/background/bg2.jpg";
import bgImage3 from "../assets/background/bg3.jpg";
import bgImage4 from "../assets/background/bg4.jpg";

// Lazy load heavy components
const Githubglobe = lazy(() =>
  import("./Githubglobe").then((module) => ({
    default: module.Githubglobe,
  }))
);

const WorldMapDemo = lazy(() => import("./WorldMap"));

// Cloudinary hero images array
const heroImages = [bgImage1, bgImage2, bgImage3, bgImage4];

export default function Home() {
  const { t } = useTranslation();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [prevHeroImage, setPrevHeroImage] = useState(0);
  const [direction, setDirection] = useState(1);

  // Effect for rotating hero images with enhanced transition
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevHeroImage(currentHeroImage);
      setCurrentHeroImage((prevImage) => {
        const newIndex = (prevImage + 1) % heroImages.length;
        setDirection(1); // Always moving forward in auto rotation
        return newIndex;
      });
    }, 3000); // Increased to 3 seconds to give more time to appreciate each image

    return () => clearInterval(interval);
  }, [currentHeroImage]);

  // Enhanced animation variants for smoother transitions
  const slideVariants = {
    initial: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 1.1 : 0.9,
      x: direction > 0 ? "100%" : "-100%",
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }, // Custom bezier curve for more natural motion
      },
    },
    exit: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 0.9 : 1.1,
      x: direction > 0 ? "-100%" : "100%",
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.8 },
      },
    }),
  };

  // Cross-fade animation for smoother background transitions
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  // Function to handle manual image change with direction
  const handleImageChange = (index) => {
    if (index === currentHeroImage) return;

    setPrevHeroImage(currentHeroImage);
    setDirection(index > currentHeroImage ? 1 : -1);
    setCurrentHeroImage(index);
  };

  // Preload images for smoother experience
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Enhanced Image Carousel */}
      <section className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 h-[80vh] md:h-[90vh]">
        {/* Dynamic Hero Image Carousel with improved animation */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="crossfade">
            <motion.div
              key={currentHeroImage}
              className="absolute inset-0 z-10"
              custom={direction}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroImages[currentHeroImage]})`,
                }}
                initial={{ scale: 1.05 }}
                animate={{
                  scale: 1,
                  transition: { duration: 6, ease: "easeOut" },
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content with enhanced staggered animation */}
        <div className="container mx-auto px-6 py-24 relative z-10 h-full flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-3xl text-left"
          >
            <motion.h1
              className="font-display text-4xl md:text-6xl font-bold mb-6 text-white"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
                },
              }}
            >
              {t("hero.title.start")}{" "}
              <span className="text-blue-300">{t("hero.title.highlight")}</span>
            </motion.h1>

            <motion.p
              className="font-body text-lg md:text-xl mb-8 text-white/90"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
                },
              }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
                },
              }}
            >
              <Link
                to="/products"
                className="rounded-md bg-gradient-to-b from-spice-primary to-spice-accent hover:shadow-blue-glow hover:-translate-y-0.5 px-8 py-3 font-body font-medium text-white transition-all shadow-md"
              >
                {t("hero.cta.explore")}
              </Link>
              <Link
                to="/contactus"
                className="rounded-md bg-white/90 border border-transparent hover:bg-white hover:shadow-md px-8 py-3 font-body font-medium text-spice-primary transition-all"
              >
                {t("hero.cta.quote")}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Image Indicator Dots with animations */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all`}
              initial={false}
              animate={{
                backgroundColor:
                  currentHeroImage === index
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(255, 255, 255, 0.5)",
                scale: currentHeroImage === index ? 1.3 : 1,
                boxShadow:
                  currentHeroImage === index
                    ? "0 0 8px 2px rgba(255, 255, 255, 0.5)"
                    : "none",
              }}
              whileHover={{
                backgroundColor:
                  currentHeroImage === index
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(255, 255, 255, 0.7)",
                scale: 1.2,
              }}
              transition={{ duration: 0.4 }}
              onClick={() => handleImageChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-spice-primary">
                About Briskwell International
              </h2>
              <div className="space-y-4">
                <p className="font-body text-lg text-spice-text">
                  Founded in 2024, Briskwell International is a dynamic global
                  trading company specializing in the import and export of
                  high-quality goods across various industries. With a strong
                  network of reliable partners and suppliers worldwide, we are
                  committed to delivering excellence, efficiency, and trust in
                  every transaction.
                </p>
                <p className="font-body text-lg text-spice-text">
                  At Briskwell International, we believe in forging lasting
                  partnerships and enabling businesses to thrive beyond borders.
                  Our mission is simple — to make global trade faster, smarter,
                  and more reliable.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <h3 className="font-display text-3xl font-bold text-spice-primary">
                    50+
                  </h3>
                  <p className="font-body text-spice-text">Global Partners</p>
                </div>
                <div className="text-center">
                  <h3 className="font-display text-3xl font-bold text-spice-primary">
                    25+
                  </h3>
                  <p className="font-body text-spice-text">Countries Served</p>
                </div>
                <div className="text-center">
                  <h3 className="font-display text-3xl font-bold text-spice-primary">
                    1000+
                  </h3>
                  <p className="font-body text-spice-text">MT Monthly Export</p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/aboutus"
                  className="inline-flex items-center gap-2 px-6 py-3 font-body font-medium text-spice-primary hover:text-spice-secondary transition-colors duration-300 group"
                >
                  Learn More About Us
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-spice-primary/20 to-transparent"></div>
                <img
                  src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744912464/Business_App/ezjrvfh9lnlkni9lei8w.jpg"
                  alt="About Briskwell International"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-spice-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-spice-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-spice-primary">
                      ISO 9001:2015
                    </h4>
                    <p className="font-body text-sm text-spice-text">
                      Certified Exporter
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Featured Products Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 mb-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-spice-primary mb-3">
              {t("products.section.title")}
            </h2>
            <p className="font-body text-spice-text max-w-2xl mx-auto">
              {t("products.carousel.subtitle")}
            </p>
          </div>
        </div>

        <Products />

        <div className="container mx-auto px-6 mt-12 text-center">
          <Link
            to="/products"
            className="inline-block rounded-md bg-gradient-to-b from-spice-primary to-spice-accent px-8 py-3 font-body font-medium text-white transition-all shadow-md hover:shadow-blue-glow hover:-translate-y-0.5"
          >
            {t("products.viewAllButton")}
          </Link>
        </div>
      </section>
      {/* Globe visualization can remain in another section if needed */}
      <section className="py-10 bg-white">
        <Suspense
          fallback={
            <div className="h-[500px] w-full flex items-center justify-center">
              <div className="text-spice-primary">{t("loading.globe")}</div>
            </div>
          }
        >
          {/* Uncomment if you want to use the GitHub globe */}
          {/* <Githubglobe /> */}
        </Suspense>
      </section>

      {/* What we do section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 102, 204, 0.5) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 bg-blue-50 rounded-full text-blue-600 font-medium text-sm mb-4"
            >
              Our Services
            </motion.div>
            <h2 className="font-display text-4xl font-bold text-spice-primary mb-4">
              {t("whatWeDo.title")}
            </h2>
            <p className="font-body text-lg text-spice-text max-w-2xl mx-auto">
              {t("whatWeDo.subtitle")}
            </p>
          </motion.div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 - Sourcing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-all duration-500" />
              <div className="relative h-full rounded-2xl p-2 md:rounded-3xl md:p-3 bg-gradient-to-b from-blue-900 to-cyan-800 transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="p-8 rounded-xl h-full flex flex-col items-center text-center group backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <img
                      src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744978500/Business_App/kcjwy26hr6mwdzizvbee.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4 transform group-hover:scale-105 transition-all duration-500">
                    {t("whatWeDo.sourcing.title")}
                  </h3>
                  <p className="font-body text-gray-300 group-hover:text-gray-100 transition-all duration-500">
                    {t("whatWeDo.sourcing.description")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Quality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-all duration-500" />
              <div className="relative h-full rounded-2xl p-2 md:rounded-3xl md:p-3 bg-gradient-to-b from-blue-900 to-cyan-800 transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="p-8 rounded-xl h-full flex flex-col items-center text-center group backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <img
                      src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744978709/Business_App/hvzr4j9o4vrgk8hwhrq5.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-4 transform group-hover:scale-105 transition-all duration-500">
                    {t("whatWeDo.quality.title")}
                  </h3>
                  <p className="font-body text-gray-300 group-hover:text-gray-100 transition-all duration-500">
                    {t("whatWeDo.quality.description")}
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Card 3 - Export */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-all duration-500" />
              <div className="relative h-full rounded-2xl p-2 md:rounded-3xl md:p-3 bg-gradient-to-b from-blue-900 to-cyan-800 transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="p-8 rounded-xl h-full flex flex-col items-center text-center group backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <img
                      src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744978806/Business_App/uacunexf38pukgmhwi6e.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-4 transform group-hover:scale-105 transition-all duration-500">
                    {t("whatWeDo.export.title")}
                  </h3>
                  <p className="font-body text-gray-300 group-hover:text-gray-100 transition-all duration-500">
                    {t("whatWeDo.export.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link
              to="/aboutUs"
              className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
            >
              {t("whatWeDo.learnMore")}
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </motion.div>
        </div>
        {/* Decorative floating dots */}
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl" />
      </section>
      {/* Global Reach Section - Globe Visualization */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-spice-primary mb-3">
              {t("globalReach.title")}
            </h2>
            <p className="font-body text-spice-text max-w-2xl mx-auto">
              {t("globalReach.description")}
            </p>
          </div>

          <Suspense
            fallback={
              <div className="h-[500px] w-full flex items-center justify-center">
                <div className="text-spice-primary">
                  {t("loading.worldMap")}
                </div>
              </div>
            }
          >
            <WorldMapDemo />
          </Suspense>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-spice-primary to-spice-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <Link
            to="/contactus"
            className="inline-block rounded-md bg-white px-8 py-3 font-body font-bold text-spice-primary hover:bg-spice-light transition-all shadow-md hover:shadow-blue-glow hover:-translate-y-0.5"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
      {/* Certificates Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-spice-primary mb-4">
              Our Certifications
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of quality and safety with
              international certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center max-w-6xl mx-auto">
            {/* Certificate Items */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-full rounded-full border-2 border-spice-primary/10 p-4 hover:border-spice-primary/30 transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744316999/Business_App/ftayaeccvxbc4hj7uyas.jpg"
                    alt="ISO 9001:2015"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-full rounded-full border-2 border-spice-primary/10 p-4 hover:border-spice-primary/30 transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744317174/Business_App/rn3pturifgxsxumysaxr.jpg"
                    alt="HACCP"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-full rounded-full border-2 border-spice-primary/10 p-4 hover:border-spice-primary/30 transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744317274/Business_App/kjxrnwmj9iq4ofkbrfeu.jpg"
                    alt="GMP"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-full rounded-full border-2 border-spice-primary/10 p-4 hover:border-spice-primary/30 transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744317372/Business_App/woowp1mlqjrb819q9tuo.jpg"
                    alt="FSSAI"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-full rounded-full border-2 border-spice-primary/10 p-4 hover:border-spice-primary/30 transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744317689/Business_App/mhqp2csjd1e7tct25k8k.jpg"
                    alt="APEDA"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/certification"
              className="inline-flex items-center gap-2 px-6 py-3 font-body font-medium text-spice-primary hover:text-spice-secondary transition-colors duration-300 group"
            >
              View All Certifications
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
