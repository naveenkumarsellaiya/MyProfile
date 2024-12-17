import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAdsClick } from "react-icons/md";
import { FaHeart } from "react-icons/fa"; // Heart icon

const Footer = () => {
  const [likeCount, setLikeCount] = useState(0);

  // Load like count from local storage on component mount
  useEffect(() => {
    const storedLikes = localStorage.getItem("likeCount");
    if (storedLikes) {
      setLikeCount(parseInt(storedLikes, 10));
    }
  }, []);

  // Save like count to local storage whenever it changes
  const handleLike = () => {
    const updatedLikes = likeCount + 1;
    setLikeCount(updatedLikes);
    localStorage.setItem("likeCount", updatedLikes);
  };

  return (
    <footer className="bg-indigo-950 w-full h-auto p-6 text-white font-semibold">
      <div className="flex flex-col md:flex-row justify-evenly items-start md:flex-wrap ml-10">
        {/* Branding Section */}
        <div className="mb-6 md:mb-0" data-aos="flip-up" data-aos-delay="200">
          <h2 className="text-xl mb-2">Naveenkumar Portfolio</h2>
          <p className="text-md">
            Thank you for visiting my personal portfolio website.
          </p>
        </div>

        {/* Quick Links Section */}
        <nav className="mb-6 md:mb-0" data-aos="slide-up" data-aos-delay="100">
          <h2 className="text-xl mb-2">Quick Access</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:underline hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <MdOutlineAdsClick />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <MdOutlineAdsClick />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="hover:underline hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <MdOutlineAdsClick />
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:underline hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <MdOutlineAdsClick />
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:underline hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <MdOutlineAdsClick />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                <MdOutlineAdsClick />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Details Section */}
        <div aria-label="Contact Details" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl mb-2">Contact Details</h2>
          <p>+91 XXX-XXX-XXXX</p>
          <p>Tamil Nadu, India</p>
        </div>
      </div>

      {/* Like Button Section */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <p className="text-md text-orange-500">
          <span className="text-white">Developed by </span> NaveeNS
        </p>
        <div className="mt-4 flex justify-center items-center gap-2">
          <button
            onClick={handleLike}
            className="text-red-500 hover:scale-110 transition-transform"
            aria-label="Like Button"
          >
            <FaHeart size={24} />
          </button>
          <span className="text-white">{likeCount} Likes</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
