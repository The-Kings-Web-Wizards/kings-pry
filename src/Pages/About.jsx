import React from 'react';
import Banner from '../components/Banner';
import { FaGraduationCap, FaChild, FaChalkboardTeacher, FaAward } from 'react-icons/fa';
import teamImage from '../assets/team.jpg';
import { Link } from 'react-router-dom';
// import schoolImage from '../assets/school-building.png';


import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();



function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <Banner
        title="Welcome to Kings Pry School "
        subtitle="Where Every Student Reigns Supreme!"
        ctaText="Learn More"
        ctaPath="/enroll"
        className='w-full h-[80vh] banner text-white '

        
      >
      
      </Banner>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-10 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            At Kings Pry School, we are committed to nurturing young minds through innovative education,
            fostering creativity, and building character. Our holistic approach ensures every child
            develops academically, socially, and emotionally to become future leaders.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaGraduationCap className="text-amber-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">Rigorous curriculum designed to challenge and inspire</p>
            </div>
            
            <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaChild className="text-amber-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Character Development</h3>
              <p className="text-gray-600">Building integrity, respect, and responsibility</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaChalkboardTeacher className="text-amber-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Passionate educators dedicated to student success</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <FaAward className="text-amber-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-600">Consistent track record of outstanding achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 md:px-10 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src={teamImage} 
              alt="Our Team" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded in 1995, Kings Pry School began as a small neighborhood institution with a big vision.
              Over the years, we've grown into a premier educational establishment while maintaining our
              commitment to personalized attention and community values.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our alumni network spans the globe, with graduates excelling in diverse fields from medicine
              to the arts, all carrying forward the Kings Pry legacy of excellence.
            </p>
            <button className="px-6 py-3 w-full md:w-[200px] bg-amber-400 hover:bg-amber-700 text-white font-bold rounded-lg transition-all cursor-pointer">
              Meet Our Alumni
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-10 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-16">What Parents Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Kings Pry transformed my shy child into a confident learner. The teachers' dedication is unmatched.",
                author: "Sarah Johnson, Parent"
              },
              {
                quote: "The balanced approach to academics and character building is exactly what we wanted for our son.",
                author: "Michael Chen, Parent"
              },
              {
                quote: "After just one year, we've seen remarkable growth in our daughter's curiosity and love for learning.",
                author: "Priya Patel, Parent"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-amber-400">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-400 text-white pb-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Kings Pry Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a tour today and discover how we can help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-amber-400 font-bold rounded-lg hover:bg-gray-100 transition-all cursor-pointer">
              Book a Tour
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-amber-400 transition-all cursor-pointer">
           <Link to="/contact" >Contact Us</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;