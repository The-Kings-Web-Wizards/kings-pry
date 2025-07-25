import React from 'react'
import Banner from '../components/Banner'
// import schoolImage from '../assets/school-building.png';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { UpcomingEvents } from '../components/Data'
import { motion} from 'framer-motion';



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

function Events() {


    



  return (
    <main className="bg-gray-50">
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

      {/* Events Section with   */}
      <section className="py-20 px-4 md:px-10 lg:px-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 font-semibold tracking-wider">EVENTS CALENDAR</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Upcoming <span className="text-transparent bg-clip-text bg-[#004d24]">School Events</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our dynamic calendar of events designed to inspire, educate, and connect our school community.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {UpcomingEvents.map((event, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={event.imgURL} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400 text-white">
                      {event.category || 'School Event'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaCalendarAlt className="mr-2" />
                    <span>{event.date}</span>
                    <FaClock className="ml-4 mr-2" />
                    <span>{event.time || '10:00 AM'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location || 'School Campus'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Announcements  */}
      <section className='py-20 px-4 md:px-10 lg:px-24 bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#004d24] font-semibold tracking-wider">LATEST NEWS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Announcements & <span className="text-amber-400">Highlights</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-amber-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Curriculum Launch</h3>
              <p className="text-gray-600 mb-4">Our innovative new curriculum integrates STEM with creative arts for a holistic learning experience.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">January 10, 2024</span>
                <button className="text-amber-500 hover:text-blue-700 font-medium"
                
                
                
                
                >Read More →</button>
              </div>
              

            </motion.div>


  


            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-amber-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Parent-Teacher Meeting</h3>
              <p className="text-gray-600 mb-4">Virtual and in-person options available for our upcoming progress review sessions.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">February 5, 2024</span>
                <button className="text-amber-500 hover:text-blue-700 font-medium">Read More →</button>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center text-amber-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sports Day Celebration</h3>
              <p className="text-gray-600 mb-4">Our biggest sports event yet with new augmented reality competitions.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">March 15, 2024</span>
                <button className="text-amber-500 hover:text-blue-700 font-medium">Read More →</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className='py-20 px-4 md:px-10 lg:px-24 bg-[#004d24] text-white' id='calendar'>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 font-semibold tracking-wider">PLAN AHEAD</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Academic <span className="text-transparent bg-clip-text bg-amber-400 ">Calendar</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Important dates and events for the 2023-2024 academic year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-2xl p-6 backdrop-blur-lg border border-amber-400">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center mr-3">1</span>
                January 2024
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#004d24] mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-black">Term Begins</h4>
                    <p className="text-gray-400 text-sm">January 5</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-amber-400">Innovation Week</h4>
                    <p className="text-gray-400 text-sm">January 15-19</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className=" bg-gray-100 rounded-2xl p-6 backdrop-blur-lg border border-amber-400">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center mr-3">2</span>
                February 2024
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#004d24] mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-black">Parent Conferences</h4>
                    <p className="text-gray-400 text-sm">February 10</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-amber-400">STEM Fair</h4>
                    <p className="text-gray-400 text-sm">February 22-24</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 backdrop-blur-lg border border-amber-400">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center mr-3">3</span>
                March 2024
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-[#004d24] mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-black">Sports Day</h4>
                    <p className="text-gray-400 text-sm">March 15</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-medium text-amber-400">Term Ends</h4>
                    <p className="text-gray-400 text-sm">March 29</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-amber-400  rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
             <a href="React-icons.pdf" download='School calander.pdf'> Download Full Calendar</a>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-amber-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected With Our School Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Never miss an important event or announcement. Subscribe to our newsletter for regular updates.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 cursor-pointer bg-[#004d24] text-white font-semibold rounded-lg hover:bg-amber-400 hover:border-2 hover:border-white transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Events