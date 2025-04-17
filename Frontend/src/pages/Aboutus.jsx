import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Timeline data
  const timeline = [
    {
      year: "2020",
      title: "Company Foundation",
      description:
        "Established with a vision to bring premium Indian agricultural products to the global market.",
    },
    {
      year: "2021",
      title: "Market Expansion",
      description:
        "Expanded operations to 15+ countries and achieved ISO 9001:2015 certification.",
    },
    {
      year: "2022",
      title: "Product Portfolio Growth",
      description:
        "Added new product categories and strengthened partnerships with local farmers.",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description:
        "Implemented state-of-the-art technology for supply chain management and quality control.",
    },
  ];

  // Stats data
  const stats = [
    { number: "50+", label: "Global Partners" },
    { number: "25+", label: "Countries Served" },
    { number: "1000+", label: "MT Monthly Export" },
    { number: "500+", label: "Farmer Networks" },
  ];

  // Core values data
  const coreValues = [
    {
      title: "Quality Excellence",
      description:
        "Maintaining the highest standards in every product we deliver.",
      icon: "🌟",
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally conscious practices.",
      icon: "🌱",
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and methods.",
      icon: "💡",
    },
    {
      title: "Integrity",
      description: "Operating with transparency and ethical standards.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with dual images and parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744910528/Business_App/ibrgbge0wnlpuk3ahgip.jpg"
            alt="Port Operations"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 " />
        </div>

        {/* Content */}
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
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 mb-6"
            >
              Global Trade Excellence
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
              {/* Who are we ?{" "} */}
              <span className="text-blue-400 ">
                Aboutus {/* Spices specialists for over a decade */}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Spices specialists for over a decade
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <Link
                to="/products"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full 
          hover:bg-white/20 transition-all hover:-translate-y-1 duration-300 "
              >
                View Products
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About Us Description Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-blue-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative rounded-3xl p-3 bg-white/80 backdrop-blur-sm">
                  <div className="bg-white/90 p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-8">
                      <span className="inline-block text-blue-600/90 text-sm font-semibold tracking-wider uppercase mb-4">
                        Who We Are
                      </span>
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-spice-primary mb-4">
                        About Briskwell International
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-500/40 via-blue-500/80 to-blue-500/40 rounded-full" />
                    </div>

                    {/* Content paragraphs */}
                    <div className="space-y-6 text-lg text-spice-text/90 leading-relaxed">
                      <motion.p
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="relative pl-6 border-l-2 border-blue-100"
                      >
                        <span className="text-spice-primary font-semibold">
                          Briskwell International
                        </span>{" "}
                        is a dynamic global trading company specializing in the
                        import and export of high-quality goods across various
                        industries. With a strong network of reliable partners
                        and suppliers worldwide, we are committed to delivering
                        excellence, efficiency, and trust in every transaction.
                      </motion.p>
                      <motion.p
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2 },
                          },
                        }}
                        className="relative pl-6 border-l-2 border-blue-100"
                      >
                        Founded with a vision to bridge markets and build global
                        connections, Briskwell International has grown into a
                        trusted name in international trade. Our team brings
                        together deep industry knowledge, logistics expertise,
                        and a passion for seamless global commerce.
                      </motion.p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <div className="px-6 py-3 rounded-full bg-blue-50/80 backdrop-blur-sm flex items-center gap-2 hover:bg-blue-50 transition-colors">
                        <span className="text-blue-600">🌐</span>
                        <span className="text-sm font-medium text-blue-700">
                          Global Presence
                        </span>
                      </div>
                      <div className="px-6 py-3 rounded-full bg-blue-50/80 backdrop-blur-sm flex items-center gap-2 hover:bg-blue-50 transition-colors">
                        <span className="text-blue-600">🤝</span>
                        <span className="text-sm font-medium text-blue-700">
                          Trusted Partners
                        </span>
                      </div>
                      <div className="px-6 py-3 rounded-full bg-blue-50/80 backdrop-blur-sm flex items-center gap-2 hover:bg-blue-50 transition-colors">
                        <span className="text-blue-600">⭐</span>
                        <span className="text-sm font-medium text-blue-700">
                          Excellence Driven
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block pt-50"
            >
              <div className="relative aspect-square">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-blue-50/30 rounded-full blur-3xl transform animate-pulse" />

                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <motion.img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744387838/Business_App/xnsb7uhgjwc3mcwizquy.jpg"
                    alt="Global Trade Network"
                    className="w-full h-full object-cover"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Core Values Section with new background */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-spice-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-spice-text max-w-2xl mx-auto">
              The principles that guide our journey towards excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative rounded-2xl border p-2 bg-white/50 backdrop-blur-sm">
                  <GlowingEffect spread={40} glow={true} />
                  <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-glossy-hover transition-all text-center">
                    <span className="text-4xl mb-4 block">{value.icon}</span>
                    <h3 className="font-display text-xl font-bold text-spice-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-spice-text">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission & Vision Section with subtle gradient */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            {/* Mission Card with enhanced styling */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="relative rounded-2xl border p-2 md:rounded-3xl md:p-3 h-full bg-white/50 backdrop-blur-sm">
                <GlowingEffect spread={40} glow={true} />
                <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-glossy-hover transition-all h-full">
                  <h2 className="font-display text-3xl font-bold text-spice-primary mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-spice-text leading-relaxed">
                    To deliver premium quality Indian agricultural products to
                    global markets while ensuring sustainable farming practices
                    and fair trade relationships with our farmers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card with enhanced styling */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="relative rounded-2xl border p-2 md:rounded-3xl md:p-3 h-full bg-white/50 backdrop-blur-sm">
                <GlowingEffect spread={40} glow={true} />
                <div className="bg-white p-8 rounded-xl shadow-card hover:shadow-glossy-hover transition-all h-full">
                  <h2 className="font-display text-3xl font-bold text-spice-primary mb-6">
                    Our Vision
                  </h2>
                  <p className="text-lg text-spice-text leading-relaxed">
                    To become the most trusted global partner in agricultural
                    exports, known for quality, reliability, and commitment to
                    sustainable development.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section with new background */}
      <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-card hover:shadow-glossy-hover transition-all"
              >
                <h3 className="font-display text-4xl font-bold text-spice-primary">
                  {stat.number}
                </h3>
                <p className="font-body text-spice-text">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Timeline Section with enhanced styling */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-4xl font-bold text-spice-primary mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="relative max-w-7xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20 rounded-full" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 space-y-24"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-12`}
                >
                  {/* Year Bubble */}
                  <div className="flex-none order-1 md:order-none">
                    <div className="relative">
                      <div className="absolute inset-0 bg-spice-primary/20 rounded-full blur-xl transform scale-150" />
                      <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-spice-primary to-blue-600 rounded-full text-white font-bold text-2xl shadow-blue-glow">
                        {item.year}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative group">
                      <div className="relative rounded-2xl border-2 border-blue-100 p-1">
                        <GlowingEffect spread={30} glow={true} />
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-card group-hover:shadow-glossy-hover transition-all">
                          <h3 className="font-display text-2xl font-bold text-spice-primary mb-4">
                            {item.title}
                          </h3>
                          <p className="text-lg text-spice-text leading-relaxed">
                            {item.description}
                          </p>

                          {/* Optional Achievement Badge */}
                          {index === 1 && (
                            <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                              <span className="text-blue-600">🏆</span>
                              <span className="text-sm font-medium text-blue-600">
                                ISO 9001:2015 Certified
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact Section with new gradient */}
      <section className="py-24 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold text-spice-primary mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-spice-text mb-8">
              Ready to explore how we can help grow your business? Get in touch
              with our team.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-spice-primary text-white px-8 py-3 rounded-full font-semibold 
              hover:bg-spice-primary/90 transition-colors shadow-blue-glow hover:-translate-y-1 duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;