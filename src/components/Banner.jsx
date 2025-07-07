import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
function Banner({className, children,title,subtitle,ctaText,ctaPath}) {
    
  return (
    <section className={`banner ${className}`}> 
    {children}
    <div className="container px-2.5 md:px-10 flex flex-col justify-center space-y-3 text-[14px] md:text-xl h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.3)]">
      <h1 className='text-xl md:text-4xl lg:text-6xl text-amber-400 font-extrabold '>{title}</h1>

      <p className='md:w-[50%]'>{subtitle}</p>
      <Link to={ctaPath} className=' text-center px-4 py-2 bg-amber-400 w-20 font-extrabold rounded-lg text-white  text-lg'>{ctaText}</Link>
    </div>

    </section>
  )
}

export default Banner