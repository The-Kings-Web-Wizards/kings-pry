import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Banner({ className, children, title, subtitle, ctaText, ctaPath }) {
 
  const titleParts = title.split(' ');
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(' ');

  return (
    <section className={`banner relative overflow-hidden ${className} isolate bg-[#004d24]`}>
     
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
            className=" px-8  py-4 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-black font-bold  rounded-xl text-lg md:text-xl transition-all duration-300 group overflow-hidden "
          >
            
              {ctaText}
             
            
            
           
          </Link>
        </motion.div>
      </div>

      {/*  floating elements */}
      <div className="absolute top-1/4 right-1/4 w-10 h-4 rounded-full bg-amber-400/80 blur-[1px] animate-float1"></div>
      <div className="absolute top-1/3 left-1/4 w-10 h-4 rounded-full bg-white/60 blur-[1px] animate-float2"></div>
      <div className="absolute bottom-1/4 right-1/3 w-10 h-4 rounded-full bg-white/60 blur-[1px] animate-float3"></div>
    </section>
  );
}

export default Banner;