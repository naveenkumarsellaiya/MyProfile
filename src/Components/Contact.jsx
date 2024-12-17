import React, { useState, useEffect } from "react";
import { MdConnectWithoutContact } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Load data from local storage when component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("contactForm"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Save form data to local storage
    localStorage.setItem("contactForm", JSON.stringify(formData));

    alert("Form data are saved");
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Clear form data from local storage
    localStorage.removeItem("contactForm");
  };

  return (
    <div className="w-full h-fit bg-pink-100">
      <h2 className="mt-3 text-3xl p-3 text-center font-serif font-bold text-indigo-900 flex items-center justify-center gap-1" data-aos="slide-up " data-aos-delay="100">
     <MdConnectWithoutContact className="text-4xl"/> 
    Contact <span className="">ME</span>
      </h2>
      <form onSubmit={handleSubmit} className="w-full p-3 h-full flex justify-center items-center">
        <div className="flex bg-white rounded-md w-[90%] py-5 justify-center items-center flex-col md:flex-row h-full">
          <div className="w-[100%] md:w-[30%] h-[400px]">
            <img
              src="image/call2.avif"
              alt="Contact Icon"
              className="w-full h-[100%]"
              data-aos="slide-up"
              data-aos-delay="100"
            />
          </div>
          <div className="flex flex-col w-[90%] md:w-[60%] items-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 h-[50px] border-2 border-gray-500 rounded-sm hover:border-blue-600"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border-2 border-gray-500 hover:border-blue-600 p-2 h-[50px] mt-6 mb-6 rounded-sm"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email"
              data-aos="slide-up"
              data-aos-delay="100"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{10}"
              className="w-full border-2 border-gray-500 hover:border-blue-600 p-2 h-[50px] rounded-sm"
              value={formData.phone}
              onChange={handleChange}
              required
              aria-label="Phone"
              data-aos="slide-up"
              data-aos-delay="100"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 h-[80px] border-2 border-gray-500 hover:border-blue-600 mt-3 mb-3 rounded-sm"
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Message"
            ></textarea>
            <div className="flex justify-around w-full mt-4">
              <button
                type="button"
                onClick={handleReset}
                className="border-2 bg-blue-900 text-white px-8 py-2 rounded-md font-semibold hover:scale-110 hover:shadow-md shadow-black hover:shadow-blue-500"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Reset
              </button>
              <button
                type="submit"
                className="border-2 bg-green-600 font-semibold text-white px-8 py-2 rounded-md hover:scale-110 hover:shadow-md shadow-black hover:shadow-blue-500"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>




      
    </div>
  );
};

export default Contact;
