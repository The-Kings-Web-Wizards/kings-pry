import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#004D24] text-gray-100 py-12 px-4 min-h-[300px] relative ">
      {/* Decorative elements */}
      <div className="absolute inset-0 ">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-amber-400 filter blur-md"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 rounded-full bg-white filter blur-md"></div>
        </div>
      </div>

      {/* Logo with animation */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-[70%] rounded-full bg-white p-2 shadow-lg hover:scale-105 transition-transform duration-300">
        <img 
          src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png" 
          alt="School Logo" 
          className="w-24 h-24 object-cover z-30"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto relative z-10 mt-30">
        {/* Horizontal Line */}
        <hr className="border-gray-400 opacity-30 mb-8" />

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-white">
          <Link 
            to="/" 
            className="hover:text-amber-400 transition-colors duration-200 text-lg font-semibold relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/events" 
            className="hover:text-amber-400 transition-colors duration-200 text-lg font-semibold relative group"
          >
            Activities
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/about" 
            className="hover:text-amber-400 transition-colors duration-200 text-lg font-semibold relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-amber-400 transition-colors duration-200 text-lg font-semibold relative group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/gallery" 
            className="hover:text-amber-400 transition-colors duration-200 text-lg font-semibold relative group"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Copyright  */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-200">
          <div className="text-sm font-medium">
            © {new Date().getFullYear()} {(import.meta.env.VITE_SCHOOL_NAME || 'Our Primary School')}. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200 font-medium"
              aria-label="View sitemap"
            >
              Sitemap
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200 font-medium"
              aria-label="View stotes designs"
            >
              Stotes Designs
            </a>
          </div>
        </div>
   
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="mt-8 mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-all duration-300 shadow-md hover:shadow-lg"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;