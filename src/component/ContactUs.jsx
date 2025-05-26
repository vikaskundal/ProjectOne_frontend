import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsPage = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
         "service_iawnouq",
        "template_r1t40cb",      
             
        formRef.current,
        "mcBUiKgauov6CGpeb"       
      )
      .then(
        (result) => {
          alert("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
