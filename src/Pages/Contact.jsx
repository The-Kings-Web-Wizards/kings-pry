import React from 'react'
import Banner from '../components/Banner'

function Contact() {
  return (
    <>
      {/*  Banner Section */}
      <Banner
        title="Upcoming Events at Kings Pry"
        subtitle="Where Learning Meets Innovation"
        ctaText="View Calendar"
        ctaPath="/calendar"
        className='w-full h-[90vh] banner text-white relative overflow-hidden'
      >
        {/* <img 
          src={schoolImage} 
          alt="Kings Pry School" 
          className="w-[400px] h-full object-cover absolute top-[20vh] rounded-3xl right-20 -z-20" 
        /> */}
        <div className="absolute inset-0 bg-gradient-t from-[#004d24] to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 -z-10"></div>
      </Banner>
    </>
  )
}

export default Contact