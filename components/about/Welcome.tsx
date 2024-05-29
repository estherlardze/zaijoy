"use client";

import React, { useState } from "react";
import Image from "next/image";
import { about1, about2, about3 } from "@/public";
import Popup from "./Popup";

const Welcome = () => {
  const [openVideo, setOpenVideo] = useState(false);

  const closeVideo = () => {
    setOpenVideo(!openVideo);
  };

  return (
    <section className="flex flex-col justify-center items-center w-[90%] mx-[5%] 2xl:w-[1300px] 2xl:mx-auto my-[80px] text-grey">
      <h1 className="font-bold text-5xl " data-aos="fade-up">
        Welcome to Zaijoy Story!
      </h1>
      <p
        className="my-3 sm:text-lg text-gray-500 text-center"
        data-aos="fade-up"
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which do not look even slightly believable.
      </p>

      <div className="relative my-6" data-aos="fade-up">
        <Image src={about1} alt="welcome-image-1" />
        <div className="absolute top-12 left-12 right-12 bottom-12">
          <Image src={about2} alt="welcome-image-2" />
        </div>
        <div
          onClick={closeVideo}
          className="absolute left-[40%] right-[40%] top-[30%]"
        >
          <Image
            src={about3}
            alt="welcome-image-3"
            className=" w-[60px] sm:w-[100px] cursor-pointer"
          />
        </div>
      </div>

      {openVideo && <Popup closeVideo={closeVideo} />}
    </section>
  );
};

export default Welcome;
