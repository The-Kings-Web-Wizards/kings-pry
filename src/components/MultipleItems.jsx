import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "./Data";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (
    <section className="container w-full mx-auto my-20">
    <div className="slider-container ">
         <Slider {...settings}>

        {testimonials.map((testimonial)=>(
            <div key={testimonial.author} className="text-center bg-amber-400 h-[300px] mx-10">

                <img src={testimonial.url} alt="" />
                <h3>{testimonial.quote}</h3>
            </div>
        ))}
            
       </Slider>
    </div>
    </section>
  );
}

export default MultipleItems;
