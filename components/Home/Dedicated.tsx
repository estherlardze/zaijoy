import React from "react";
import home1 from "@/public/images/home-28.png";
import home2 from "@/public/images/home-29.png";
import Image from "next/image";
import { services } from "@/utils/data";
import ServiceCard from "../ServiceCard";

const Dedicated = () => {
  return (
    <div className="bg-award bg-center bg-no-repeat bg-cover w-full h-fit pb-8 lg:pb-0 lg:h-[80vh] flex flex-col md:mb-[300px] mt-[70px] lg:mt-0 relative lg:-top-[200px]">
      <section className="flex gap-6  2xl:w-[1300px] 2xl:mx-auto text-white pt-[70px]">
        <Image
          src={home2}
          alt="Home"
          className="hidden lg:block"
          data-aos="fade-right"
        />

        <div className="text-center ">
          <h1 className="font-bold text-5xl mb-4" data-aos="fade-up">
            Dedicated to Joy, Growth, Endless Giggles.
          </h1>
          <p className="text-gray-400" data-aos="fade-up">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>

        <Image
          src={home1}
          alt="Home"
          className="hidden lg:block"
          data-aos="fade-left"
        />
      </section>

      <div className="grid grid-cols-6 gap-6 mt-[100px] w-[90%]  mx-[5%] 2xl:w-[1300px] 2xl:mx-auto">
        {services.slice(0, 3).map((service, index) => (
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <ServiceCard service={service} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dedicated;
