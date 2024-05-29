import React from "react";

const ContactButton = () => {
  return (
    <button
      className="group relative inline-flex  items-center justify-center overflow-hidden rounded-md  font-medium"
      data-aos="fade-up"
    >
      <div className="inline-flex text-lg py-2 font-semibold translate-y-0 items-center justify-center border-2 border-pink px-8 text-black transition duration-500 group-hover:-translate-y-[150%]">
        Contact Us
      </div>
      <div className="absolute inline-flex w-full translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0">
        <span className="absolute translate-y-full scale-y-0 bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        <span className="z-10 border-2 py-4 text-lg bg-pink text-center h-full rounded-md my-auto  w-full">
          {" "}
          Contact Us
        </span>
      </div>
    </button>
  );
};

export default ContactButton;
