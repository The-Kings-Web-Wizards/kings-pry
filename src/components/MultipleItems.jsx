import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "./Data";

function MultipleItems() {
  const settings = {
    dots: true,
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <section className="container mx-auto my-20 px-4 max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
      
      <div className="slider-container relative">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="px-2 outline-none">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image || "https://res.cloudinary.com/dxrv8lauy/image/upload/v1751885611/ChatGPT_Image_Jul_7_2025_10_02_20_AM_bprj23.png"} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#004d24]"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">"{testimonial.quote}"</p>
                <div className="flex justify-end">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MultipleItems;