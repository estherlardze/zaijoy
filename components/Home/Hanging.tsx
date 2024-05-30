import React from "react";
import hf3 from "../../public/images/home-34.png";
import hf4 from "../../public/images/home-33.png";
import Image from "next/image";

const Hanging = () => {
  return (
    <div className="relative my-[100px] justify-between flex w-[90%] mt-[100px] mx-[5%] 2xl:w-[1300px] 2xl:mx-auto">
      <div className="absolute -top-[170px] left-6 hidden lg:block">
        <Image src={hf3} alt="hanging" className=" " />
      </div>
      <div className="absolute -top-[108px] right-6 swing hidden lg:block">
        <Image src={hf4} alt="hanging" className=" " />
      </div>
    </div>
  );
};

export default Hanging;
