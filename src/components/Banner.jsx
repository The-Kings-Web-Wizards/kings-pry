import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';

function Banner({ className, children, title, subtitle, ctaText, ctaPath }) {
  const titleParts = title.split(' ');
  const firstWord = titleParts[0];
  const remainingWords = titleParts.slice(1).join(' ');

  return (
    <section className={`banner relative overflow-hidden ${className} isolate bg-[#004d24] text-white`}>
      {children}
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 z-0" />
      
      {/*  light circles */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-400 rounded-full filter blur-[80px] opacity-10 z-0"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-300 rounded-full filter blur-[80px] opacity-10 z-0"></div>
      
      {/* Content container */}
      <div className="relative px-6 md:px-12 lg:px-24 flex flex-col justify-center items-start space-y-4 md:space-y-6 h-full z-10 py-16">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg max-w-2xl leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-200">
            {firstWord}
          </span>{' '}
          <span className="text-white/90">{remainingWords}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed z-20 font-medium"
        >
          {subtitle}
        </motion.p>
        
        {/* CTA button - school-themed */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
  path={ctaPath}
  name={ctaText}
  variant="ghost" 
 className="px-8 py-3 bg-amber-400  rounded-lg text-white font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
/>
        </motion.div>
      </div>

      {/* Decorative academic elements */}

      <div className="absolute bottom-8 right-8 z-10 opacity-100">
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="white">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/*  floating elements */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-white/10 blur-[1px] animate-float1"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-blue-300/20 blur-[1px] animate-float2"></div>
      <div className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-green-200/20 blur-[1px] animate-float3"></div>



      <div className="absolute top-4 left-4 opacity-80">
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white">
          <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

export default Banner;