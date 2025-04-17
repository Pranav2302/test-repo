import React from "react";
import { motion } from "framer-motion";

export default function Certification() {
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      image:
        "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303071/Business_App/achxp9ucdda2ajbjeygp.jpg",
      additionalInfo: "International Standard for Quality Management",
    },
    {
      id: 2,
      title: "HACCP",
      description: "Food Safety Management System",
      image:
        "https://images.unsplash.com/photo-145416580406-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Hazard Analysis Critical Control Point",
    },
    {
      id: 3,
      title: "GMP",
      description: "Good Manufacturing Practices",
      image:
        "https://images.unsplash.com/photo-159825006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Manufacturing Quality Standards",
    },
    {
      id: 4,
      title: "FSSAI",
      description: "Food Safety and Standards Authority of India",
      image:
        "https://images.unsplash.com/photo-155387752-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Indian Food Safety Certification",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744639795/Business_App/p845aqpjlzzc3ya5adaw.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our Accreditations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
            >
              Committed to maintaining the highest standards of quality and
              safety in global trade
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-blue-900 to-transparent" />
      </section>

      {/* Certificates Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-grey-200 text-center mb-12 text-lg"
          >
            We have received several awards and certificates to prove our
            genuinity and consistency in the market.
          </motion.p>

          <div className="max-w-4xl mx-auto space-y-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Content */}
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 p-2 rounded-xl hover:border-blue-300/30 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white/90 text-sm backdrop-blur-sm bg-black/30 p-2 rounded-lg">
                          {cert.additionalInfo}
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-blue-100/80 group-hover:text-blue-100 transition-colors">
                    {cert.description}
                  </p>

                  {/* Badge */}
                  <div className="mt-4 inline-flex items-center gap-2 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-400/20">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-blue-200">Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-black-200/90 max-w-2xl mx-auto leading-relaxed text-bold text-lg">
              Our commitment to quality is backed by international
              certifications, ensuring we meet the highest standards in food
              safety, manufacturing, and quality management.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}