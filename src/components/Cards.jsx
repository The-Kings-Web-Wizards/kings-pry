
import React from 'react'

function Cards(url,title,description,btntext) {
    
  return (
    <section flex  >
    <div className=' flex flex-col w-200px'>
        <div className="img">
            <img src={url} alt={title} />
        </div>
        <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{btntext}</button>
        </div>
    </div>


     <div className='flex flex-col w-200px'>
        <div className="img">
            <img src={url} alt={title} />
        </div>
        <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{btntext}</button>
        </div>
    </div>

 <div className='flex flex-col w-200px'>
        <div className="img">
            <img src={url} alt={title} />
        </div>
        <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{btntext}</button>
        </div>
    </div>

     <div className='flex flex-col w-200px'>
        <div className="img">
            <img src={url} alt={title} />
        </div>
        <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{btntext}</button>
        </div>
    </div>
    </section>
  )
}

export default Cards