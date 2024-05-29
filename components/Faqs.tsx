import React from "react";
import { faqs } from "@/utils/data";
import Accordian from "./Accordian";



const Faqs = () => {

 

  return (
    <section className="bg-award bg-cover bg-no-repeat bg-center h-fit">
      <div className=" w-[90%] py-[100px] mx-[5%] flex flex-col justify-center items-center text-white 2xl:w-[1300px] 2xl:mx-auto ">
        <h1 className="font-bold text-5xl ">Curious Minds, Clear Answers!</h1>
        <p className="my-3 sm:text-lg text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-[50px]">
          {faqs.map((item, index) => (
              <div className="col-span-2 md:col-span-1">
                <Accordian
                key={index}
                title={item.value}
                content={item.description}
              />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
