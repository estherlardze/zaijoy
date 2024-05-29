import React from "react";
import Image from "next/image";
import { pricings } from "@/utils/data";
import { CiCircleCheck } from "react-icons/ci";
import Buyticket from "./Buyticket";
import { home10, home11 } from "@/public";

const Adventure = () => {
  return (
    <section className="text-black mx-[5%] w-[90%] my-[90px] 2xl:w-[1300px] 2xl:mx-auto">
      <h1 className="text-center font-bold text-5xl mb-10" data-aos="fade-up">
        Easy Rates, Happy Play!
      </h1>
      <p className="text-center my-6 text-black/80" data-aos="fade-up">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form.
      </p>

      <div className="lg:mx-[6%] lg:w-[88%] border-2 border-dashed border-orange-600 p-12 relative">
        <Image
          src={home10}
          alt="image"
          className="hidden lg:block absolute -left-[2px] -top-[2px]"
        />
        <Image
          src={home11}
          alt="image"
          className="hidden lg:block absolute -right-[2px] -bottom-[2px]"
        />
        <div className="grid grid-cols-6  gap-4 ">
          {pricings.map((price, index) => (
            <div
              key={index}
              className="col-span-6 sm:col-span-3 lg:col-span-2 py-6 px-4 relative"
              style={{ backgroundColor: price.rgbaColor }}
              data-aos="fade-up"
            >
              <Image
                src={home10}
                alt="image"
                width={70}
                className="absolute left-0 top-0"
                style={{ color: price.color }}
              />

              <h1 className="text-xl font-bold text-center">{price.range}</h1>
              <h1
                className="font-bold text-5xl text-center mt-3"
                style={{ color: price.color }}
              >
                {price.cost} <span className="text-lg">/ Child</span>
              </h1>
              <div className="flex flex-col gap-3 my-6">
                {price.benefits.map((bebenit, index) => (
                  <article className="flex items-center gap-2" key={index}>
                    <CiCircleCheck />
                    <p>{bebenit}</p>
                  </article>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <Buyticket color={price.color} textColor={"#121110"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventure;
