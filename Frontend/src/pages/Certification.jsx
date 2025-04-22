import React from "react";
import { motion } from "framer-motion";

export default function Certification() {
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Quality Management System Certification",
      image:
        "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303071/Business_App/achxp9ucdda2ajbjeyp.jpg",
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

      {/* Logos Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            {/* Logo 1 - APEDA */}
            <div className="relative group">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-full rounded-lg p-4 hover:bg-blue-50/30 transition-all duration-300 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744317689/Business_App/mhqp2csjd1e7tct25k8k.jpg"
                    alt="APEDA"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Logo 2 - HACCP */}
            <div className="relative group">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-full rounded-lg p-4 hover:bg-blue-50/30 transition-all duration-300 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744317174/Business_App/rn3pturifgxsxumysaxr.jpg"
                    alt="HACCP"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Logo 3 - FSSAI */}
            <div className="relative group">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-full rounded-lg p-4 hover:bg-blue-50/30 transition-all duration-300 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744317372/Business_App/woowp1mlqjrb819q9tuo.jpg"
                    alt="FSSAI"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Logo 4 - ISO */}
            <div className="relative group">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-full rounded-lg p-4 hover:bg-blue-50/30 transition-all duration-300 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744316999/Business_App/ftayaeccvxbc4hj7uyas.jpg"
                    alt="ISO 9001:2015"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Logo 5 - FSSAI */}
            <div className="relative group">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-full rounded-lg p-4 hover:bg-blue-50/30 transition-all duration-300 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744317274/Business_App/kjxrnwmj9iq4ofkbrfeu.jpg"
                    alt="ISO 9001:2015"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-black-200/90 max-w-2xl mx-auto leading-relaxed text-bold text-lg">
          Our commitment to quality is backed by international certifications,
          ensuring we meet the highest standards in food safety, manufacturing,
          and quality management.
        </p>
      </motion.div>
    </div>
  );
}
