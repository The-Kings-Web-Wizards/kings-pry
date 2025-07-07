


import React from 'react'
import { Link } from 'react-router-dom'

function Cards({children, className,imageUrl,title,description,iconUrl,Btntext,path}) {
 
  return (
    <div className={`card ${className}`}>
      {children}
        <div className="img-holder  w-full mx-auto flex flex-col justify-center align-middle">
        {imageUrl && <img src={imageUrl} alt={title} className='w-full h-24 object-cover object-center' /> }
        {iconUrl && <img src={iconUrl} alt={title} className="card-icon w-[32px] h-[32px] object-center" />}
        </div>
        <div className="text-holder px-2.5 ">
           <h3 className='font-bold text-lg text-amber-400'>{title}</h3>
          {description && <p className="card-description text-[16px] font-light">{description}</p>}
          {Btntext && <Link to={path}>{Btntext}</Link>}
          </div>
          
    </div>
  )
}

export default Cards