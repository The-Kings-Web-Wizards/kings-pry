

import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Button from '../components/Button';

import  {programsData} from '../components/Data'
import Stats from '../components/Stats';
import MultipleItems from '../components/MultipleItems';
import Modal from '../components/Modal';
import { useState } from 'react';
import ModalSlider from '../components/ModalSlider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();



function Home() {


  const [open,setOpen] = useState(false)

return (
<main className="font-sans">
{/* Hero Banner */}
<Banner
  title="Welcome to Kings Primary School"
  subtitle="Nurturing excellence and character helps individuals reach their potential with integrity, resilience, and compassion, fostering success rooted in strong ethics."
  ctaText="Enroll Now"
  ctaPath="/enroll"
  className='w-full h-screen banner text-white font-light relative overflow-hidden'
>

  <div className="absolute inset-0 bg-[#004d24] z-0"></div>
  
  <div className="img-holder w-full max-w-xl h-[60vh] absolute right-23 top-85 -translate-y-1/2 hidden md:block">
    <div className="relative w-full h-full group">
      
      {/* <img 
        src='/public/img1.png' 
        alt="Students learning" 
        className='w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500' 
      /> */}
      

      {/* Decor elements */}

      <div className="absolute -inset-4 border-2 border-white/30 rounded-3xl pointer-events-none"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 rounded-2xl opacity-20 blur-xl"></div>
      <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
    </div>
    
    {/* Floating badge */}
    <div className="absolute -left-10 top-3/4 bg-white text-amber-400 px-6 py-3 rounded-full shadow-lg font-medium text-sm rotate-[-5deg]">
      🏆 #1 in Academic Excellence
    </div>
  </div>

 
 

</Banner>


{/* Quick Links Bar */}
<section className=" bg-amber-400 text-white font-bold py-3">
<div className="container mx-auto flex flex-wrap justify-center gap-4

md:gap-8">
<Link to="/enroll" className="hover:underline">Admissions</
Link>
<Link to="/curriculum" className="hover:underline">Curriculum</Link>
<Link to="/events" className="hover:underline">School Calendar</
Link>
<Link to="/coming-soon" className="hover:underline">Parent Portal</Link>
<Link to="/contact" className="hover:underline">Contact Us</Link>
</div>
</section>

{/* About Section */}

<section className="about py-12 bg-gray-50" data-aos="fade-up" data-aos-duration="5000" data-aos-delay="300" data-aos-easing="ease-in"   >
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row-reverse items-center">
<div className="img-container w-full md:w-1/2 mb-8 md:mb-0
md:pl-8" data-aos="fade-right" data-aos-duration="5000" data-aos-delay="500" data-aos-easing="ease-in-out">
<img
src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751275802
/Rectangle_32_2_f7lvqe.png"
alt="Students learning in classroom"
className="w-full h-auto rounded-lg shadow-md"
/>
</div>
<div className="about-text w-full md:w-1/2 text-center md:text-left" data-aos="fade-down" data-aos-duration="5000" data-aos-delay="500" data-aos-easing="ease-in-out"  >
<h2 className='font-bold text-3xl text-amber-400 mb-4'>Our
Educational Philosophy</h2>
<p className='text-lg mb-6'>
At Kings Primary, we believe in fostering a love of learning through
innovative teaching methods,
personalized attention, and a curriculum that balances academic
excellence with character development.
</p>



<div className="flex flex-col sm:flex-row gap-4 justify-center
md:justify-start">


 <Button 
  path="/about" 
  name="Learn More About Us" 
  variant="ghost" 
  size="large"
  className="bg-[#004d24] text-white border-2 border-[#004d24] hover:bg-amber-400 transition-colors duration-300"
/>

<Button 
  
  name="Take a Digital Tour" 
  variant="ghost" 
  size="large"  
  className="bg-white text-[#004d24] border-2 border-[#004d24]"

  onClick={()=>setOpen(true)}
  
/>

<Modal open={open} onclose={()=>setOpen(false)}>

    <video 
    
    className="w-150 h-80 rounded-lg shadow-lg"
    controls ="true"
    autoPlay muted loop
  

    
    >

< source src="https://res.cloudinary.com/dxrv8lauy/image/upload/v175 1275802/Rectangle_32_2_f7lvqe.mp4 " type="video/mp4" />

    </video>

  </Modal>

</div>
</div>
</div>
</div>
</section>




{/* Stats Section */}
<section className="flex flex-col items-center justify-center py-[1.5em] bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500" data-aos-easing="ease-in-out">
      <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">Our Impact in Numbers</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Kings Primary School is proud of our achievements and the vibrant community we’ve built. Here’s a snapshot of our journey so far:
      </p>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex-1 flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 m-2" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" data-aos-easing="ease-in" >
        <span className="text-5xl font-extrabold text-amber-400 mb-2">500+</span>
        <span className="text-lg font-medium text-gray-700">Happy Students</span>
        <p className="text-gray-500 mt-2 text-center">Engaged in holistic learning and extracurricular activities.</p>
      </div>
      <div className="flex-1 flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 m-2"data-aos="fade-down" data-aos-duration="2000" data-aos-delay="200" data-aos-easing="ease-in">
        <span className="text-5xl font-extrabold text-amber-400 mb-2">30+</span>
        <span className="text-lg font-medium text-gray-700">Qualified Teachers</span>
        <p className="text-gray-500 mt-2 text-center">Dedicated educators fostering growth and curiosity.</p>
      </div>
      <div className="flex-1 flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 m-2"data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" data-aos-easing="ease-in-out">
        <span className="text-5xl font-extrabold text-amber-400 mb-2">20</span>
        <span className="text-lg font-medium text-gray-700">Years of Excellence</span>
        <p className="text-gray-500 mt-2 text-center">A legacy of nurturing leaders and innovators.</p>
      </div>
      <div className="flex-1 flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 m-2"data-aos="fade-down" data-aos-duration="2000" data-aos-delay="400" data-aos-easing="ease-in-out">
        <span className="text-5xl font-extrabold text-amber-400 mb-2">15+</span>
        <span className="text-lg font-medium text-gray-700">Clubs & Activities</span>
        <p className="text-gray-500 mt-2 text-center">From sports to arts, every child finds their passion.</p>
      </div>
    </div>
    
  </div>
</section>

{/* Programs Section */}

<section className="py-16  " data-aos="fade-up" data-aos-duration="5000" data-aos-delay="500" data-aos-easing="ease-in">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16"data-aos="fade-up" data-aos-duration="5000" data-aos-delay="500" data-aos-easing="ease-in">
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
        <span className="text-amber-400">
          Our Programs
        
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover transformative learning experiences designed to unlock your potential and propel your future forward.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">
      {/* Image Card */}
      <div className="lg:w-2/5 relative group rounded-3xl overflow-hidden shadow-2xl" data-aos="flip-right" data-aos-duration="5000" data-aos-delay="500" data-aos-easing="ease-in">
        <img 
          src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751885574/ChatGPT_Image_Jul_7_2025_09_52_14_AM_eawm1x.png" 
          alt="Students learning" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004d24] to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
          <p className="opacity-90">Join thousands of successful learners today</p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="lg:w-3/5 grid md:grid-cols-2 gap-6"data-aos="fade-up" data-aos-duration="5000" data-aos-delay="500" data-aos-easing="ease-in">
        {programsData.map((program, id) => (
          <div 
            key={id}
            className="relative group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="p-6 flex flex-col h-full">

              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
              <button className="self-start px-6 py-2 bg-[#004d24] text-white rounded-lg font-medium hover:bg-[#003a1a] transition-colors duration-300 flex items-center">
                {program.btnText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA at bottom */}
    <div className="mt-16 text-center">
    <Button 
  path="/events" 
  name="Explore More Programs" 
  variant="ghost" 
  size='large'

  className='px-8 py-3 bg-amber-400  rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105'
 
/>
    </div>
  </div>
</section>


<section className="py-16 bg-amber-400 mb-5 text-white border-2 " 

data-aos="fade-up" data-aos-duration="5000" data-aos-delay="500" data-aos-easing="ease-in">


<div className="container mx-auto px-4 text-center">
<h2 className="text-3xl font-bold mb-4"

data-aos="fade-up" data-aos-duration="5000" data-aos-delay="500" data-aos-easing="ease-in">
Ready to Join Our Community?</h2>
<p className="text-xl mb-8 max-w-2xl mx-auto">
Discover how Kings Primary can help your child reach their full
potential.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a href='http/www.facebook.com' className="btn bg-[#004d24] text-white py-3
px-8 rounded-lg font-semibold hover:bg-white hover:text-[#004d24] border-2 border-[#004d24] transition">
Apply Now
</a>
<Link to='/contact' className="btn border-2 border-white 
py-3 px-8 rounded-lg font-semibold hover:bg-[#00361a]  hover:text-white transition">
Contact Us
</Link>
</div>
</div>
</section>

{/* map section */}
<section className='w-full'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.621761783712!2d25.81329347406892!3d-17.949787179710412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194fe5200ee7279b%3A0x7c386482f4da0968!2sKings%20Primary%20School!5e0!3m2!1sen!2szw!4v1751893972138!5m2!1sen!2szw" width="100%" height="450"   referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

</main>
)
}
export default Home;