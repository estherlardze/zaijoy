import React from "react";
import Image from "next/image";
import { e1, e2, e3 } from "@/public";
import Buyticket from "./Buyticket";
import ContactButton from "./ContactButton";

const Embark = () => {
  return (
    <section className="w-[90%] mx-[5%] flex justify-center items-center my-[100px] 2xl:w-[1300px] 2xl:mx-auto" data-aos="fade-up">
      <div className="relative">
        <Image src={e3} alt="welcome-image-1" className="w-full h-[400px]" />
        <div className="hidden md:block absolute bottom-2 lg:bottom-16 lg:left-16">
          <Image src={e2} alt="welcome-image-2" className=" w-[200px]" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center flex-col mx-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center text-black">
            Ready to Embark on the Adventure?
          </h1>
          <div className="flex gap-4 mt-5 flex-col sm:flex-row">
            <Buyticket color={"#e90e70"} textColor={"#000"} />
            <ContactButton />
          </div>
        </div>

        <div className="absolute right-4 hidden md:block -top-16">
          <Image src={e1} alt="welcome-image-3" className="h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default Embark;
