import React from "react";
import { CiLogin } from "react-icons/ci";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

function Navbar() {
  const NavbarLinks = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Enroll",
      path: "/enroll",
    },
    {
      id: 3,
      name: "Him",
      path: "/him",
    },
    {
      id: 4,
      name: "Her",
      path: "/her",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showLoginModal] = useState(false);

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

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  

  return (
    <nav className={`fixed top-0 left-0 md:left-[5%] w-full md:w-[90%] z-50 transition-all duration-300 backdrop-blur-lg ${
      scrolled ? 'bg-white text-[#004D24] h-16' : 'h-20'
    }`}>
      {showLoginModal && <LoginModal />}
      <div className="container mx-auto flex justify-between items-center h-full px-7">
        {/* Mobile Logo */}
        <div className="text-red text-2xl font-bold flex align-middle gap-1.5 md:hidden">
          <Link to="/" className="hover:text-gray-400 flex items-center w-10 h-10 ">
            <img
              src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png"
              alt=""
              className="w-fit h-fit rounded-full hover:shadow-blue-200 shadow-2xl text-white hover:shadow-lg transition-all duration-300 cursor-pointer "
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-7 w-full">
          {/* Left Navigation Links */}
          <ul className="flex items-center  gap-10">
            {NavbarLinks.slice(0, 2).map((link) => (
              <li key={link.id} className="relative group">
                {link.dropdown ? (
                  <>
                    <button 
                      className=" hover:text-blue-400 capitalize font-extrabold cursor-pointer"
                      onClick={() => toggleDropdown(link.id)}
                    >
                      {link.name}
                    </button>
                    {activeDropdown === link.id && (
                      <div className="absolute left-0 top-full bg-white shadow-lg rounded-md min-w-[200px] z-10">
                        <ul className="py-1">
                          {link.dropdown.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={item.path}
                                className="block px-4 py-2 text-red-800 hover:bg-blue-50 capitalize"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className=" font-bold hover:text-blue-400 capitalize"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Centered Logo */}
          <div className="mx-8">
            <Link to="/" className="hover:text-gray-400 flex items-center w-12 h-12">
              <img
                src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png"
                alt=""
                className="w-full h-full rounded-full hover:shadow-blue-200 shadow-2xl text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              />
            </Link>
          </div>

          {/* Right Navigation Links */}
          <ul className="flex items-center justify-between gap-10">
            {NavbarLinks.slice(2).map((link) => (
              <li key={link.id} className="relative group">
                {link.dropdown ? (
                  <>
                    <button 
                      className="text-white hover:text-blue-400 capitalize font-extrabold cursor-pointer"
                      onClick={() => toggleDropdown(link.id)}
                    >
                      {link.name}
                    </button>
                    {activeDropdown === link.id && (
                      <div className="absolute left-0 top-full bg-white shadow-lg rounded-md min-w-[200px] z-10">
                        <ul className="py-1">
                          {link.dropdown.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={item.path}
                                className="block px-4 py-2 text-red-800 hover:bg-blue-50 capitalize"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className=" font-bold hover:text-blue-400 capitalize"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

        
         
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden  text-3xl hover:text-blue-400 m-2"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <RxCross1 /> : <BiMenuAltRight />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full h-screen bg-[#004d24] shadow-lg z-50">
            <ul className="  flex flex-col items-center justify-betweem  h-full ">
              {NavbarLinks.map((link) => (
                <li key={link.id} className="mb-10   ">
                  <div className="flex flex-col ">
                    <Link
                      to={link.path}
                      className="text-white font-bold hover:text-blue-400 capitalize py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
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