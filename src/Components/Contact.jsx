import React, { useState, useEffect } from "react";
import { MdConnectWithoutContact } from "react-icons/md";

import call from './../assests/profiles/call.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("contactForm"));
    if (savedData) setFormData(savedData);
  }, []);

  // Update form data when the input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form and save to local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Form data has been saved!");
  };

  // Reset form and clear local storage
  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    localStorage.removeItem("contactForm");
  };

  return (
    <div className="w-full h-fit bg-pink-100">
      {/* Header */}
      <h2
        className="mt-3 text-3xl p-3 text-center font-serif font-bold text-indigo-900 flex items-center justify-center gap-1"
        data-aos="slide-up"
        data-aos-delay="100"
      >
        <MdConnectWithoutContact className="text-4xl" />
        Contact <span>ME</span>
      </h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full p-3 flex justify-center items-center"
      >
        <div className="flex flex-col md:flex-row bg-white rounded-md w-[90%] py-5 justify-center items-center">
          {/* Contact Image */}
          <div className="w-full md:w-[30%] h-[400px]">
            <img
              src={call}
              alt="Contact"
              className="w-full h-full object-cover"
              data-aos="slide-up"
              data-aos-delay="100"
            />
          </div>

          {/* Input Fields */}
          <div className="flex flex-col w-[90%] md:w-[60%] items-center">
            {/** Reusable input */}
            <ContactInput
              name="name"
              placeholder="Name"
              value={formData.name}
              handleChange={handleChange}
              required
              dataAos="slide-up"
            />
            <ContactInput
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              handleChange={handleChange}
              required
              dataAos="slide-up"
            />
            <ContactInput
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              pattern="[0-9]{10}"
              handleChange={handleChange}
              required
              dataAos="slide-up"
            />

            {/* Message Box */}
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 h-[80px] border-2 border-gray-500 hover:border-blue-600 mt-3 mb-3 rounded-sm"
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Message"
            ></textarea>

            {/* Buttons */}
            <div className="flex justify-around w-full mt-4">
              <ContactButton
                text="Reset"
                color="bg-blue-900"
                onClick={handleReset}
                aosType="fade-left"
              />
              <ContactButton
                text="Submit"
                color="bg-green-600"
                type="submit"
                aosType="fade-right"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// Reusable Input Component
const ContactInput = ({
  name,
  type = "text",
  placeholder,
  value,
  handleChange,
  required,
  pattern,
  dataAos,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    pattern={pattern}
    className="w-full p-2 h-[50px] border-2 border-gray-500 rounded-sm hover:border-blue-600 mt-4"
    required={required}
    aria-label={name}
    data-aos={dataAos}
    data-aos-delay="100"
  />
);

// Reusable Button Component
const ContactButton = ({ text, color, onClick, type = "button", aosType }) => (
  <button
    type={type}
    onClick={onClick}
    className={`${color} text-white font-semibold px-8 py-2 rounded-md hover:scale-110 hover:shadow-md shadow-black hover:shadow-blue-500`}
    data-aos={aosType}
    data-aos-delay="100"
  >
    {text}
  </button>
);

export default Contact;
