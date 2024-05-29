"use client";

import React, { useState, useRef, useEffect } from "react";

type AccorProps = {
  title: string;
  content: string;
};

const Accordian = ({ title, content }: AccorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLElement | null>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="border-2 border-gray-700 rounded-md mb-2 "
      data-aos="fade-up"
    >
      <button
        onClick={toggleAccordion}
        className={`w-full flex justify-between items-center p-4 bg-transparent ${
          isOpen && "text-pink/80"
        } `}
      >
        <span>{title}</span>
        <span className="text-lg">{isOpen ? "x" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}`,
          transition: "max-height 0.5s ease-out",
        }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-transparent">{content}</div>
      </div>
    </div>
  );
};

export default Accordian;
