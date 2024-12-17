import React, {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa";
import html from './../assests/skills/html.png'
import css from './../assests/skills/css.png'
import js from './../assests/skills/js.png'
import react from './../assests/skills/react.png'
import tailwind from './../assests/skills/tailwind.png'
import java from './../assests/skills/java.png'
import sql from './../assests/skills/sql.png'
import typee from './../assests/skills/type.png'
import git from './../assests/skills/github.png'
import vscode from './../assests/skills/vs code.png'


const Skills = () => {
  const skills = [
    { id: 1, Language: "HTML", img:html },
    { id: 2, Language: "CSS", img: css },
    { id: 3, Language: "JavaScript", img: js },
    { id: 4, Language: "React", img:react  },
    { id: 5, Language: "Tailwind CSS", img:tailwind },
    { id: 6, Language: "Core Java", img: java },
    { id: 7, Language: "MySQL", img: sql},
    { id: 8, Language: "Git/GitHub", img: git },
    { id: 9, Language: "VS Code", img: vscode },
    { id: 10, Language: "Type Writer", img: typee },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="p-6 w-full mx-auto bg-blue-50 shadow-xl">
      {/* Heading */}
      <h2
        className="text-4xl font-serif font-bold mb-4 text-center text-orange-600 flex items-center justify-center gap-2 cursor-pointer"
        data-aos="fade-down"
      >
        <FaLaptopCode /> Skills{" "}
        <span className="text-black">& Abilities</span>
      </h2>

      {/* Technical Skills */}
      <h1
        className="text-2xl font-bold text-pink-500 mb-6 border-b-2 pb-2 cursor-pointer hover:text-orange-400"
        data-aos="fade-up"
      >
        Technical Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {skills.slice(0, 7).map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {/* Other Skills */}
      <h1
        className="text-2xl font-bold text-pink-500 mb-6 mt-6 border-b-2 pb-2 cursor-pointer hover:text-orange-400"
        data-aos="fade-up"
      >
        Other Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {skills.slice(7).map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ skill }) => {
  return (
    <div
      data-aos="slide-up"
      data-aos-delay="100"
      className="border border-gray-700 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 hover:border-2 hover:border-white transition-colors"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <img
          className="w-12 h-12 m-auto hover:scale-105 transition-transform duration-300"
          src={skill.img}
          alt={skill.Language}
        />
        <h2 className="text-xl font-bold text-blue-300">{skill.Language}</h2>
      </div>
    </div>
  );
};

export default Skills;
