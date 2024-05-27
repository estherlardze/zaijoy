import React from "react";
import Image from "next/image";
import { e1, e2, e3 } from "@/public";

const Embark = () => {
  return (
    <section className="w-[90%] mx-[5%] 2xl:w-xl">
      <div className="relative my-6 ">
        <Image src={e3} alt="welcome-image-1" />
        <div className="absolute bottom-16 left-16">
          <Image src={e2} alt="welcome-image-2" />
        </div>
        <div className="absolute right-4  -top-16">
          <Image src={e1} alt="welcome-image-3" className="w-full" />
        </div>

        <div className="absolute left-[30%] top-[30%] w-[45%]">
            <h1 className="font-bold text-3xl sm:text-5xl">Ready to Embark on the Adventure?</h1>
            <div className="flex gap-4 mt-5">
            <button className="button"></button>
            <button className="button"></button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Embark;
