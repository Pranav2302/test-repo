import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/BRISKWELLINTERNATIONLOGO.png";

export default function Footer() {
  return (
    <footer className="bg-spice-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Company Info with Logo - ENLARGED */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            {/* Increased logo size and adjusted margins */}
            <div className="mb-6 w-full flex justify-start">
              <img
                src={LOGO}
                alt="Briskwell International Logo"
                className="w-[240px] h-auto" // Increased size from 180px to 240px
              />
            </div>
            <p className="text-spice-secondary mb-6 font-body text-base text-black/90">
              Briskwell International Premium exporters of fine spices and
              authentic traditional products from India. Delivering quality,
              purity, and rich Indian heritage to global markets with a
              commitment to excellence.
            </p>
            <div className="flex space-x-5 mt-2">
              {" "}
              {/* Increased spacing between icons */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-spice-secondary transition-all transform hover:scale-110"
              >
                <svg
                  className="w-7 h-7" // Increased size from 6 to 7
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-spice-secondary transition-all transform hover:scale-110"
              >
                <svg
                  className="w-7 h-7" // Increased size
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-spice-secondary transition-all transform hover:scale-110"
              >
                <svg
                  className="w-7 h-7" // Increased size
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - Better spacing */}
          <div className="mt-2 md:mt-0 md:pl-22">
            <h3 className="font-display text-xl font-bold mb-5 text-spice-secondary">
              Quick Links
            </h3>
            <ul className="space-y-1 font-body text-base">
              {" "}
              {/* Increased spacing */}
              <li>
                <Link
                  to="/"
                  className="hover:text-spice-secondary transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="hover:text-spice-secondary transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-spice-secondary transition-colors inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/certification"
                  className="hover:text-spice-secondary transition-colors inline-block"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-spice-secondary transition-colors inline-block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="hover:text-spice-secondary transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Improved layout */}
          <div className="mt-2 md:mt-0">
            <h3 className="font-display text-xl font-bold mb-5 text-spice-secondary">
              Contact Information
            </h3>

            <div className="space-y-1">
              {" "}
              {/* Added vertical spacing between sections */}
              <div>
                <h4 className="font-semibold mb-2">Office Location:</h4>
                <p className="text-black/90 leading-relaxed">
                  A602, Lotus Sanskruti, bldg 2, Malawalenager 2, Mukai chowk,
                  Ravet- Kiwale, Pune-412101.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Get a Quote:</h4>
                <a
                  href="tel:+919922990829"
                  className="block text-white/90 hover:text-spice-secondary transition-colors"
                >
                  +91 9922990829
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <a
                  href="mailto:info@briskwellinternational.com"
                  className="block text-white/90 hover:text-spice-secondary transition-colors mb-1"
                >
                  info@briskwellinternational.com
                </a>
                <a
                  href="mailto:briskwellinternational@gmail.com"
                  className="block text-white/90 hover:text-spice-secondary transition-colors"
                >
                  briskwellinternational@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Find us here - Fixed map ratio */}
          <div className="mt-4 md:mt-0">
            <h3 className="font-display text-xl font-bold mb-5 text-spice-secondary">
              Find us here
            </h3>

            {/* Map - Added higher resolution */}
            <div className="relative h-[220px] w-full rounded-lg overflow-hidden shadow-lg mb-6 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-spice-primary/20 to-transparent z-10" />
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803957381615!2d72.8270832!3d19.0467798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzQ4LjQiTiA3MsKwNDknMzcuNSJF!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Copyright section with developer credits */}
        <div className="mt-12 border-t border-spice-secondary/30 pt-8 font-body">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-black/80 text-left">
                © {new Date().getFullYear()} Briskwell International. All rights
                reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-black/60">
                Developed with ❤️ by{" "}
                <a className="text-spice-secondary hover:text-spice-primary transition-colors">
                  Prajwal Korade-Pranav Kamble
                </a>{" "}
                <span className="px-2">|</span>
                <span className="text-black/60">PK</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
