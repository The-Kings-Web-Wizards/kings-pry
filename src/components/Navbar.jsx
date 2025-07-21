import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const NavbarLinks = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "About",
      path: "/about",
      subLinks: [
        { name: "Our History", path: "/about/history" },
        { name: "Mission & Vision", path: "/about/mission" },
        { name: "Faculty", path: "/about/faculty" }
      ]
    },
    {
      id: 2,
      name: "Academics",
      path: "/academics",
      subLinks: [
        { name: "Curriculum", path: "/academics/curriculum" },
        { name: "Departments", path: "/academics/departments" },
        { name: "Calendar", path: "/academics/calendar" }
      ]
    },
    {
      id: 3,
      name: "News & Events",
      path: "/news-events",
    },
    {
      id: 4,
      name: "Gallery",
      path: "/gallery",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    }
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const hundredVh = window.innerHeight * 0.1; 
      setScrolled(window.scrollY > hundredVh);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveSubmenu(null); // Reset submenu when toggling mobile menu
  };

  const toggleSubmenu = (id) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${
      scrolled ? 'bg-white/90 text-[#004D24] h-16 shadow-md' : 'h-24 text-white bg-[#004D24]/90'
    }`}>
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-7">
        {/* Mobile Logo - Smaller when scrolled */}
        <div className="text-red text-2xl font-bold flex align-middle gap-1.5 md:hidden">
          <Link to="/" className="hover:text-gray-400 flex items-center">
            <img
              src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png"
              alt="School Logo"
              className={`rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer ${
                scrolled ? 'w-10 h-10' : 'w-14 h-14'
              }`}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-7 w-full">
          {/* Left Navigation Links */}
          <ul className="flex items-center justify-between gap-8 w-[35%]">
            {NavbarLinks.slice(0, 3).map((link) => (
              <li key={link.id} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={link.path}
                    className="font-semibold hover:text-amber-500 capitalize relative py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  {link.subLinks && (
                    <button 
                      onClick={() => toggleSubmenu(link.id)}
                      className="ml-1 text-xs focus:outline-none"
                    >
                      ▼
                    </button>
                  )}
                </div>
                
                {link.subLinks && activeSubmenu === link.id && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {link.subLinks.map((subLink, index) => (
                      <Link
                        key={index}
                        to={subLink.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        onClick={() => setActiveSubmenu(null)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Centered Logo - Scales with scroll */}
          <div className={`mx-4 transition-all duration-300 ${
            scrolled ? 'w-16 h-16' : 'w-24 h-24 mt-8'
          }`}>
            <Link to="/" className="hover:text-gray-400 flex items-center w-full h-full">
              <img
                src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png"
                alt="School Logo"
                className={`w-full h-full rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  scrolled ? 'shadow-md' : 'shadow-xl'
                }`}
              />
            </Link>
          </div>

          {/* Right Navigation Links */}
          <ul className="flex items-center justify-between gap-8 w-[35%]">
            {NavbarLinks.slice(3).map((link) => (
              <li key={link.id} className="relative group">
                <Link
                  to={link.path}
                  className="font-semibold hover:text-amber-500 capitalize relative py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-3xl m-2 transition-all duration-300 hover:scale-110 ${
            scrolled ? 'text-[#004D24]' : 'text-white'
          }`}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <RxCross1 /> : <BiMenuAltRight />}
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#004d24] shadow-lg z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: scrolled ? '64px' : '96px' }}
        >
          <ul className="flex flex-col items-center justify-start h-full pt-10 overflow-y-auto">
            {NavbarLinks.map((link) => (
              <li key={link.id} className="w-full px-6 py-3 border-b border-white/20">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <Link
                      to={link.path}
                      className="text-white font-semibold text-xl hover:text-amber-400 capitalize py-2"
                      onClick={() => {
                        if (!link.subLinks) {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <button 
                        onClick={() => toggleSubmenu(link.id)}
                        className="text-white text-lg px-4 focus:outline-none"
                      >
                        {activeSubmenu === link.id ? '▲' : '▼'}
                      </button>
                    )}
                  </div>
                  
                  {link.subLinks && activeSubmenu === link.id && (
                    <div className="pl-4 mt-2">
                      {link.subLinks.map((subLink, index) => (
                        <Link
                          key={index}
                          to={subLink.path}
                          className="block py-2 text-lg text-white/80 hover:text-amber-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          
          {/* School Motto or Contact Info in Mobile Menu */}
          <div className="px-6 py-8 text-white/80 text-center">
            <p className="italic">"Educating Tomorrow's Leaders Today"</p>
            <div className="mt-4 flex justify-center gap-4">
              <a href="tel:+1234567890" className="hover:text-amber-300">Call Us</a>
              <a href="mailto:info@school.edu" className="hover:text-amber-300">Email Us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;