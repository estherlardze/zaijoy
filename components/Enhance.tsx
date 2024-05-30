import React from "react";
import { enhances } from "@/utils/data";
import Image from "next/image";

const Enhance = () => {
  return (
    <section className="mx-[5%] w-[90%] my-[90px] 2xl:w-[1300px] 2xl:mx-auto mb-[100px] overflow-hidden">
      <div className="text-center">
        <h1 className="font-bold text-3xl"  data-aos="fade-up">
          Enhancing Moments with Exceptional Offers.
        </h1>
        <p className="my-4"  data-aos="fade-up">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>

      <div className="grid grid-cols-4">
        {enhances.map((feature, index) => (
          <div
            className="col-span-4 sm:col-span-2 py-4 lg:col-span-1 flex flex-col gap-4 border-2 border-pink/75 border-dashed items-center justify-center"
            key={index}
            data-aos="fade-up"
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

export default Enhance;
