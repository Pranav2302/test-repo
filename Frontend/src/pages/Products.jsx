import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlowingEffect } from "../components/ui/glowing-effect";

export default function Products() {
  const { t } = useTranslation();
  const location = useLocation();
  const initialCategory = location.state?.category || "all";
  const headerRef = useRef(null);

  // Define product categories
  const categories = [
    { id: "all", label: t("products.filters.all") },
    { id: "Indian spices", label: t("products.filters.Indian-spices") },
    { id: "pulses", label: t("products.filters.pulses") },
    // { id: "sugar", label: t('products.filters.sugar') },
    { id: "jaggery", label: t("products.filters.jaggery") },
    // { id: "rice", label: t('products.filters.rice') },
    { id: "grains", label: t("products.filters.grains") },
    { id: "vegetables", label: t("products.filters.vegetables") },
    { id: "fruits", label: t("products.filters.fruits") },
  ];

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745317881/Business_App/qs7yq56djxqyq27zcpay.jpg",
      alt: "Turmeric (Haldi)",
      title: "Turmeric Finger",
      description:
        "Essential Indian spice known for its vibrant color and medicinal properties. A staple in Indian cuisine.",
      category: "Indian spices",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745318295/Business_App/pg5oqy3kzhglha7uzk1e.jpg",
      alt: "Turmeric Powder",
      title: "Turmeric Powder",
      description:
        "Sweet and intensely aromatic pods used in both savory dishes and desserts across Indian cuisine.",
      category: "Indian spices",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744901901/Business_App/bkexgml07eovlikgwoqc.jpg",
      alt: "Cumin (Jira)",
      title: "Cumin (Jira)",
      description:
        "Aromatic seeds with a distinctive earthy flavor, widely used in Indian cooking for tempering and seasoning.",
      category: "Indian spices",
    },

    {
      id: 4,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745318489/Business_App/wff323q7cqbif4prwa5o.jpg",
      alt: "Red Chilli",
      title: "Red Chilli",
      description:
        "Red chillies add vibrant color and bold heat to dishes. They are rich in flavor, vitamins, and antioxidants, making them both spicy and healthy.",
      category: "Indian spices",
    },

    {
      id: 5,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745318718/Business_App/qaabrt5yu3jbgez0ljqw.jpg",
      alt: "Coriander Seeds",
      title: "Coriander Seeds",
      description:
        "Mildly sweet and citrusy seeds that form the base of many Indian spice blends and curry powders.",
      category: "Indian spices",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745318819/Business_App/hjj788y4bbi0d1tfiw4t.jpg",
      alt: "Ginger Powder",
      title: "Ginger Powder",
      description:
        "Ginger powder offers a warm, spicy flavor perfect for cooking and baking. It’s known for its health benefits, including aiding digestion and reducing inflammation.",
      category: "Indian spices",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744900957/Business_App/ho0xsgmlhjfunywrzfku.jpg",
      alt: "Garam Masala",
      title: "Garam Masala",
      description:
        "Complex aromatic spice blend featuring cardamom, cinnamon, cloves, and other warming spices for curries and gravies.",
      category: "Indian spices",
    },
    // {
    //   id: 8,
    //   src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744902594/Business_App/or7euhpp5qbzu8ujhfaf.jpg",
    //   alt: "Black Cardamom (Kali Ilayachi)",
    //   title: "Black Cardamom (Kali Ilayachi)",
    //   description:
    //     "Smoky, robust pods used in savory dishes, biryanis, and slow-cooked meat preparations.",
    //   category: "spices",
    // },
    {
      id: 9,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744901446/Business_App/fwhvtrzogvfwsbji6lb0.jpg",
      alt: "Ginger (Adrak)",
      title: "Ginger (Adrak)",
      description:
        "Fresh, aromatic rhizome with warming properties, essential in countless Indian recipes and medicinal preparations.",
      category: "Indian spices",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745319118/Business_App/w1oxw5jcdx3xxqyfmp2o.jpg",
      alt: "Pomegranate",
      title: "Pomegranate",
      description:
        "Pomegranate is a nutrient-rich fruit known for its juicy seeds, sweet-tart flavor, and powerful antioxidant benefits.",
      category: "fruits",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745319254/Business_App/mmzk976d325c0jz5jydl.jpg",
      alt: "Sugar",
      title: "Premium Sugar",
      description:
        "High-quality refined and raw sugar available in various grades for commercial use.",
      category: "jaggery",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745319391/Business_App/dmt8szwxlhj4pxg5kghr.jpg",
      alt: "Jaggery",
      title: "Organic Jaggery",
      description:
        "Traditional jaggery production methods combined with organic farming practices.",
      category: "jaggery",
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745319483/Business_App/yoy46ozgpzjie37opu95.jpg",
      alt: "Rice",
      title: "Premium Rice",
      description:
        "Finest basmati and non-basmati rice varieties known for their aroma, taste and quality.",
      category: "grains",
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745322749/Business_App/r4x4tq8axtgt9qixgfdr.jpg",
      alt: "Mug Dal",
      title: " Mug Dal",
      description:
        "High-quality pulses packaged in convenient cups for easy cooking and storage.",
      category: "pulses",
    },
    {
      id: 15,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745322932/Business_App/xfyjae9kgdp6pnymktne.jpg",
      alt: "Tur Dal",
      title: "Tur Dal",
      description:
        "A selection of premium pulses including lentils, chickpeas and beans.",
      category: "pulses",
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/if7fmackdd34uy6guyys.jpg",
      alt: "Vegetables",
      title: "Fresh Vegetables",
      description:
        "Farm-fresh vegetables sourced from local farmers with sustainable practices.",
      category: "vegetables",
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/rnoohbyhkfxfy7ipinen.jpg",
      alt: "Fruits",
      title: "Exotic Fruits",
      description:
        "Fresh, juicy fruits from across India's diverse growing regions.",
      category: "fruits",
    },
    // {
    //   id: 18,
    //   src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303070/Business_App/zmjjkou75h4w7igsopi8.jpg",
    //   alt: "Wheat",
    //   title: "Premium Wheat",
    //   description:
    //     "High-quality wheat grain suitable for various culinary applications.",
    //   category: "grains",
    // },
    {
      id: 19,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745323698/Business_App/zdjdbq7lxhg8j1sfq8te.jpg",
      alt: "Jowar",
      title: "Jowar Millet",
      description:
        "Nutrient-rich millet grain that's gluten-free and versatile in cooking applications.",
      category: "grains",
    },
    {
      id: 20,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745323111/Business_App/zqiueou8zptpgrwsuene.jpg",
      alt: "Masoor Dal",
      title: "Masoor Dal",
      description:
        "Masoor dal is a nutritious red lentil known for its soft texture, earthy taste, and rich protein and fiber content.",
      category: "pulses",
    },
    {
      id: 21,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745323379/Business_App/pkh83vvwsh9qcdhsc0og.jpg",
      alt: "Onion",
      title: "Onions",
      description:
        "Onions add bold flavor and natural sweetness to dishes, while providing antioxidants and essential nutrients.",
      category: "vegetables",
    },
    // {
    //   id: 22,
    //   src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744303064/Business_App/jurejtucymmfjpiy8ypk.jpg",
    //   alt: "White Onion",
    //   title: "White Onions",
    //   description:
    //     "Premium white onions known for their mild flavor and versatility in cooking.",
    //   category: "vegetables",
    // },
    {
      id: 23,
      src: "https://res.cloudinary.com/doxrnqdwn/image/upload/v1745323579/Business_App/ikso0bvnxr2bx0auctz8.jpg",
      alt: "Bajra",
      title: "Bajra Millet",
      description:
        "Nutritious pearl millet that's a staple in many traditional Indian dishes.",
      category: "grains",
    },
  ];

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Calculate parallax effect values for subtle animation
  const headerHeight = 600; // Fixed height for the hero section
  const parallaxValue = Math.min(scrollPosition * 0.3, 150); // Reduced parallax effect
  const opacityValue = Math.max(
    0,
    Math.min(1, 1 - scrollPosition / (headerHeight * 0.7))
  );

  return (
    <>
      {/* Full-screen hero section with clean background image */}
      <div
        ref={headerRef}
        className="relative w-full h-[600px] overflow-hidden"
      >
        {/* Background image with parallax effect - no overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/doxrnqdwn/image/upload/v1744895641/Business_App/pyck6lqskz5iomjjkmzp.jpg)`,
            // transform: `translateY(${parallaxValue}px)`,
          }}
        />

        {/* Content container - white text directly on image */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ opacity: opacityValue }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {t("products.page.title")}
            </h1>
            <p className="font-body text-xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
              {t("products.page.description")}
            </p>

            {/* Animated down arrow */}
            <motion.div
              className="mt-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-10 h-10 mx-auto text-white drop-shadow-md"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "blue-gradient text-white shadow-blue-glow"
                    : "bg-white border border-spice-border hover:bg-blue-50 text-spice-text"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  className="relative overflow-hidden rounded-xl shadow-card group cursor-pointer bg-white"
                  onClick={() => setSelectedProduct(product)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative w-full aspect-square rounded-t-xl">
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
                      className="w-full h-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Simple product info below image */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-spice-primary mb-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-spice-text/80">
                      {product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No products message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-spice-text">
                {t("products.noProducts")}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full rounded-xl overflow-hidden max-h-[90vh] my-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-blue-500/20 blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Close button - positioned absolutely at the top-right and ensure it's always visible */}
              <motion.button
                className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors z-30 shadow-lg"
                onClick={() => setSelectedProduct(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              {/* Content with improved layout for mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-white rounded-xl relative z-10 p-4 md:p-6 overflow-y-auto">
                {/* Image with controlled height on mobile */}
                <div className="h-64 md:h-auto overflow-hidden rounded-lg">
                  <img
                    src={selectedProduct.src}
                    alt={selectedProduct.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-3xl font-bold text-spice-primary mb-2 md:mb-3 pr-8">
                      {selectedProduct.title}
                    </h2>
                    <p className="text-sm md:text-base text-spice-text mb-4 md:mb-6">
                      {selectedProduct.description}
                    </p>

                    {/* Product details - simplified for mobile */}
                    <div className="space-y-2 md:space-y-4">
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-spice-primary mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-spice-dark text-sm md:text-base">
                            Quality Assurance
                          </h4>
                          <p className="text-xs md:text-sm text-spice-text">
                            All our products undergo rigorous quality checks
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-spice-primary mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-spice-dark text-sm md:text-base">
                            Origin
                          </h4>
                          <p className="text-xs md:text-sm text-spice-text">
                            Sourced from premium growing regions in India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-spice-primary mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-spice-dark text-sm md:text-base">
                            Packaging
                          </h4>
                          <p className="text-xs md:text-sm text-spice-text">
                            Available in various packaging options for bulk and
                            retail
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-8">
                    <button
                      onClick={() => (window.location.href = "/contactus")}
                      className="w-full rounded-md bg-white px-4 md:px-8 py-2 md:py-3 font-body font-medium text-black transition-all shadow-md hover:shadow-blue-glow hover:-translate-y-0.5 text-sm md:text-base"
                    >
                      Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
