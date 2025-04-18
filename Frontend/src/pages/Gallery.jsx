import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Gallery categories
  const categories = ["Images", "Videos"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106313/Business_App/qtpnhox07urfme1torrk.jpg",
      alt: "Farmers in Field",
      title: "Our Farming Partners",
      description:
        "Working closely with local farmers to ensure sustainable agricultural practices.",
      category: "Images",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303071/Business_App/lke9ucjiklhaajgikvkr.jpg",
      alt: "Harvesting Process",
      title: "Harvest Season",
      description:
        "Farmers harvesting crops using traditional and modern methods.",
      category: "Images",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/if7fmackdd34uy6guyys.jpg",
      alt: "Organic Farming",
      title: "Organic Cultivation",
      description:
        "Promoting organic farming practices for better yield and sustainability.",
      category: "Images",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303069/Business_App/eir3jbhafkl4hthv3a8r.jpg",
      alt: "Farmer Training",
      title: "Farmer Education Program",
      description:
        "Regular training sessions to share modern farming techniques.",
      category: "Videos",
    },
  ];

  // Filter images based on category
  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/doxrnqdwn/image/upload/v1744972460/Business_App/yodt9st9oag7hdabcxs4.jpg"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center  items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 leading-relaxed max-w-2xl"
            >
              Explore our journey through images, from farm to global markets
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        {/* Category Filter */}
        <div className="container mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
