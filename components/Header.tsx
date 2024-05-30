import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

type HeadingProps = {
  heading: string;
};

const Header = ({ heading }: HeadingProps) => {
  return (
    <section className="bg-hero bg-cover bg-no-repeat bg-center h-[40vh] lg:h-[70vh] 2xl:h-[40vh] w-full">
      <div className="flex flex-col justify-center items-center h-[40vh] lg:h-[70vh] 2xl:h-[340vh]">
        <h1 className="text-white font-bold text-5xl mt-6">{heading}</h1> <br />
        <div className="flex gap-1 items-center group">
          <Link
            href="/"
            className="text-lg text-white"
          >
            Home
          </Link>
          <MdKeyboardArrowRight size={26} className="text-white" />
          <p className="text-pink text-lg font-semibold ">
            {heading}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
