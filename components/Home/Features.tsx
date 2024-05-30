import React from "react";
import Image from "next/image";
import { hf1, hf2 } from "@/public";
import { homefeatures } from "@/utils/data";



const Features = () => {
  return (
    <section className="w-[90%] mt-[100px] mx-[5%] 2xl:w-[1300px] 2xl:mx-auto">
      
      <div className="text-center ">
        <h1 className="font-bold text-3xl mt-[100px]" data-aos="fade-up">
          Imaginations Flourish in Safe Indoor Oasis.
        </h1>
        <p className="my-4" data-aos="fade-up">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>

      

      <div className="grid grid-cols-2 gap-12 mt-6" data-aos="fade-right">
        <div className="relative my-6 col-span-2 lg:col-span-1">
          <Image src={hf1} alt="welcome-image-1" className="w-full" />
          <div className="absolute left-20 right-20 top-20 bottom-20  flex justify-center items-center">
            <Image src={hf2} alt="welcome-image-2" className="w-full h-full" />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          {homefeatures.map((feature, index) => (
            <div
              key={index}
              className="flex gap-5 my-4 items-start"
              data-aos="fade-left"
            >
              <div
                className="rounded-full p-2"
                style={{ border: `2px solid ${feature.color}` }}
              >
                <Image
                  src={feature.image}
                  alt="features"
                  width={110}
                  className="p-4 rounded-full "
                  style={{ backgroundColor: feature.color }}
                />
              </div>
              <div>
                <h1 className="font-bold text-[20px] mb-2">{feature.title}</h1>
                <p>{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
