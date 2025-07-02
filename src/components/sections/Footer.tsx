import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright section */}
          <div className="text-sm text-gray-400">
            © 2025 Smart Task Manager. All rights reserved.
          </div>

          {/* Social media links */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-400">Follow us on</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Contact Us
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Help Center
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
