import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Banner({ className, children, title, subtitle, ctaText, ctaPath }) {
 
  const titleParts = title.split(' ');
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(' ');

  return (
    <section className={`banner relative overflow-hidden ${className} isolate`}>
     
      {children}
      
      
      <div className="absolute inset-0  z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/90 z-0" />
      
      
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px] opacity-20 z-0"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500 rounded-full filter blur-[80px] opacity-20 z-0"></div>
      
      {/* Content container */}
      <div className="relative px-6 md:px-12 lg:px-24 flex flex-col justify-center items-start space-y-4 md:space-y-6 h-full z-10">
       
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl max-w-4xl leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
            {firstWord}
          </span>{' '}
          <span className="text-white/90">{remainingWords}</span>
        </motion.h1>

      
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-lg md:text-2xl max-w-2xl leading-relaxed z-20"
        >
          {subtitle}
        </motion.p>
        
        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            to={ctaPath} 
            className="relative px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-black font-bold  rounded-xl text-lg md:text-xl transition-all duration-300 group overflow-hidden "
          >
            <span className="relative z-10 flex items-center">
              {ctaText}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </Link>
        </motion.div>
      </div>

      {/*  floating elements */}
      <div className="absolute top-1/4 right-1/4 w-10 h-4 rounded-full bg-amber-400/80 blur-[1px] animate-float1"></div>
      <div className="absolute top-1/3 left-1/4 w-10 h-4 rounded-full bg-white/60 blur-[1px] animate-float2"></div>
      <div className="absolute bottom-1/4 right-1/3 w-10 h-4 rounded-full bg-[#004d24] blur-[1px] animate-float3"></div>
    </section>
  );
}

export default Banner;