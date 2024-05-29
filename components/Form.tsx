"use client";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mx-[5%] w-[90%] 2xl:w-[1300px] 2xl:mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-3xl" data-aos="fade-up">
          Reach Out to Us
        </h1>
        <p className="my-4 " data-aos="fade-up">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>

      <form className="bg-white p-8 rounded-lg shadow-md w-full border-2 border-dashed border-pink">
        <h2 className="text-2xl font-bold mb-2" data-aos="fade-up">
          We're Just a Message Away
        </h2>
        <p data-aos="fade-up">Reach out to us for any queries or concerns.</p>
        <div
          className="mb-4 mt-10 flex flex-col sm:flex-row gap-10 sm:gap-4"
          data-aos="fade-up"
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="your name"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink/20"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="your email"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink/20"
            required
          />
        </div>

        <div className="mb-4" data-aos="fade-up">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink/20"
            required
          />
        </div>

        <div className="mb-6" data-aos="fade-up">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="message"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink/20"
            required
          />
        </div>

        <button
          data-aos="fade-up"
          type="submit"
          className="w-full bg-pink text-white font-bold py-2 px-4 border-2 border-pink hover:text-black rounded-md hover:bg-white transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
