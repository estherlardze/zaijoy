import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, color }: any) => {
  return (
    <div
      className={`w-full h-fit shadow-md p-3 `}
      style={{ backgroundColor: service.rgbaColor, color:color }}
      data-aos="fade-up"
    >
      <div className="overflow-hidden">
        <Image
          src={service.image}
          className="transform transition-transform duration-300 hover:scale-110 w-full"
          alt={`team member`}
          style={{ border: `2px dashed ${service.color}` }}
        />
      </div>
      <div
        className="px-4  py-8"
        style={{ border: `2px dashed ${service.color}` }}
      >
        <h1 className="font-bold text-xl hover:text-pink transition-all duration-300 mb-4">
          {service.title}
        </h1>
        <p>{service.text}</p>

        <Link href={service.route} className="underline">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
