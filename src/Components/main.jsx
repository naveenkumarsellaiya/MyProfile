import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";

import { useTypewriter, Cursor } from "react-simple-typewriter";

function Main() {
  const icons = [
    {
      icon: <CiLinkedin />,
      link: "https://www.linkedin.com/in/naveenkumar24/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/naveenkumarsellaiya",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/your_profile",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/dora_ns_24/",
    },
    {
      icon: <FaTelegramPlane />,
      link: "https://t.me/your_profile",
    },
  ];


    useEffect(() => {
      Aos.init({
        duration: 1000, // Animation duration in milliseconds
        easing: "ease-in-out", // Animation easing
        offset: 100, // Offset (in pixels) before the animation starts
        delay: 200, // Delay before animation starts (optional)
        // Run animation only once
      });
    },);

  const [text] = useTypewriter({
    words: ["React Developer...", "Frontend Developer...", "Web Developer..."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 1000,
  });

  return (
    <div className="h-fit md:h-screen w-[100%] flex flex-col md:flex-row md:justify-evenly object-cover bg-violet-50 p-5 md:p-2">
      {/* Left Section */}
      <div className="text-blue-900 md:mt-28 md:w-2/4 font-bold flex flex-col mt-4 ml-20 md:ml-0 ">
        <h3 className="text-[50px] font-bold ml:22" data-aos="fade-left">Hi There, I'm </h3>
        <h2 className="font-serif group my-2 font-bold tracking-wider hover:text-green-600">
          <span className="text-orange-600 text-[45px] group-hover:text-indigo-500  cursor-pointer transition-colors " data-aos="zoom-out" data-aos-delay="200">Naveenkumar <span className="text-orange-700 group-hover:text-indigo-500 ">
            S</span> </span>
        </h2>
        <h2 className="text-2xl w-[90%] md:w-[400px]" data-aos="fade-right">
          I Am a{" "}
          <span className="font-bold text-md text-red-900">{text}</span>
          <Cursor />
        </h2>

        {/* Resume Button */}
        <div className="flex mt-4 flex-col">
          <button data-aos="zoom-in-down	" className="shadow-lg shadow-blue-900  w-fit text-white transition-all duration-300 md:ml-12 bg-blue-800 px-10 py-2 rounded-lg hover:bg-blue-700 hover:scale-105">
          <a href="Naveenkumar S Resume.pdf" download>


             RESUME
          </a>
     
          </button>

          {/* Social Links */}
          <div className="font-bold flex w-full gap-6 mt-5 order-1">
            {icons.map((item, index) => (
              <a
                key={index}
                href={item.link}
             data-aos="zoom-out"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 rounded-full p-3 border-y-blue-300 border-x-green-500 hover:bg-gray-500 hover:shadow-2xl  hover:scale-125 transition-all ease-linear 
                bg-black text-blue-400
              duration-150 cursor-pointer"
                aria-label="Social Link"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex justify-center md:mt-28 mt-5 md:order-2 group">
        <div className="profile-border transform transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-4 group-hover:rotate-y-15 group-hover:rotate-x-15 group-hover:scale-105" data-aos="flip-up">
          <img
            src="/image/pic.png"
            alt="Naveenkumar's Profile"
            className="rounded-full w-70 h-70"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
