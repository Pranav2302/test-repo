import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { GlowingEffect } from "../components/ui/glow-effect";

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

// Cloudinary hero image
const heroImage = "https://res.cloudinary.com/doxrnqdwn/image/upload/v1744106313/Business_App/yxndry7q59y8khq9ekgp.jpg";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-spice-dark">
              Exporting India's Finest <span className="text-spice-primary">Spices & Commodities</span>
            </h1>
            <p className="font-body text-lg md:text-xl mb-8 text-spice-text">
              Premium suppliers of authentic Indian spices, sugar, jaggery, and agricultural products to global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="rounded-md bg-gradient-to-b from-spice-primary to-spice-accent hover:shadow-blue-glow hover:-translate-y-0.5 px-8 py-3 font-body font-medium text-white transition-all shadow-md">
                Explore Products
              </Link>
              <Link to="/contactus" className="rounded-md bg-white border border-spice-border hover:border-spice-primary hover:bg-blue-50/30 hover:shadow-md px-8 py-3 font-body font-medium text-spice-primary transition-all">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-spice-primary mb-3">Our Premium Products</h2>
            <p className="font-body text-spice-text max-w-2xl mx-auto">
              We export high-quality Indian commodities that meet international standards and satisfy global tastes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1 - Spices */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-glossy-hover transition-all relative"
            >
              <div className="h-48 overflow-hidden">
                <img src={productImages.spices} alt="Spices" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6 relative">
                <h3 className="font-display text-xl font-bold text-spice-primary mb-2">Premium Spices</h3>
                <p className="font-body text-spice-text mb-4">
                  Authentic Indian spices including turmeric, cardamom, black pepper, and cinnamon.
                </p>
                <Link to="/products" className="inline-block font-body font-medium text-spice-primary hover:text-spice-secondary">
                  View Products →
                </Link>
              </div>
              <GlowingEffect 
                variant="default"
                blur={10}
                inactiveZone={0.5}
                spread={15}
                glow={true}
                disabled={false}
                borderWidth={1}
              />
            </motion.div>

            {/* Product Card 2 - Sugar */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-glossy-hover transition-all relative"
            >
              <div className="h-48 overflow-hidden">
                <img src={productImages.sugar} alt="Sugar" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-spice-primary mb-2">Refined Sugar</h3>
                <p className="font-body text-spice-text mb-4">
                  High-quality refined and raw sugar available in various grades for commercial use.
                </p>
                <Link to="/products" className="inline-block font-body font-medium text-spice-primary hover:text-spice-secondary">
                  View Products →
                </Link>
              </div>
              <GlowingEffect 
                variant="default"
                blur={10}
                inactiveZone={0.5}
                spread={15}
                glow={true}
                disabled={false}
                borderWidth={1}
              />
            </motion.div>

            {/* Product Card 3 - Jaggery */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-glossy-hover transition-all relative"
            >
              <div className="h-48 overflow-hidden">
                <img src={productImages.jaggery} alt="Jaggery" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-spice-primary mb-2">Organic Jaggery</h3>
                <p className="font-body text-spice-text mb-4">
                  Traditional unrefined sugar with rich minerals and authentic taste from organic farms.
                </p>
                <Link to="/products" className="inline-block font-body font-medium text-spice-primary hover:text-spice-secondary">
                  View Products →
                </Link>
              </div>
              <GlowingEffect 
                variant="default"
                blur={10}
                inactiveZone={0.5}
                spread={15}
                glow={true}
                disabled={false}
                borderWidth={1}
              />
            </motion.div>

            {/* Product Card 4 - Rice */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-glossy-hover transition-all relative"
            >
              <div className="h-48 overflow-hidden">
                <img src={productImages.rice} alt="Rice" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-spice-primary mb-2">Basmati Rice</h3>
                <p className="font-body text-spice-text mb-4">
                  Fragrant, long-grain rice varieties from the foothills of the Himalayas.
                </p>
                <Link to="/products" className="inline-block font-body font-medium text-spice-primary hover:text-spice-secondary">
                  View Products →
                </Link>
              </div>
              <GlowingEffect 
                variant="default"
                blur={10}
                inactiveZone={0.5}
                spread={15}
                glow={true}
                disabled={false}
                borderWidth={1}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Reach Section - Globe Visualization */}
      <section className="py-10 bg-white">
  <Suspense fallback={
    <div className="h-[500px] w-full flex items-center justify-center">
      <div className="text-spice-primary">Loading globe visualization...</div>
    </div>
  }>
    <Githubglobe />
  </Suspense>
</section>

      {/* Connectivity Section - World Map */}
      <section className="py-10 bg-white">
  <Suspense fallback={
    <div className="h-[400px] w-full flex items-center justify-center">
      <div className="text-spice-primary">Loading map visualization...</div>
    </div>
  }>
    <WorldMapDemo />
  </Suspense>
</section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-spice-primary mb-3">Why Choose Briskwell International</h2>
            <p className="font-body text-spice-text max-w-2xl mx-auto">
              We take pride in our ethical business practices and commitment to quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Quality Assurance */}
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-glossy-hover transition-all relative">
              <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-spice-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-spice-primary mb-2 text-center">Quality Assurance</h3>
              <p className="font-body text-spice-text text-center">
                Our products undergo rigorous quality testing and meet international safety standards.
              </p>
              <GlowingEffect 
                variant="default"
                blur={10}
                inactiveZone={0.5}
                spread={15}
                glow={true}
                disabled={false}
                borderWidth={1}
              />
            </div>
            
            {/* Feature 2 - Ethical Sourcing */}
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-glossy-hover transition-all relative">
              <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-spice-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-spice-primary mb-2 text-center">Ethical Sourcing</h3>
              <p className="font-body text-spice-text text-center">
                We work directly with farmers to ensure fair trade practices and sustainable farming methods.
              </p>
              <GlowingEffect 
                variant="default"
                blur={10}
                inactiveZone={0.5}
                spread={15}
                glow={true}
                disabled={false}
                borderWidth={1}
              />
            </div>
            
            {/* Feature 3 - Timely Delivery */}
            <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-glossy-hover transition-all relative">
              <div className="w-16 h-16 bg-spice-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-spice-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-spice-primary mb-2 text-center">Timely Delivery</h3>
              <p className="font-body text-spice-text text-center">
                Our efficient logistics ensure your orders are delivered on time, every time.
              </p>
              <GlowingEffect 
                variant="default"
                blur={10}
                inactiveZone={0.5}
                spread={15}
                glow={true}
                disabled={false}
                borderWidth={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-spice-primary to-spice-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Import Premium Indian Products?</h2>
          <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a customized quote for your business.
          </p>
          <Link 
            to="/contactus" 
            className="inline-block rounded-md bg-white px-8 py-3 font-body font-bold text-spice-primary hover:bg-spice-light transition-all shadow-md hover:shadow-blue-glow hover:-translate-y-0.5"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}