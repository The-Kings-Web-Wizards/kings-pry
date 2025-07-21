

import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import  {programsData} from '../components/Data'
import Stats from '../components/Stats';
import MultipleItems from '../components/MultipleItems';
import Modal from '../components/Modal';
import { useState } from 'react';
import ModalSlider from '../components/ModalSlider';



function Home() {


  const [open,setOpen] = useState(false)

  

return (
<main className="font-sans">
{/* Hero Banner */}
<Banner
title="Welcome to Kings Primary School"
subtitle="Nurturing excellence and character helps individuals reach their potential with integrity, resilience, and compassion, fostering success rooted in strong ethics."
ctaText="Enroll"
ctaLink="/enroll"
className='w-[100%] h-[100vh]  banner  text-white font-light '
/>
{/* Quick Links Bar */}
<section className=" bg-amber-400 text-white font-bold py-3">
<div className="container mx-auto flex flex-wrap justify-center gap-4

md:gap-8">
<Link to="/enroll" className="hover:underline">Admissions</
Link>
<Link to="/curriculum" className="hover:underline">Curriculum</Link>
<Link to="/events" className="hover:underline">School Calendar</
Link>
<Link to="/parents" className="hover:underline">Parent Portal</Link>
<Link to="/contact" className="hover:underline">Contact Us</Link>
</div>
</section>
{/* About Section */}
<section className="about py-12 bg-gray-50">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row-reverse items-center">
<div className="img-container w-full md:w-1/2 mb-8 md:mb-0
md:pl-8">
<img
src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751275802
/Rectangle_32_2_f7lvqe.png"
alt="Students learning in classroom"
className="w-full h-auto rounded-lg shadow-md"
/>
</div>
<div className="about-text w-full md:w-1/2 text-center md:text-left">
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
<Link to='/about' className="btn bg-[#004d24] text-white py-3 px-6
rounded-lg hover:bg-[#00361a] transition">
Learn More About Us
</Link>
<button  className="btn border-2 border-[#004d24] 
text-[#004d24] py-3 px-6 rounded-lg hover:bg-gray-100 transition cursor-pointer
"
onClick={()=>setOpen(true)}

>
Take a Virtual Tour
</button>

<Modal open={open} onClose={() => setOpen(false)} className='pt-20'>

<ModalSlider/>

</Modal>

</div>
</div>
</div>
</div>
</section>




{/* Stats Section */}
<section className='flex flex-col items-center justify-center py-[2em] bg-white'>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4 text-center">
      School Achievements & Impact
    </h2>
    <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
      At Kings Primary, our commitment to excellence is reflected in our impressive milestones. Explore our key statistics and see how we’re making a difference in education and the community.
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
      <div className="bg-amber-50 rounded-xl shadow-md p-6 flex-1 text-center">
        <h3 className="text-2xl font-bold text-[#004d24] mb-2">98%</h3>
        <p className="text-gray-600">Pass Rate in National Exams</p>
      </div>
      <div className="bg-amber-50 rounded-xl shadow-md p-6 flex-1 text-center">
        <h3 className="text-2xl font-bold text-[#004d24] mb-2">500+</h3>
        <p className="text-gray-600">Active Students</p>
      </div>
      <div className="bg-amber-50 rounded-xl shadow-md p-6 flex-1 text-center">
        <h3 className="text-2xl font-bold text-[#004d24] mb-2">30+</h3>
        <p className="text-gray-600">Qualified Teachers</p>
      </div>
      <div className="bg-amber-50 rounded-xl shadow-md p-6 flex-1 text-center">
        <h3 className="text-2xl font-bold text-[#004d24] mb-2">15</h3>
        <p className="text-gray-600">Extracurricular Clubs</p>
      </div>
    </div>
   
    <div className="mt-8 text-center">
      <Link to="/about" className="inline-block px-8 py-3 bg-[#004d24] text-white rounded-lg font-semibold hover:bg-[#00361a] transition">
        Learn More About Our Achievements
      </Link>
    </div>
  </div>
</section>
{/* Programs Section */}}
<section className="py-16  ">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      
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
      <div className="lg:w-2/5 relative group rounded-3xl overflow-hidden shadow-2xl">
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
      <div className="lg:w-3/5 grid md:grid-cols-2 gap-6">
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
      <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <Link to ='/events'>
        Explore All Programs
        </Link>

      </button>
    </div>
  </div>
</section>


<section className="py-16 bg-amber-400 mb-5 text-white border-2 ">
<div className="container mx-auto px-4 text-center">
<h2 className="text-3xl font-bold mb-4">Ready to Join Our
Community?</h2>
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