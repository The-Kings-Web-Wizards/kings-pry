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
    },
    {
      id: 3,
      name: "News",
      path: "/events",
    },
    {
      id: 4,
      name: "Gallery",
      path: "/gallery",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  };

  return (
    <nav className={`fixed top-0 left-0  w-full md:w-[100%] z-50 transition-all duration-300 backdrop-blur-lg ${
      scrolled ? 'bg-white text-[#004D24] h-16' : 'h-24 text-white'
    }`}>
      <div className="container mx-auto flex justify-between items-center h-full px-7">
        {/* Mobile Logo */}
        <div className="text-red text-2xl font-bold flex align-middle gap-1.5 md:hidden">
          <Link to="/" className="hover:text-gray-400 flex items-center w-10 h-10">
            <img
              src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png"
              alt=""
              className="w-fit h-fit rounded-full hover:shadow-blue-200 shadow-2xl text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-7 w-full">
          {/* Left Navigation Links */}
          <ul className="flex items-center justify-between gap-10 w-[30%]">
            {NavbarLinks.slice(0, 2).map((link) => (
              <li key={link.id} className="relative group">
                <Link
                  to={link.path}
                  className="font-bold hover:text-amber-400 capitalize relative"
                >
                  <span className="relative inline-block overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-amber-400">
                      {link.name}
                    </span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Centered Logo*/}
          <div className={`mx-20 transition-all duration-300 ${scrolled ? ' w-16 h-16' : 'w-30 h-30 mt-10'}`}>
            <Link to="/" className="hover:text-gray-400 flex items-center w-full h-full">
              <img
                src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png"
                alt=""
                className={`w-full h-full rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  scrolled ? 'shadow-md' : 'shadow-xl'
                }`}
              />
            </Link>
          </div>

          {/* Right Navigation Links */}
          <ul className="flex items-center justify-between gap-10 w-[30%]">
            {NavbarLinks.slice(2).map((link) => (
              <li key={link.id} className="relative group">
                <Link
                  to={link.path}
                  className="font-bold hover:text-amber-400 capitalize relative"
                >
                  <span className="relative inline-block overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-amber-400">
                      {link.name}
                    </span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl hover:text-blue-400 m-2 transition-transform duration-300 hover:scale-110"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <RxCross1 /> : <BiMenuAltRight />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full h-screen bg-[#004d24] shadow-lg z-50">
            <ul className="flex flex-col items-center justify-center h-full">
              {NavbarLinks.map((link) => (
                <li key={link.id} className="mb-10">
                  <Link
                    to={link.path}
                    className="text-white font-bold text-2xl hover:text-amber-400 capitalize py-2 relative group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative inline-block overflow-hidden">
                      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                        {link.name}
                      </span>
                      <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-amber-400">
                        {link.name}
                      </span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;