import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa6";
import besant from './../assests/educations/besant.jpeg'
import college from './../assests/educations/imayam.jpeg'
import school from './../assests/educations/school.jpeg'

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const educationData = [
    {
      id: 1,
      title: "Front-End Development",
      institution: "Besant Technologies, Velachery",
      year: "OCT/2024",
      imgSrc:besant,
      details:
        "I completed a Front-End Development course at Besant Technologies, where I gained hands-on experience in HTML, CSS, JavaScript, and React.",
    },
    {
      id: 2,
      title: "Bachelor's Degree",
      institution: "Imayam Arts and Science College, Trichy",
      year: "MAY/2024",
      GCPA: "70%",
      details:
        "Bachelor's Degree in Computer Applications, focusing on programming, database management, and software development.",
      imgSrc:college,
    },
    {
      id: 3,
      title: "HSC",
      institution: "Government High Secondary School, B.Mettur, Thuraiyur",
      year: "MAR/2021",
      Percentage: "85% ",
      details:
        "Achieved 85% in the Higher Secondary Certificate (HSC) examinations, specializing in Science and Mathematics.",
      imgSrc:school,
    },
    {
      id: 4,
      title: "SSLC",
      institution: "Government High Secondary School, B.Mettur, Thuraiyur",
      year: "MAR/2019",
      Percentage: "75% ",
      details:
        "Completed Secondary School Certificate (SSLC) with a strong foundation in core subjects, scoring 75%.",
        imgSrc:school,
    },
  ];

  const handleMoreClick = (edu) => {
    setSelectedEducation(edu);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEducation(null);
  };

  return (
    <div className="w-full h-fit mt-0.5 bg-violet-400 mb-2 mx-auto text-black font-inria p-2">
      {/* Heading */}
      <h2
        className="text-4xl font-serif font-bold py-4 mb-4 text-center flex items-center justify-center gap-2 cursor-pointer"
        data-aos="flip-up"
      >
        <FaGraduationCap /> My <span className="text-orange-500">&Education</span>
      </h2>

      {/* Education Cards */}
      <div className="flex flex-col gap-3 justify-center w-full p-10 items-center">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            data-aos="zoom-in-up"
            className="w-[80%] bg-white flex shadow-md border border-gray-300 rounded-lg cursor-pointer hover:shadow-2xl transition duration-300"
          >
            {/* Image Section */}
            <div className="w-[200px]">
              <img
                src={edu.imgSrc}
                alt={edu.title}
                className="h-full w-full object-cover rounded-l-lg hover:grayscale hover:scale-105 transition duration-300"
              />
            </div>

            {/* Details Section */}
            <div className="w-[75%] flex flex-col justify-between p-4 md:w-[80%]">
              <h2 className="text-green-400 font-semibold text-center uppercase">
                {edu.title}
              </h2>
              <p className="text-center mt-1">{edu.institution}</p>
              <p className="text-center mt-1 capitalize">{edu.year}</p>
              <button
                className="text-white underline bg-green-700 hover:bg-green-600 px-3 py-1 mt-2 self-end rounded transition-all"
                onClick={() => handleMoreClick(edu)}
              >
                More &gt;&gt;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black rounded-lg w-[90%] md:w-[50%] p-6 shadow-lg">
            <h2 className="text-xl font-bold text-center mb-4">
              {selectedEducation.title}
            </h2>
            <p className="text-center mb-4">
              <strong>Institution:</strong> {selectedEducation.institution}
            </p>
            <p className="text-center mb-4">
              <strong>Date:</strong> {selectedEducation.year}
            </p>
            <p className="text-center">{selectedEducation.details}</p>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded block mx-auto transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
