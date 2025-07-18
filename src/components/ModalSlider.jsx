import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ModalSlider({className,children,image,description,title,dataContainer}) {
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
    <div className={`container mx-auto my-20 px-4 max-w-7xl ${className}`}>
    {children}
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{title}</h2>
      
      <div className="slider-container relative">
        <Slider {...settings}>
        {dataContainer.map((modalData) => (
          <div key={modalData.id}  className="px-2 outline-none">

              <div className="flex items-center mb-4">

              <img src={image} alt="" />

              <p>{description}</p>

              </div>


          </div>
        ))}


          
        </Slider>
      </div>
    </div>
  );
}

export default ModalSlider;