import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserTie } from "react-icons/fa6";


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col justify-evenly items-center bg-blue-100 px-4 py-8">
      <h2 className="text-4xl flex gap-1 font-bold mt-3" data-aos="fade-down">
       <FaUserTie/> About <span className='text-violet-900'>Me</span>
      </h2>

      <div className="flex flex-col xl:flex-row items-center mt-8" >
        <div className="group transform transition-transform duration-500 hover:scale-105" data-aos="flip-up">
          <img
            src="/image/pic2.jpeg"
            alt="Profile picture of Naveenkumar S"
            className="border w-72 h-80 mt-10 rounded-lg"
          />
        </div>

        <div className="w-full md:w-[70%] mt-9 md:mt-0 md:ml-8 ">
          <h2 className="text-2xl font-semibold mt-5" data-aos="fade-up">I'm Naveenkumar S</h2>
          <p className="text-lg font-medium text-orange-600 cursor-pointer" data-aos="fade-down">React Developer</p>
          <p className=" text-[15px] indent-5 text-justify mt-4" data-aos="zoom-in-out">
            A passionate React developer. I have completed my Bachelor of Computer Applications (BCA) from Imayam Arts and Science College. Recently, I completed a specialized React development training program at Besant Technologies, Velachery, in September 2024. I am dedicated to building dynamic and responsive web applications using React, and I'm constantly expanding my knowledge and skills in the field. Originally from Trichy, I am enthusiastic about exploring new opportunities to grow and contribute in the world of web development.
          </p>
         <p className='mt-6 mb-2 text-blue-600 font-semibold' data-aos="fade-down">EMAIL: 
           <a href="mailto:naveensit24@gmail.com" className='text-black'> naveensit24@gmail.com</a>
          
          </p>
          <p className='font-semibold cursor-pointer'> <span className=' text-blue-600 ' data-aos="fade-up"> Place:</span> Trichy,Tamilnadu India</p>

          <button className="shadow-lg shadow-blue-900  w-fit text-white transition-all duration-300 md:ml-12 bg-green-800 px-10 py-2 rounded-lg hover:bg-blue-700 mt-4 hover:scale-105" data-aos="flip-up">
          
          <a href="/Naveenkumar S Resume.pdf" download>
            Resume&gt; </a></button>

        </div>
      </div>
    </section>
  );
};

export default About;
