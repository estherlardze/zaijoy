import React from "react";
import { g1, g2, g3, g4, g5, g6 } from "@/public";
import Image from "next/image";

const images = [
  {
    image: g1,
    text: "Round Rider",
    route: "/",
  },
  {
    image: g2,
    text: "Blue Ball Pool",
    route: "/",
  },
  {
    image: g3,
    text: "ABC Blocks",
    route: "/",
  },
  {
    image: g4,
    text: "Riding Slider",
    route: "/",
  },
  {
    image: g5,
    text: "Indoor Slider",
    route: "/",
  },
  {
    image: g6,
    text: "Rocking Cradle",
    route: "/",
  },
];

const Adventure = () => {
  return (
    <div className="text-black mx-[5%] w-[90%] my-[90px]">
      <h1 className="text-center font-bold text-5xl mb-10">
        Explore Our Gallery!
      </h1>
      <p className="text-center my-6 text-black/80">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>

      <div className="grid grid-cols-6 gap-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="col-span-6 sm:col-span-3 lg:col-span-2 relative"
          >
            <Image
              src={item.image}
              alt={`gallery ${index} `}
              className="w-full"
            />
            <h1 className="bg-[#170408] text-white absolute bottom-6 text-center left-6 right-6 text-2xl font-bold hover:text-pink cursor-pointer transition-all duration-300 py-6">
              {item.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventure;
