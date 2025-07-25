import React from 'react'
import { IoClose } from "react-icons/io5";

function Modal({open,onclose,children}) {
  

  return (
    <div 
    
    className={`
        
        fixed inset-0 flex justify-center items-center 
        transition-colors z-30
        ${open ? "visible bg-black" : "invisible"}
        
        `}
    
    >
        <button className='mx-auto text-3xl font-extrabold text-red-700 cursor-pointer absolute right-20 top-20 hover:text-red-500 transition-colors duration-300 -z-40'
        
        onClick={onclose}>
          
        <IoClose 
       />
        </button>

        {children}

    </div>
  )
}

export default Modal