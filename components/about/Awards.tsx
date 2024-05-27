import React from "react";
import { awards } from "@/utils/data";
import Image from "next/image";

const Awards = () => {
  return (
    <div className="bg-award bg-cover bg-no-repeat bg-center w-[90%] my-[100px] mx-[5%] h-fit rounded-xl">
      <div className="grid grid-cols-4 gap-8 justify-around items-center text-white p-4">
        {awards.map((award, index) => (
          <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1 flex  gap-4 items-center">
            <Image src={award.image} alt="image" />
            <div>
              <h1 className="font-bold text-3xl">{award.title}</h1>
              <p className="font-semibold">{award.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
