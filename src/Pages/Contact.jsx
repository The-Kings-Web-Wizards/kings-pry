import React from 'react'
import Banner from '../components/Banner'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { useRef } from 'react';

function Contact() {

  const txtTitle = useRef();
  const emailValue = useRef();

  
  
  console.log(txtTitle)
  console.log(emailValue)


  const handleSubmit = (e) => {
   
    e.preventDefault();
    const title = txtTitle.current.value;
    const mail = emailValue.current.value
    alert(`Hi ${title} Thank you for contacting us we have sent a message to ${mail}  for further information`);
    txtTitle.current.value = "";
    emailValue.current.value = "";
    
   
  };





  return (
    <>
      {/*  Banner Section */}
      <Banner
        title="How to contact us"
        ctaText="Follow us on Facebook"
        ctaPath="facebook.com"
        className='w-full h-[70vh] banner text-white relative overflow-hidden'
      >
        {/* <img 
          src={schoolImage} 
          alt="Kings Pry School" 
          className="w-[400px] h-full object-cover absolute top-[20vh] rounded-3xl right-20 -z-20" 
        /> */}
        <div className="absolute inset-0 bg-gradient-t from-[#004d24] to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 -z-10"></div>
      </Banner>

      <section className="contact-section py-10">

          <div className="container mx-auto px-4">
            <div className=" text-center shadow-2xl min-h-[500px] bg-white">
              <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
              <p className="mt-4 text-gray-600">We'd love to hear from you!</p>

            <div className=" grid grid-cols-1 md:grid-cols-4  mt-8">
              {/* contact info*/}

              <div className="md: col-span-1 h-full bg-[#004d24] text-start">
                <div className="bg-[#004d24] rounded-lg  p-8 max-w-96 flex flex-col items-start min-h-96 ">

                 
                 

                    
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>


                 <div className="my-10 flex flex-col space-y-3.5">
                   <p className="mt-4 text-white">Address: 123 Main St,Mkhosana , Victoria Falls</p>
                  <p className="text-white">
                    Phone: <IoCall className="inline-block mr-2" /> +263786575362
                  </p>
                  <p className='text-white'>
                    Email: <a href="mailto:info@kingspry.com" >
                        <IoMdMail className='inline-block mr-2' />
                        info@kingspry.com 
                    </a>
                  </p>
                 </div>



                  <div className="socialLinks flex flex-row items-center h-36 space-x-3.5  ">

                  <a href="facebook.com" className="facebook">

                     <FaFacebook 
                     className='text-3xl text-amber-400    hover:text-white transition-colors duration-300'
                     />


                  </a>

                    <a href="facebook.com" className="facebook">

                     < FaInstagramSquare
                     
                      className='text-3xl text-amber-400    hover:text-white transition-colors duration-300'
                     
                     />


                  </a>
                    <a href="facebook.com" className="facebook">

                     < FaSkype 
                     
                      className='text-3xl text-amber-400    hover:text-white transition-colors duration-300'
                     
                     />


                  </a>
                    <a href="facebook.com" className="facebook">

                     <FaFacebook 
                     
                      className='text-3xl text-amber-400    hover:text-white transition-colors duration-300'
                     
                     />

                  </a>

                </div>
                </div>


                



              </div>

              {/* Additional Contact Methods */} 
              <div className=" md:col-span-3 ">

                <div className="form bg-white rounded-lg  p-8 max-w-full  flex-col items-start min-h-96 text-start ">
                  <h3 className="text-2xl font-bold text-gray-900">Contact Form</h3>
                  <form className="w-full mt-4"onSubmit={handleSubmit} >
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                      <input

                        ref={txtTitle}
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                      <input
                      ref={emailValue}
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                     
                      className=" py-2 px-5 w-full bg-[#004d24] text-white font-semibold rounded-lg hover:bg-[#006633] transition-colors duration-300 lg:w-50 "
                    >
                      Send Message
                    </button>
                  </form>
                </div>


              </div> 

            </div>

          </div>
          </div>



      </section>




    </>
  )
}

export default Contact