import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserTie } from "react-icons/fa6";
import profile2 from './../assests/profiles/pic2.jpeg'

const About = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col justify-evenly items-center bg-blue-100 px-4 py-8">
      {/* Section Heading */}
      <h2 className="text-4xl flex gap-1 font-bold mt-3" data-aos="fade-down">
        <FaUserTie /> About <span className="text-violet-900">Me</span>
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col xl:flex-row items-center mt-8">
        {/* Profile Picture */}
        <div
          className="group transform transition-transform duration-500 hover:scale-105"
          data-aos="flip-up"
        >
          <img
            src={profile2}
            alt="Profile picture of Naveenkumar S"
            className="border w-72 h-80 mt-10 rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[70%] mt-9 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-semibold mt-5" data-aos="fade-up">
            I'm Naveenkumar S
          </h2>
          <p
            className="text-lg font-medium text-orange-600 cursor-pointer"
            data-aos="fade-down"
          >
            React Developer
          </p>
          <p
            className="text-[15px] indent-5 text-justify mt-4"
            data-aos="zoom-in-out"
          >
            A passionate React developer. I have completed my Bachelor of
            Computer Applications (BCA) from Imayam Arts and Science College.
            Recently, I completed a specialized React development training
            program at Besant Technologies, Velachery, in September 2024. I am
            dedicated to building dynamic and responsive web applications using
            React, and I'm constantly expanding my knowledge and skills in the
            field. Originally from Trichy, I am enthusiastic about exploring new
            opportunities to grow and contribute in the world of web
            development.
          </p>

          {/* Contact Information */}
          <p className="mt-6 mb-2 text-blue-600 font-semibold" data-aos="fade-down">
            EMAIL:&nbsp;
            <a
              href="mailto:naveensit24@gmail.com"
              className="text-black hover:text-violet-800 transition duration-200"
            >
              naveensit24@gmail.com
            </a>
          </p>
          <p
            className="font-semibold cursor-pointer"
            data-aos="fade-up"
          >
            <span className="text-blue-600">Place:</span> Trichy, Tamilnadu, India
          </p>

          {/* Resume Button */}
          <a
            href="/Naveenkumar S Resume.pdf"
            download
            className="inline-block shadow-lg shadow-blue-900 text-white transition-all duration-300 bg-green-800 px-10 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 mt-4"
            data-aos="flip-up"
          >
            Resume &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
