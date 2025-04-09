import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "../assets/Logo.png";

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

// Memoize navigation items to prevent unnecessary re-renders
const NavLinks = React.memo(({ items, location, hovered, setHovered, scrolled }) => {
  return items.map((item, idx) => (
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
          className="absolute inset-0 -z-10 h-full w-full rounded-md bg-white/20 backdrop-blur-sm border border-white/10"
          style={{
            boxShadow: scrolled ? "0 2px 10px rgba(0, 102, 204, 0.06)" : "none"
          }}
        />
      )}
      <span className="relative z-10">{item.name}</span>
    </Link>
  ));
});

export default function NavbarComponent() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [scrollRatio, setScrollRatio] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  // Use scroll ratio for smoother transitions
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Calculate a ratio between 0 and 1 for smoother transitions
    const newRatio = Math.min(1, Math.max(0, latest / 100));
    setScrollRatio(newRatio);
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <motion.header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      {/* Desktop Navigation */}
      <div className="mx-auto px-4 lg:px-8">
        <motion.div
          animate={{
            backdropFilter: `blur(${8 + scrollRatio * 4}px)`,
            backgroundColor: `rgba(255, 255, 255, ${scrollRatio * 0.1})`,
            boxShadow: scrollRatio > 0.6 
              ? "0 8px 30px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 102, 204, 0.1)" 
              : "none",
            padding: `${1.5 - scrollRatio * 0.75}rem 2rem`,
            borderRadius: `${scrollRatio * 1}rem`,
            width: `${100 - scrollRatio * 5}%`,
            marginTop: `${scrollRatio * 0.75}rem`,
            border: scrollRatio > 0.6
              ? "1px solid rgba(255, 255, 255, 0.3)"
              : "1px solid rgba(255, 255, 255, 0)"
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
          className="hidden lg:flex justify-between items-center"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 z-20 relative"
          >
            <img 
              src={Logo} 
              alt="Briskwell Logo" 
              className="h-10 w-10 rounded-full object-cover" 
            />
            <span className="font-display font-bold text-xl text-spice-primary">
              BRISKWELL
            </span>
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="flex items-center space-x-1">
            <NavLinks 
              items={navItems}
              location={location}
              hovered={hovered}
              setHovered={setHovered}
              scrolled={scrollRatio > 0.6}
            />
            <Link 
              to="/contactus" 
              className={`ml-4 rounded-md px-6 py-2.5 font-body font-medium transition-all blue-gradient text-white shadow-blue-glow hover:shadow-glossy-hover`}
            >
              Get a Quote
            </Link>
          </nav>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          animate={{
            backdropFilter: `blur(${8 + scrollRatio * 4}px)`,
            backgroundColor: isOpen 
              ? "rgba(255, 255, 255, 0.3)"
              : `rgba(255, 255, 255, ${scrollRatio * 0.1})`,
            boxShadow: (scrollRatio > 0.6 || isOpen)
              ? "0 8px 30px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 102, 204, 0.1)" 
              : "none",
            padding: `${1.0 - scrollRatio * 0.25}rem 1.5rem`,
            borderRadius: `${scrollRatio * 0.75}rem`,
            width: `${100 - scrollRatio * 5}%`,
            marginTop: `${scrollRatio * 0.75}rem`,
            border: (scrollRatio > 0.6 || isOpen)
              ? "1px solid rgba(255, 255, 255, 0.3)"
              : "1px solid rgba(255, 255, 255, 0)"
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
          className="flex lg:hidden justify-between items-center"
        >
          {/* Mobile Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-display font-bold text-spice-primary"
          >
            <img 
              src={Logo} 
              alt="Briskwell Logo" 
              className="h-8 w-8 rounded-full object-cover" 
            />
            <span>BRISKWELL</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 rounded-md text-spice-primary"
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
        </motion.div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/40 backdrop-blur-md shadow-lg mx-4 rounded-lg mt-2 overflow-hidden border border-white/30"
          >
            <div className="p-4 space-y-1">
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${
                    location.pathname === item.link 
                      ? "bg-blue-50/70 text-spice-primary" 
                      : "text-spice-text hover:bg-blue-50/40"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contactus"
                className="block w-full mt-3 px-4 py-3 rounded-md text-base font-medium text-center text-white blue-gradient shadow-blue-glow"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}