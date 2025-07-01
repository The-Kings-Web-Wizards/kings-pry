import React, { useState } from 'react'
import { motion } from 'framer-motion';

function Slider() {
  const [positionIndex,setPositionIndex] = useState([0,1,2,3,4])
  const handleNext=()=>{

    setPositionIndex((prevIdexes)=>{
      const updatedIndexes = prevIdexes.map((prevIndex)=>(prevIndex + 1)%5)

      return updatedIndexes
    })

   
  };

   const images = [
    'https://res.cloudinary.com/dxrv8lauy/image/upload/v1751033302/ChatGPT_Image_Jun_25_2025_12_56_31_PM_nx5w0r.png',
    'https://res.cloudinary.com/dxrv8lauy/image/upload/v1751033302/ChatGPT_Image_Jun_25_2025_12_56_31_PM_nx5w0r.png',
    'https://res.cloudinary.com/dxrv8lauy/image/upload/v1751033302/ChatGPT_Image_Jun_25_2025_12_56_31_PM_nx5w0r.png',
    'https://res.cloudinary.com/dxrv8lauy/image/upload/v1751033302/ChatGPT_Image_Jun_25_2025_12_56_31_PM_nx5w0r.png',
    'https://res.cloudinary.com/dxrv8lauy/image/upload/v1751033302/ChatGPT_Image_Jun_25_2025_12_56_31_PM_nx5w0r.png',
    ]

    const positions = [
      'center',
      'left',
      'left1',
      'right',
      'right1'
    ];

    const imageVariants = {

      center: { x: '0%', scale: 1, zIndex: 5 },
      left1: { x: '-50%', scale: 0.7, zIndex: 2 },
      left: { x: '-90%', scale: 0.5, zIndex: 1 },
      right1: { x: '50%', scale: 0.7, zIndex: 2 },
      right: { x: '90%', scale: 0.5, zIndex: 1 },
    }


  return (
    <div className='flex items-center flex-col justify-center  h-[200px]'>

      {images.map((image, index) => (
        <motion.img

        
          key={index}
          src={image}
          alt={`slider-img-${index}`}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndex[index]]}
          variants={imageVariants}
          display ={3}
          transition={{duration:0.5}}
          style={{width:'40%',position:'absolute'}}
        />
      ))}


      <div>
       <button className='text-[#004d24] border mt-[200px] border-amber-400 py-2 bg-amber-300'

         onClick={handleNext}
         
         
         >next</button>
    </div>
      </div>
       
  )
}

export default Slider