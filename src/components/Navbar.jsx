import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltRight, BiUser, BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { FiHome, FiInfo, FiCalendar, FiImage } from "react-icons/fi";

function Navbar() {
  const location = useLocation();
  const NavbarLinks = [
    {
      id: 0,
      name: "Home",
      path: "/",
      icon: <FiHome className="mr-2" />
    },
    {
      id: 1,
      name: "About",
      path: "/about",
      icon: <FiInfo className="mr-2" />
    },
    {
      id: 2,
      name: "News",
      path: "/events",
      icon: <FiCalendar className="mr-2" />
    },
    {
      id: 3,
      name: "Gallery",
      path: "/coming-soon",
      icon: <FiImage className="mr-2" />
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
      icon: <BiUser className="mr-2" />
    }
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    setSearchOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${
      scrolled ? 'bg-white/90 text-[#004D24] h-16 shadow-md' : 'h-24 text-white bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-7">
        {/* Mobile Logo and Menu Button */}
        <div className="flex items-center md:hidden">
          <Link to="/" className="hover:text-gray-400 flex items-center w-10 h-10">
            <img
              src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png"
              alt="Logo"
              className="w-full h-full rounded-full hover:shadow-lg transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Left Navigation Links */}
          <ul className="flex items-center gap-8">
            {NavbarLinks.slice(0, 2).map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`font-medium capitalize relative group transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-amber-500' : 'hover:text-amber-500'
                  }`}
                >
                  <span className="flex items-center">
                    {link.icon}
                    {link.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    location.pathname === link.path ? 'bg-amber-500' : 'bg-transparent group-hover:bg-amber-500'
                  } transition-all duration-300`}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Centered Logo */}
          <div className={`ml-30 transition-all duration-300 ${scrolled ? 'w-14 h-14' : 'w-20 h-20'}`}>
            <Link to="/" className="hover:text-gray-400 flex items-center w-full h-full">
              <img
                src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png"
                alt="Logo"
                className={`w-full h-full rounded-full object-cover transition-all duration-300 ${
                  scrolled ? 'shadow-md' : 'shadow-lg'
                } hover:scale-105`}
              />
            </Link>
          </div>

          {/* Right Navigation Links */}
          <ul className="flex items-center gap-8">
            {NavbarLinks.slice(2).map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`font-medium capitalize relative group transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-amber-500' : 'hover:text-amber-500'
                  }`}
                >
                  <span className="flex items-center">
                    {link.icon}
                    {link.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    location.pathname === link.path ? 'bg-amber-500' : 'bg-transparent group-hover:bg-amber-500'
                  } transition-all duration-300`}></span>
                </Link>
              </li>
            ))}
            
            {/* Search Button */}
            <li>
              {/* <button 
                onClick={toggleSearch}
                className="p-1 hover:text-amber-500 transition-colors duration-200 cursor-pointer"
              >
                <BiSearch className="text-xl" />
              </button> */}
            </li>
          </ul>
        </div>

        {/* Mobile Menu and Search Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleSearch}
            className="text-xl hover:text-amber-400 transition-transform duration-300 hover:scale-110"
          >
            <BiSearch />
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="text-2xl hover:text-amber-400 transition-transform duration-300 hover:scale-110"
          >
            {mobileMenuOpen ? <RxCross1 /> : <BiMenuAltRight />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 shadow-md z-50 p-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-[#004d24]"
              />
              <button 
                type="submit"
                className="bg-amber-500 text-white px-4 py-2 rounded-r-lg hover:bg-amber-600 transition-colors duration-200"
              >
                <BiSearch className="text-xl" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-[#004d24]/95 backdrop-blur-sm shadow-lg z-50 overflow-y-auto">
            <ul className="flex flex-col items-center justify-center py-8">
              {NavbarLinks.map((link) => (
                <li key={link.id} className="w-full px-4">
                  <Link
                    to={link.path}
                    className={`flex items-center justify-center text-white font-medium text-lg py-4 px-6 my-2 rounded-lg transition-all duration-200 ${
                      location.pathname === link.path ? 'bg-white/20 text-amber-300' : 'hover:bg-white/10'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
              
              {/* Additional Mobile Links */}
              <li className="w-full px-4 mt-4">
                <Link
                  to="/login"
                  className="flex items-center justify-center bg-amber-500 text-white font-medium text-lg py-4 px-6 my-2 rounded-lg hover:bg-amber-600 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BiUser className="mr-2" />
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;