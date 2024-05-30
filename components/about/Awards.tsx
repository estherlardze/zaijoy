import React from "react";
import { awards } from "@/utils/data";
import Image from "next/image";
import CountUp from "react-countup";

const Awards = () => {
  return (
    <div
      className="bg-award bg-cover bg-no-repeat bg-center w-[90%] my-[100px] mx-[5%] h-fit rounded-xl 2xl:w-[1300px] 2xl:mx-auto"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-4 gap-8 justify-around items-center text-white p-4">
        {awards.map((award, index) => (
          <div
            key={index}
            className="col-span-4 sm:col-span-2 lg:col-span-1 flex gap-4 items-center"
          >
            <Image src={award.image} alt="image" />
            <div>
              <h1 className="font-bold text-3xl">
                <CountUp end={parseInt(award.title)} duration={5} />+
              </h1>
              <p className="font-semibold">{award.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
