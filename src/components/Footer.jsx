import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-spice-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-xl font-bold mb-4">
              BRISKWELL INTERNATIONAL
            </h3>
            <p className="text-spice-secondary mb-4 font-body">
              Premium exporters of fine spices, sugar, and traditional products
              from India to the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-spice-secondary"
              >
                <svg
                  className="w-6 h-6"
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
                className="text-white hover:text-spice-secondary"
              >
                <svg
                  className="w-6 h-6"
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
                className="text-white hover:text-spice-secondary"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-spice-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link
                  to="/"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="hover:text-spice-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/certification"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-spice-secondary">
              Our Products
            </h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link
                  to="/products"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Spices
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Sugar & Jaggery
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Rice & Grains
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Tea & Coffee
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-spice-secondary transition-colors"
                >
                  Pickles & Chutneys
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}

          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-spice-secondary">
              Find us here
            </h3>

            {/* Google Maps iframe */}
            <div className="w-full max-w-md h-40 rounded-lg overflow-hidden border-2 border-spice-secondary/30">
              <iframe
                src="https://www.googale.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.9447196750266!2d73.73249447496671!3d18.666476482455586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1170f9e675f%3A0x59f8af6f3985c3fb!2sLotus%20Sanskruti!5e0!3m2!1sen!2sin!4v1744188130857!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Briskwell International Location"
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
          </div>
        </div>

        <ul className="space-y-2 font-body mb-4">
          <li className="flex items-start gap-3">
            <svg
              className="w-5 h-5 mt-1 text-spice-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>
              123 Business Avenue, Industrial Area, Mumbai, India - 400001
            </span>
          </li>
          <li className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-spice-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <a
              href="mailto:info@briskwell.com"
              className="hover:text-spice-secondary transition-colors"
            >
              info@briskwell.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-spice-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <a
              href="tel:+911234567890"
              className="hover:text-spice-secondary transition-colors"
            >
              +91 123 456 7890
            </a>
          </li>
        </ul>

        <div className="mt-12 border-t border-spice-secondary/30 pt-8 text-center font-body">
          <p>
            © {new Date().getFullYear()} Briskwell International. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
