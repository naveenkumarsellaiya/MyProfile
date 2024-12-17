import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import logo from './../assests/profiles/Ns.png'

function Navbar() {
  // State Declarations
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Effect for screen resize handling
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect for scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to Top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // JSX Rendering
  return (
    <div className="flex text-black items-center justify-between px-10 p-4 shadow-md sticky top-0 bg-white z-50">
      {/* Logo */}
      <h2
        className="group flex gap-1 items-center text-xl font-bold tracking-tight cursor-pointer font-serif 
        hover:text-orange-500 text-black transition-all ease-linear duration-300 delay-100"
      >
        <img
          src={logo}
          className="bg-violet-800 rounded-full w-8 group-hover:bg-orange-500 transition-all ease-linear duration-300 delay-100"
          alt="logo"
        />
        NaveeNS
      </h2>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {isMobileMenuOpen ? (
          <IoClose
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl cursor-pointer text-black"
          />
        ) : (
          <HiMenuAlt3
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-3xl cursor-pointer text-black hover:text-orange-400"
          />
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:gap-3 md:static md:bg-transparent md:p-0 ${isMobileMenuOpen
            ? "absolute right-1 top-16 bg-blue-400 shadow-xl w-[40%] z-10 p-4 text-center space-y-4 rounded-xl transition-all duration-200 ease-in-out"
            : "hidden"
          }`}
      >
        {["Home", "About", "Education", "Skills", "Project", "Contact"].map(
          (item, index) => (
            <li key={index}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-green-500"
                className="block text-lg font-semibold hover:text-pink-400 hover:rounded-lg transition-colors p-2 cursor-pointer text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Scroll-to-Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 rounded-full bg-orange-500 w-12 h-12 flex items-center justify-center shadow-lg hover:bg-orange-600 transition duration-300"
        >
          <AiOutlineArrowUp className="text-xl mt-2 transition-all ease-linear duration-200 delay-300 text-white animate-bounce" />
        </button>
      )}
    </div>
  );
}

export default Navbar;
