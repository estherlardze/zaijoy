import React from "react";
import Buyticket from "../Buyticket";
import Image from "next/image";
import star from "@/public/images/home-46.png";
import header from "@/public/images/home-8.png";
import header2 from "@/public/images/home-1.png";
import header3 from "@/public/images/home-43.png";
import header4 from "@/public/images/home-45.png";
import header5 from "@/public/images/home-42.png";
import header6 from "@/public/images/home-44.png";

const Header = () => {
  return (
    <section className="bg-hero bg-cover bg-no-repeat bg-center lg:h-[130vh] 2xl:h-[60vh] w-full relative ">
      <div className="w-[90%]  mx-[5%] 2xl:w-[1300px] 2xl:mx-auto">
        <Image
          src={header}
          alt="header"
          className="absolute -top-[100px] right-0 w-[50%] 2xl:w-[30%]"
        />
        <Image
          src={header2}
          alt="header"
          className="absolute -top-[100px] right-0 w-[50%] 2xl:w-[30%]"
        />

        <Image
          src={header3}
          alt="header"
          className="absolute top-[450px] right-[30%] w-[200px] hidden lg:block"
        />
        <Image
          src={header5}
          alt="header"
          className="absolute top-[450px] right-[30%] w-[200px] hidden lg:block"
        />

        <Image
          src={header4}
          alt="header"
          className="absolute top-[350px] right-[45%] w-[100px] hidden lg:block"
        />
        <Image
          src={header6}
          alt="header"
          className="absolute top-[350px] right-[45%] w-[100px] hidden lg:block"
        />

        <div className="flex flex-col py-[90px] md:py-[200px] ">
          <div className="flex flex-col text-white ml-6 lg:w-[40%] z-10">
            <h1 className="text-pink text-lg " data-aos="fade-right">
              Care and Play Unite in Harmony
            </h1>{" "}
            <div className="relative my-2 md:my-6">
              <h1
                className="font-bold text-4xl lg:text-[60px]"
                style={{ lineHeight: "70px" }}
                data-aos="fade-up"
              >
                Moments for Your Precious Little Star
              </h1>
              <Image
                src={star}
                alt="star"
                className="absolute right-2 top-10 hidden sm:block"
              />
            </div>
            <p className="my-4" data-aos="fade-up">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some.
            </p>
            <div className="flex gap-2">
              {" "}
              <Buyticket color={"#e90e70"} textColor={"#fff"} />
              <Buyticket color={"#e90e70"} textColor={"#fff"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
