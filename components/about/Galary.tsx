import React from "react";
import { g1, g2, g3, g4, g5, g6, g7 } from "@/public";
import Image from "next/image";

const images = [g1, g2, g3, g4, g5, g6, g7];

const Gallery = () => {
  return (
    <section className="bg-award bg-center bg-no-repeat bg-cover mt-[200px] ">
      <div className="text-white py-10">
        <h1 className="text-center font-bold text-5xl mb-10">Explore Our Gallery!</h1>

        <div className="flex overflow-hidden hide-scrollbar">
          <div className="scroll-content">
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`gallery ${index}`}
                  height={200}
                />
              </div>
            ))}
          </div>
          <div className="scroll-content">
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`gallery ${index}`}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
