import React from "react";
import { motion } from "framer-motion";

export default function Certification() {
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      image:
        "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "International Standard for Quality Management",
    },
    {
      id: 2,
      title: "HACCP",
      description: "Food Safety Management System",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Hazard Analysis Critical Control Point",
    },
    {
      id: 3,
      title: "GMP",
      description: "Good Manufacturing Practices",
      image:
        "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Manufacturing Quality Standards",
    },
    {
      id: 4,
      title: "FSSAI",
      description: "Food Safety and Standards Authority of India",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      additionalInfo: "Indian Food Safety Certification",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-900 via-white-800 to-white-900 min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(206, 178, 178, 0.83) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white text-center mb-4"
        >
          Our Certifications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-200 text-center mb-12 text-lg"
        >
          Committed to International Quality Standards
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />

              {/* Card Content */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-blue-300/30 transition-all duration-300">
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
          <p className="text-blue-200/90 max-w-2xl mx-auto leading-relaxed">
            Our commitment to quality is backed by international certifications,
            ensuring we meet the highest standards in food safety,
            manufacturing, and quality management.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
