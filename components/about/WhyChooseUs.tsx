import React from "react";
import Image from "next/image";
import { features } from "@/utils/data";

const WhyChooseUs = () => {
  return (
    <section className="w-[90%] mx-[5%] 2xl:w-xl 2xl:mx-auto my-[80px]">
      <div className="text-center">
        <h1 className="font-bold text-5xl ">Why You Should Visit Us</h1>
        <p className="my-3 sm:text-lg text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-2 my-8">
        {features.map((feature, index) => (
          <div
            className="col-span-2 sm:col-span-1 p-2 flex flex-col lg:flex-row gap-4 border-2 border-pink/75 border-dashed items-center justify-center"
            key={index}
          >
            <Image src={feature.image} alt="image" />
            <div className="text-center">
              <h1 className="mb-2 font-bold text-xl">{feature.title}</h1>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
