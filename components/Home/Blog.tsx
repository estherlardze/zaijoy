import React from "react";
import { blogs } from "@/utils/data";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";

const Blog = () => {
  return (
    <section className="mx-[5%] w-[90%] my-[90px] 2xl:w-[1300px] 2xl:mx-auto mb-[100px] overflow-hidden">
      <div className="text-center">
        <h1 className="font-bold text-3xl" data-aos="fade-up">
          Unveiling Joyful Insights in Our Playful World
        </h1>
        <p className="my-4" data-aos="fade-up">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {blogs.map((feature, index) => (
          <div
            className="col-span-2 md:col-span-1 py-4  flex flex-col gap-4"
            key={index}
            data-aos="fade-up"
          >
            <div
              style={{ backgroundColor: feature.rgbaColor }}
              className="overflow-hidden"
            >
              <Image
                src={feature.image}
                alt="image"
                className="m-4 transform transition-transform duration-300 hover:scale-110 w-full"
              />
            </div>
            <div
              className=""
              style={{
                borderRight: `2px solid ${feature.rgbaColor}`,
                borderTop: `2px dashed ${feature.color}`,
                borderLeft: `2px solid ${feature.rgbaColor}`,
                borderBottom: `2px solid ${feature.rgbaColor}`,
              }}
            >
              <h1 className="mb-2 mx-4 my-6 font-bold text-2xl cursor-pointer hover:text-pink transition-all duration-200">
                {feature.text}
              </h1>
              <div className="flex flex-col mx-4 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center  lg:justify-between gap-4 border-t-2 pt-4 border-dashed border-gray-300 my-8">
                <div className="flex gap-2 items-center text-gray-500  ">
                  <CiCalendarDate size={20} />
                  <p className="italic">{feature.name}</p>
                </div>
                <div className="flex gap-2 items-center text-gray-500">
                  <CiCalendarDate size={20} />
                  <p className="italic">{feature.date}</p>
                </div>

                <p className=" font-semibold underline text-gray-500">Read more</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
