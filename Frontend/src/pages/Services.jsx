import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import icons for the animated gallery
const IconArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const IconArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// Custom service card component with hover effects
const ServiceCard = ({ icon, title, description, className = "" }) => {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-xl bg-white shadow-card hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-blue-100/50 to-blue-50/50 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
      <div className="relative p-6">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-spice-primary mb-3">{title}</h3>
        <p className="text-spice-text">{description}</p>
      </div>
    </div>
  );
};

// Animated featured service component
const AnimatedFeatureService = ({ services, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + services.length) % services.length);
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
      <h2 className="font-display text-3xl font-bold text-spice-primary text-center mb-8">
        Our Featured Services
      </h2>
      <div className="relative grid grid-cols-1 gap-6 md:gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 md:h-96 w-full">
            <AnimatePresence>
              {services.map((service, index) => (
                <motion.div
                  key={service.src}
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
                    zIndex: isActive(index) ? 40 : services.length + 2 - index,
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
                    src={service.src}
                    alt={service.title}
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
              {services[active].title}
            </h3>
            <p className="text-sm text-blue-600 font-medium">
              {services[active].category}
            </p>
            <motion.p className="mt-8 text-lg text-spice-text">
              {services[active].description.split(" ").map((word, index) => (
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
            >
              <IconArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <IconArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Main service categories
  const serviceCategories = [
    "All",
    "Sea Freight",
    "Air Freight",
    "Customs",
    "Consulting",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Featured service data
  const featuredServices = [
    {
      id: 1,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745129228/Business_App/cox1m6pyuls6ph5puu9v.jpg",
      alt: "Freight Forwarding",
      title: "Freight Forwarding Solutions",
      category: "Global Logistics",
      description:
        "Our comprehensive freight forwarding services ensure your cargo reaches its destination efficiently and cost-effectively. With our extensive global network, we handle all aspects of your shipping needs from pickup to delivery, providing real-time tracking and customs documentation.",
      featured: true,
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745128928/Business_App/trdcq6p0ezuyrxbvho0t.jpg", // Replace with your Cloudinary URL
      alt: "Customs Clearance",
      title: "Customs Clearance Expertise",
      category: "Import/Export",
      description:
        "Navigate the complexities of international trade with our expert customs clearance services. Our team of licensed customs brokers ensures compliance with all regulations, handles documentation, and manages tariff classifications to facilitate smooth border crossings for your goods.",
      featured: true,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571942676516-0ee76ab39327", // Replace with your Cloudinary URL
      alt: "Sea Export",
      title: "Sea Export & Import",
      category: "Ocean Freight",
      description:
        "Whether you need full container load (FCL) or less than container load (LCL) shipping solutions, our sea freight services connect you to major ports worldwide. We optimize routes, manage carrier relationships, and ensure competitive rates for your ocean logistics needs.",
      featured: true,
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745128768/Business_App/uvwysq4okj1meu423zar.jpg",
      alt: "Air Freight",
      title: "Air Export & Import",
      category: "Air Freight",
      description:
        "When time is of the essence, our air freight services provide expedited shipping solutions to and from destinations worldwide. We work with major airlines to secure cargo space, manage special handling requirements, and ensure your time-sensitive shipments arrive on schedule.",
      featured: true,
    },
  ];

  // Detailed service offerings
  const serviceOfferings = [
    {
      id: 1,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745129228/Business_App/cox1m6pyuls6ph5puu9v.jpg", // Replace with your Cloudinary URL
      alt: "Freight Forwarding",
      title: "Freight Forwarding",
      description:
        "End-to-end logistics solutions for your global shipping needs, with dedicated route optimization, carrier selection, and comprehensive cargo management.",
      icon: "🚢",
      category: "Sea Freight",
      details: [
        "Door-to-door delivery coordination",
        "Carrier negotiation and booking",
        "Route optimization and planning",
        "Cargo insurance arrangements",
        "Electronic tracking and visibility",
      ],
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745128928/Business_App/trdcq6p0ezuyrxbvho0t.jpg",
      alt: "Customs Clearance",
      title: "Customs Clearance",
      description:
        "Expert handling of all customs documentation and regulatory compliance to ensure smooth border crossings and prevent costly delays.",
      icon: "📝",
      category: "Customs",
      details: [
        "Customs documentation preparation",
        "Tariff classification assistance",
        "Regulatory compliance management",
        "Duty and tax calculation",
        "Customs bond facilitation",
      ],
      tall: true,
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745143033/Business_App/dc5y2ufvwnch55huxkb8.jpg", // Replace with your Cloudinary URL
      alt: "Export Import Consultation",
      title: "Export Import Consultation",
      description:
        "Strategic guidance on international trade regulations, market entry strategies, and optimization of your global supply chain.",
      icon: "💼",
      category: "Consulting",
      details: [
        "Trade compliance assessments",
        "Import/export license guidance",
        "Market entry strategy development",
        "Supply chain optimization",
        "Trade agreement benefits analysis",
      ],
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745129224/Business_App/systt7jxckvyfewgjry9.jpg",
      alt: "International Parcel",
      title: "International Parcel",
      description:
        "Reliable and cost-effective solutions for smaller shipments and parcels with global tracking capabilities and express options.",
      icon: "📦",
      category: "Air Freight",
      details: [
        "Express and standard delivery options",
        "Packaging guidelines and solutions",
        "International tracking systems",
        "Last-mile delivery coordination",
        "Returns management",
      ],
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745150336/Business_App/ik1tkcygo4ujb7narp3z.jpg",
      alt: "Sea Export/Import",
      title: "Sea Export/Import (FCL/LCL)",
      description:
        "Comprehensive ocean freight services for both full container loads (FCL) and less than container loads (LCL) to destinations worldwide.",
      icon: "🚢",
      category: "Sea Freight",
      details: [
        "FCL and LCL shipping solutions",
        "Container management and tracking",
        "Port-to-port and door-to-door options",
        "Specialized equipment for oversized cargo",
        "Transshipment coordination",
      ],
      featured: true,
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745150060/Business_App/l0ksnmgqoomj0swxvfqe.jpg",
      alt: "Air Export/Import",
      title: "Air Export/Import",
      description:
        "Fast and reliable air freight solutions for time-sensitive cargo with flexible scheduling and specialized handling capabilities.",
      icon: "✈️",
      category: "Air Freight",
      details: [
        "Express and consolidated air freight",
        "Charter services for urgent shipments",
        "Temperature-controlled transport",
        "Dangerous goods handling",
        "Airport-to-airport and door-to-door options",
      ],
      tall: true,
    },
  ];

  // Filter services based on selected category
  const filteredServices =
    activeCategory === "All"
      ? serviceOfferings
      : serviceOfferings.filter(
          (service) => service.category === activeCategory
        );

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7" // Replace with your Cloudinary URL
            className="w-full h-full object-cover object-center"
            alt="Logistics Services"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent " />
        </div>

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 mb-6 "
            >
              Global Logistics Partner
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6  "
            >
              Comprehensive <span className="text-blue-400">Logistics</span>{" "}
              Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 leading-relaxed max-w-2xl"
            >
              From freight forwarding to customs clearance, we offer end-to-end
              solutions to streamline your global trade operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 justify-center items-center text-center"
            >
              <a
                href="#services"
                className="px-8 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition-all hover:-translate-y-1 duration-300 shadow-md"
                style={{ color: "white" }} // pure black
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-  rounded-md hover:bg-white/20 transition-all hover:-translate-y-1 duration-300"
                style={{ color: "white" }} // pure black
              >
                Request Quote
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-medium text-sm mb-4">
              Our Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-spice-primary mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="font-body text-lg text-spice-text max-w-3xl mx-auto">
              We offer a complete range of freight forwarding and customs
              clearance services to simplify your international trade
              operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ServiceCard
                icon="🚢"
                title="Sea Export/Import (FCL/LCL)"
                description="Comprehensive ocean freight services for both full container loads and consolidation shipments with competitive rates and reliable scheduling."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ServiceCard
                icon="✈️"
                title="Air Export/Import"
                description="Expedited air freight solutions for time-sensitive cargo with flexible scheduling options and specialized handling capabilities."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ServiceCard
                icon="📝"
                title="Customs Clearance"
                description="Expert handling of all customs documentation and regulatory compliance to ensure smooth border crossings and prevent delays."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <ServiceCard
                icon="🚚"
                title="Freight Forwarding"
                description="End-to-end logistics solutions with route optimization, carrier selection, and comprehensive cargo management services."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <ServiceCard
                icon="📦"
                title="International Parcel"
                description="Reliable and cost-effective solutions for smaller shipments and parcels with global tracking capabilities and express options."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <ServiceCard
                icon="💼"
                title="Export Import Consultation"
                description="Strategic guidance on international trade regulations, market entry strategies, and optimization of your global supply chain."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-blue-50/50">
        <AnimatedFeatureService services={featuredServices} autoplay={true} />
      </section>

      {/* Detailed Service Gallery */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-spice-primary mb-4">
              Explore Our Service Portfolio
            </h2>
            <p className="font-body text-lg text-spice-text max-w-3xl mx-auto">
              Dive deeper into our comprehensive range of logistics services
              designed to meet your global shipping requirements.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center  gap-2 md:gap-4 mb-10">
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    : "bg-white border border-spice-border hover:bg-blue-50 text-spice-text"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid with Enhanced Hover Effects */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            layout
          >
            <AnimatePresence>
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`relative overflow-hidden rounded-xl shadow-card group cursor-pointer`}
                  style={{
                    height: service.featured
                      ? "400px"
                      : service.tall
                      ? "500px"
                      : "350px",
                    gridColumn: service.featured ? "span 2" : "span 1",
                    gridRow: service.tall ? "span 2" : "span 1",
                  }}
                  onClick={() => setSelectedService(service)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={service.src}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Enhanced Overlay with Focus Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    {/* Service icon in overlay */}
                    <div className="absolute top-5 right-5 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ">
                      <span className="text-2xl">{service.icon}</span>
                    </div>

                    {/* Center card is fully visible, others get darkened */}
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
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/80"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Click for details indicator */}
                    <div className="mt-4 flex items-center gap-2 text-blue-300 text-sm">
                      <span>Click for details</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  {hoveredIndex === idx && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-5 left-5 w-3 h-3 rounded-full bg-blue-500/50 blur-sm" />
                      <div className="absolute bottom-16 right-6 w-2 h-2 rounded-full bg-blue-300/60 blur-sm" />
                      <div className="absolute top-1/2 left-10 w-4 h-4 rounded-full bg-blue-400/40 blur-md" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-60 md:h-auto relative">
                    <img
                      src={selectedService.src}
                      alt={selectedService.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t md:from-black/50 md:to-transparent" />
                    <div className="absolute top-4 right-4 md:top-auto md:bottom-4 md:right-4">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {selectedService.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                        {selectedService.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-spice-primary">
                        {selectedService.title}
                      </h3>
                    </div>

                    <p className="text-spice-text mb-6">
                      {selectedService.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-medium text-spice-primary">
                        Service Includes:
                      </h4>
                      <ul className="space-y-2">
                        {selectedService.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-spice-text">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <button
                        onClick={() => (window.location.href = "#contact")}
                        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Request Quote
                      </button>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors md:bg-white/30 md:text-gray-700"
                  onClick={() => setSelectedService(null)}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <section
        className="py-16 bg-gradient-to-r from-blue-600 to-blue-500"
        id="contact"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Simplify Your Global Logistics?
          </h2>
          <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss your specific
            requirements and receive a customized logistics solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contactus"
              className="inline-block rounded-md bg-white px-8 py-3 font-body font-bold text-blue-600 hover:bg-blue-50 transition-all shadow-md hover:-translate-y-0.5"
            >
              Request a Quote
            </a>
            <a
              href="/contactus"
              className="inline-block rounded-md bg-transparent border border-white px-8 py-3 font-body font-bold text-white hover:bg-white/10 transition-all"
              style={{ color: "white" }} // pure black
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
