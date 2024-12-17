import React from "react";
import { CgWebsite } from "react-icons/cg";

import pjt1 from "./../assests/projects/travel.jpeg"
import pjt2 from "./../assests/projects/weather.jpeg"
import pjt3 from "./../assests/projects/clock.jpeg"
import pjt4 from "./../assests/projects/calculeter.jpeg"
import pjt5 from "./../assests/projects/notpad.jpeg"
import pjt6 from "./../assests/projects/w3.jpeg"
import pjt7 from "./../assests/projects/hotel.jpeg"
import soon from "./../assests/projects/soon.webp"

// Project list
const projects = [
  {
    pjtname: "Travel Home Page",
    img:pjt1,
    para: "A travel app to using with react functional componetns and Its have home page. UI have User Friendly .",
    codeLink: "https://github.com/yourusername/travel-home",
  },
  {
    pjtname: "Weather",
    img: pjt2,
    para: "A weather app providing current forecasts and location-based updates.",
    codeLink: "https://github.com/yourusername/weather-app",
  },
  {
    pjtname: "Clock",
    img:pjt3,
    para: "A digital clock application using date in java Script functions related .",
    codeLink: "https://github.com/yourusername/clock-app",
  },
  {
    pjtname: "Calculator",
    img: pjt4,
    para: "calculator for basic Arithmatic calculations.",
    codeLink: "https://github.com/yourusername/calculator",
  },
  {
    pjtname: "Notepad",
    img:pjt5,
    para: "A simple notepad app for writing, editing, and organizing notes.",
    codeLink: "https://github.com/yourusername/notepad",
  },
  {
    pjtname: "W3 School Home",
    img: pjt6,
    para: "A clone of the W3 Schools homepage with a responsive design.",
    codeLink: "https://github.com/yourusername/w3-clone",
  },
  {
    pjtname: "Simple Hotel",
    img:pjt7,
    para: "A minimalistic hotel registesation app with HTML, CSS and",
    codeLink: "https://github.com/yourusername/hotel-booking",
  },
  {
    pjtname: "Shopping",
    img: soon, // Placeholder image
    para: "Coming Soon",
  },
];

// Helper function to handle image fallbacks
const getImage = (img) => img || "image/placeholder.png";

const Project = () => {
  return (
    <div className="mx-auto text-white p-2 mt-3 bg-blue-200">
      {/* Projects heading */}
      <h2
        data-aos="fade"
        className="text-3xl flex items-center justify-center gap-2 font-serif font-bold text-green-700 p-4 mb-6 text-center"
      >
        <CgWebsite /> Projects
      </h2>

      {/* Projects grid */}
      <div className="flex flex-col justify-center items-center gap-7 sm:flex-row flex-wrap">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              data-aos="fade"
              key={index}
              className="relative group border border-gray-700 rounded-lg bg-white hover:border-white hover:shadow-lg transform transition-all duration-500 w-full max-w-sm h-60 mb-4 cursor-pointer overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={getImage(project.img)}
                alt={`${project.pjtname} preview`}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-white bottom-0 h-[40px] group-hover:h-[80%] transition-all duration-500 ease-in-out rounded-b-lg flex flex-col items-center justify-center self-end">
                {/* Project Name */}
                <h3 className="text-lg font-bold p-2 w-full text-black text-center bg-yellow-500 absolute top-0">
                  {project.pjtname}
                </h3>

                {/* Project Details */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col mt-2 mb-3 duration-500">
                  <p className="text-sm font-bold text-center text-black mb-2">
                    {project.para}
                  </p>
                  {project.codeLink ? (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 bg-green-600 hover:bg-orange-500 rounded-2xl px-3 py-1 text-white font-bold transition-colors duration-300"
                      aria-label={`View ${project.pjtname} Code`}
                    >
                      View Code
                    </a>
                  ) : (
                    <span className="text-gray-500 font-bold">
                      Code Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No projects to display.</p>
        )}
      </div>
    </div>
  );
};

export default Project;
