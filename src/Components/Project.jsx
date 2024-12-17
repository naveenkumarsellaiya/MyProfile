import React from "react";
import { CgWebsite } from "react-icons/cg";


const projects = [
  {
    pjtname: "Travel Home Page",
    img: "image/travel.png",
    para: "A travel app to explore destinations, book trips, and manage itineraries.",
  },
  {
    pjtname: "Weather",
    img: "image/weatherapp.png",
    para: "A weather app providing current forecasts and location-based updates.",
  },
  {
    pjtname: "Clock",
    img: "image/clock.png",
    para: "A digital clock application with timezone and alarm functionalities.",
  },
  {
    pjtname: "Calculator",
    img: "image/calsi.png",
    para: "A feature-rich calculator for basic and advanced calculations.",
  },
  {
    pjtname: "Notepad",
    img: "image/notes.png",
    para: "A simple notepad app for writing, editing, and organizing notes.",
  },
  {
    pjtname: "W3 School Home",
    img: "image/w3.png",
    para: "A clone of the W3 Schools homepage with a responsive design.",
  },
  {
    pjtname: "Simple Hotel",
    img: "image/hotel.png",
    para: "A minimalistic hotel booking app with room details and reservation options.",
  },
  {
    pjtname: "Shopping",
    img: null, // Placeholder
    para: "Coming Soon",
  },
];

const Project = () => {
  return (
    <div className="mx-auto text-white p-2 mt-3 bg-blue-200">
  {/* Projects heading */}
  <h2  data-aos="fade"  className="text-3xl flex items-center justify-center gap-2  font-serif font-bold text-green-700 p-4 mb-6 text-center">
   <CgWebsite/> Projects
  </h2>

  {/* Projects grid */}
  <div className="flex flex-col justify-center items-center gap-7 sm:flex-row flex-wrap">
    {projects.length > 0 ? (
      projects.map((project, index) => (
        <div data-aos="fade"
          key={index}
          className="relative group border hover:scale-110 border-gray-700 rounded-lg bg-white hover:border-white shadow-md hover:shadow-lg transition-all duration-500 transform w-full max-w-sm h-60 mb-4 hover:rotate-360 cursor-pointer overflow-hidden"
        >
          {/* Project image */}
          <img
            src={project.img || "image/placeholder.png"}
            alt={`${project.pjtname} preview`}
            className="w-full h-full object-cover rounded-lg transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white bottom-0 h-[40px] group-hover:h-[80%] transition-all duration-500 ease-in-out rounded-b-lg flex flex-col items-center justify-center self-end">

            <h3 className="text-lg  font-bold p-2 w-full text-black  text-center bg-yellow-500 absolute top-0">
              {project.pjtname}
            </h3>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col mt-2 mb-3 duration-500 ">
              <p className="text-sm font-bold text-center text-black mb-2">
                {project.para}
              </p>
              <button className="border-2 w-fit self-end  mr-5  bg-green-600 rounded-2xl px-3 py-1 text-white font-bold hover:bg-orange-500 transition-colors duration-300 ">
                View Code
              </button>
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
