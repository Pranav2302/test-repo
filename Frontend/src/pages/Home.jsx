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
const heroImages = [
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4
];

export default function Home() {
  const { t } = useTranslation();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [direction, setDirection] = useState(1);

  // Effect for rotating hero images with enhanced 3 second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prevImage) => {
        const newIndex = (prevImage + 1) % heroImages.length;
        setDirection(1); // Always moving forward in auto rotation
        return newIndex;
      });
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, []);

  // Animation variants for transitions
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
        scale: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  // Function to handle manual image change with direction
  const handleImageChange = (index) => {
    setDirection(index > currentHeroImage ? 1 : -1);
    setCurrentHeroImage(index);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Enhanced Image Carousel */}
      <section className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 h-[80vh] md:h-[90vh]">
        {/* Dynamic Hero Image Carousel with improved animation */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentHeroImage}
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
                    backgroundPosition: "center",
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
                  transition: { duration: 0.6, ease: "easeOut" },
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
                  transition: { duration: 0.6, ease: "easeOut" },
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
                  transition: { duration: 0.6, ease: "easeOut" },
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

        {/* Image Indicator Dots with enhanced animations */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
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
                scale: currentHeroImage === index ? 1.25 : 1,
              }}
              whileHover={{
                backgroundColor:
                  currentHeroImage === index
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(255, 255, 255, 0.7)",
                scale: 1.2,
              }}
              transition={{ duration: 0.3 }}
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
                  src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106313/Business_App/about_us.jpg"
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
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-spice-primary mb-4">
              {t("whatWeDo.title")}
            </h2>
            <p className="font-body text-lg text-spice-text max-w-2xl mx-auto">
              {t("whatWeDo.subtitle")}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t("whatWeDo.sourcing.title")}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t("whatWeDo.sourcing.description")}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t("whatWeDo.quality.title")}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t("whatWeDo.quality.description")}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-primary mb-2">
                    {t("whatWeDo.export.title")}
                  </h3>
                  <p className="font-body text-spice-text">
                    {t("whatWeDo.export.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/aboutUs"
              className="inline-flex items-center gap-2 text-spice-primary hover:text-spice-secondary font-medium transition-colors"
            >
              {t("whatWeDo.learnMore")}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
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
