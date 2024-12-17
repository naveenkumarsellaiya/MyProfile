import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAdsClick } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const [likeCount, setLikeCount] = useState(0);

  // Load likes from local storage when component mounts
  useEffect(() => {
    const storedLikes = localStorage.getItem("likeCount");
    if (storedLikes) setLikeCount(parseInt(storedLikes, 10));
  }, []);

  // Handle like button click
  const handleLike = () => {
    setLikeCount((prev) => {
      const updatedLikes = prev + 1;
      localStorage.setItem("likeCount", updatedLikes); // Update local storage
      return updatedLikes;
    });
  };

  return (
    <footer className="bg-indigo-950 w-full h-auto p-6 text-white font-semibold">
      <div className="flex flex-col md:flex-row justify-evenly items-start flex-wrap ml-10">
        {/* Branding Section */}
        <SectionHeading title="Naveenkumar Portfolio" aos="flip-up">
          <p>Thank you for visiting my personal portfolio website.</p>
        </SectionHeading>

        {/* Quick Links Section */}
        <SectionHeading title="Quick Access" aos="slide-up">
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Education", "Skills", "Projects", "Contact"].map(
              (link, idx) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="flex items-center gap-1 hover:text-blue-300 hover:underline transition-colors"
                  >
                    <MdOutlineAdsClick />
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </SectionHeading>

        {/* Contact Details Section */}
        <SectionHeading title="Contact Details" aos="fade-up">
          <p>+91 XXX-XXX-XXXX</p>
          <p>Tamil Nadu, India</p>
        </SectionHeading>
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
            aria-label="Like this portfolio"
          >
            <FaHeart size={24} />
          </button>
          <span className="text-white">{likeCount} Likes</span>
        </div>
      </div>
    </footer>
  );
};

// Reusable Section Heading Component
const SectionHeading = ({ title, children, aos }) => (
  <div className="mb-6 md:mb-0" data-aos={aos} data-aos-delay="100">
    <h2 className="text-xl mb-2">{title}</h2>
    {children}
  </div>
);

export default Footer;
