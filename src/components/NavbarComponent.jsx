import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "../../src/assets/Logo.png"
// Navigation items
const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutus" },
  { name: "Products", link: "/products" },
  { name: "Brochure", link: "/brochure" },
  { name: "Certification", link: "/certification" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact Us", link: "/contactus" },
];

export default function NavbarComponent() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      {/* Desktop Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(20px)" : "blur(12px)",
          boxShadow: visible 
            ? "0 8px 30px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 102, 204, 0.1)" 
            : "none",
          backgroundColor: visible 
            ? "rgba(255, 255, 255, 0.95)" 
            : "rgba(255, 255, 255, 0.9)",
          width: visible ? "85%" : "95%",
          y: visible ? 16 : 12,
          borderBottom: visible ? "1px solid rgba(226, 232, 240, 0.5)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className="relative z-50 mx-auto hidden w-full max-w-7xl items-center justify-between rounded-2xl lg:flex"
      >
         <Link
             to="/"
             className="relative z-20 flex items-center space-x-3 px-8 py-5 font-display text-xl font-bold text-spice-primary"
            >
            <img src={Logo} alt="Briskwell Logo" className="w-10 h-10 rounded-full" />
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-spice-primary to-spice-secondary shadow-blue-glow">
            <span className="text-white font-display font-bold">B</span>
        </div>
            <span>BRISKWELL</span>
        </Link>

        {/* Desktop Navigation Items */}
        <nav className="flex items-center px-8 py-5">
          {navItems.map((item, idx) => (
            <Link
              key={`link-${idx}`}
              to={item.link}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={`relative px-4 py-2 font-body font-medium transition-colors ${
                location.pathname === item.link 
                  ? "text-spice-primary" 
                  : "text-spice-text hover:text-spice-primary"
              }`}
            >
              {(location.pathname === item.link || hovered === idx) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 -z-10 h-full w-full rounded-md bg-gradient-to-b from-white to-blue-50 border border-spice-border/30"
                  style={{
                    boxShadow: "0 2px 10px rgba(0, 102, 204, 0.06), 0 0 1px rgba(0, 102, 204, 0.1)"
                  }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
          <Link 
            to="/contactus" 
            className="ml-5 rounded-md blue-gradient px-6 py-3 font-body font-medium text-white transition-all shadow-blue-glow hover:shadow-glossy-hover button"
          >
            Get a Quote
          </Link>
        </nav>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(20px)" : "blur(12px)",
          boxShadow: visible 
            ? "0 8px 30px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 102, 204, 0.1)" 
            : "none",
          backgroundColor: visible 
            ? "rgba(255, 255, 255, 0.95)" 
            : "rgba(255, 255, 255, 0.9)",
          width: visible ? "92%" : "95%",
          y: visible ? 14 : 10,
          borderBottom: visible ? "1px solid rgba(226, 232, 240, 0.5)" : "none"
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-xl px-4 py-3 lg:hidden"
      >
        <div className="flex w-full flex-row items-center justify-between">
          {/* Mobile Logo */}
          <Link
            to="/"
            className="relative z-20 flex items-center space-x-2 font-display font-bold text-spice-primary"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-spice-primary to-spice-secondary shadow-sm">
              <span className="text-white font-display font-bold text-sm">B</span>
            </div>
            <span>BRISKWELL</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button 
            className="text-spice-primary p-2 rounded-md hover:bg-blue-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-1 rounded-lg bg-white border border-spice-border shadow-glossy"
            >
              <div className="w-full p-4 flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    to={item.link}
                    className={`w-full px-4 py-3 font-body rounded-md transition-colors ${
                      location.pathname === item.link 
                        ? "bg-blue-50 text-spice-primary font-medium" 
                        : "text-spice-text hover:bg-blue-50/40"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link 
                  to="/contactus" 
                  className="mt-2 w-full rounded-md blue-gradient px-4 py-3 font-body text-center text-white shadow-blue-glow"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}