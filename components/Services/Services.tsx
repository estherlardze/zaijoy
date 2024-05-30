import React from "react";
import { services } from "@/utils/data";
import ServiceCard from "./ServiceCard";
import { StaticImageData } from "next/image";

type ServiceProp = {
  name: string;
  title: string;
  image: StaticImageData;
  color: string;
  rgbaColor: string;
  route: string;
};

const Services = () => {
  return (
    <div className="my-[100px] mx-[5%] w-[90%] text-gray-800 2xl:w-[1300px] 2xl:mx-auto">
      <h1 className="text-center font-bold text-5xl mb-10">
        Explore Our Specialized Services
      </h1>
      <p className="text-center  text-black/80">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </p>

      <div className="grid grid-cols-6 gap-6 mt-[50px]">
        {services.map((service, index) => (
          <div className="col-span-6 sm:col-span-3 lg:col-span-2" key={index}>
            <ServiceCard service={service} color="#000"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
