import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLaptopCode } from "react-icons/fa";


const Skills = () => {
  const skills = [
    {
      id: 1,
      Language: "HTML",
      img: "image/html.png",
    
    },
    {
      id: 2,
      Language: "CSS",
      img: "image/css.png",
     
    },
    {
      id: 3,
      Language: "JavaScript",
      img: "image/js.png",
      
    },
    {
      id: 4,
      Language: "React",
      img: "image/react.png",
      
    },
    {
      id: 5,
      Language: "Tailwind CSS",
      img: "image/tailwind.png",
     
    },
    {
      id: 6,
      Language: "Core Java",
      img: "image/java.png", // Replace with an actual path to your Core Java logo
    
    },
    {
      id: 7,
      Language: "MYSQL",
      img: "image/sql.png", // Replace with an actual path to your SQL logo
      percentage: 75,
     
    },
    {
      id: 8,
      Language: "Git/GitHub",
      img: "image/github.png", // Replace with an actual path to your GitHub logo
  
    },
    {
      id: 9,
      Language: "VS Code",
      img: "image/vs code.png", // Replace with an actual path to your VS Code logo
     
    },
    {
      id: 10,
      Language: "Type Writer",
      img: "image/type.png", // Replace with an actual path to your Typewriter logo
    
    },
  ];

  const [progressValues, setProgressValues] = useState(skills.map(() => 0)); // Initialize all progress values to 0

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgressValues(skills.map((skill) => skill.percentage));
    }, 1000); // Delay before animation starts
    return () => clearTimeout(timeout);
  }, [skills]);

  return (
    <div className="p-6 w-full mx-auto bg-blue-50 text-white shadow-xl">
      <h2 className="text-4xl font-serif font-bold  mb-4 text-center text-orange-600 cursor-pointer gap-2 items-center justify-center p-4 flex" data-aos="fade-down"> <FaLaptopCode/>Skills  <span className="text-black "> & Abilities</span></h2>
      <h1 className="text-2xl font-bold text-pink-500 w-fit mb-6 border-b-2 border-white-400 pb-2 cursor-pointer hover:text-orange-400" data-aos="fade-up">
        Technical Skills
      </h1>








      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        
        {skills.slice(0, 7).map((skill, index) => (
          <div
            key={skill.id} data-aos="slide-up" data-aos-delay="100" 
            className=" border-gray-700 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 border-2 hover:border-2  hover:border-white transition-colors"
          >
            <div className="flex flex-col justify-center items-center gap-3">       
                     <div className=" order-2">
                <h2 className="text-xl font-bold text-blue-300 ">{skill.Language}</h2>
              </div>

              <img
                  className="w-12 h-12 m-auto  order-1"
                  src={skill.img}
                  alt={skill.Language}
                />
            </div>

            <p className="text-justify text-sm mt-4 indent-6">{skill.para}</p>
          </div>
        ))}
      </div>























      {/* Other Skills Section */}
      <h1 className="text-2xl font-bold text-pink-500 w-fit mb-6  pb-2 cursor-pointer mt-6 hover:text-orange-400 style border-b-2" data-aos="fade-up">
        Other Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        
        {skills.slice(7).map((skill, index) => (
          <div
            key={skill.id} data-aos="slide-up" data-aos-delay="100" 
            className="border border-gray-700 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 hover:border-2 hover:border-white transition-colors"
          >
            <div className="flex flex-col justify-center items-center gap-3">       
                     <div className=" order-2">
                <h2 className="text-xl font-bold text-blue-300 ">{skill.Language}</h2>
              </div>

              <img
                  className="w-12 h-12 m-auto  order-1"
                  src={skill.img}
                  alt={skill.Language}
                />
            </div>

            <p className="text-justify text-sm mt-4 indent-6">{skill.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
