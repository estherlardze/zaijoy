import React from "react";
import Masonry from "react-masonry-css";
import { m1, m2, m3, m4, m5, m6 } from "../../public";
import Image from "next/image";

const images = [
  {
    image: m1,
    text: "Soft Box Riding",
    route: "/",
    color: "#eb3f0b",
    bgColor: "rgba(85, 21, 2, 0.2)",
  },
  {
    image: m3,
    text: "Trampolines",
    route: "/",
    color: "#e90e70",
    bgColor: "rgba(233, 14, 112, 0.2)",
  },
  {
    image: m2,
    text: "Riding Slider",
    route: "/",
    color: "#f3e309",
    bgColor: "rgba(243, 227, 9, 0.2)",
  },
  {
    image: m4,
    text: "Indoor Slider",
    route: "/",
    color: "#15ad07",
    bgColor: "rgba(4, 141, 27, 0.2)",
  },
  {
    image: m5,
    text: "Indoor Football",
    route: "/",
    color: "#50be06",
    bgColor: "rgba(15, 187, 10, 0.2)",
  },
  // {
  //   image: m6,
  //   text: "Rocking Cradle",
  //   route: "/",
  //   color: "#eb3f0b",
  //   bgColor: "rgba(235, 63, 11, 0.2)",
  // },
];

const MasonryImages = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="bg-award bg-cover bg-center bg-no-repeat w-full h-fit">
      <div className="mx-[5%] 2xl:w-[1300px] 2xl:mx-auto">
        <div className="text-center text-white py-8">
          <h1 className="font-bold text-3xl" data-aos="fade-up">
            Exciting Adventures in Our Indoor Wonderland.
          </h1>
          <p className="my-4" data-aos="fade-up">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour. Soft Box Riding Indoor Football Trampolines
          </p>
        </div>

        <div className="masonry-container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((item, index) => (
              <div
                key={index}
                className="masonry-item"
                data-aos="fade-up"
                
              >
                <div style={{ backgroundColor: item.bgColor }} className="p-2">
                <Image
                  src={item.image}
                  alt={`Masonry item ${index + 1}`}
                  className="p-2"
                  style={{ border: `2px dashed ${item.color}` }}
                />
                </div>
                <h1
                  style={{ backgroundColor: item.bgColor }}
                  className=" text-white text-xl font-bold hover:text-pink cursor-pointer text-center transition-all duration-300 py-3"
                >
                  {item.text}
                </h1>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default MasonryImages;
