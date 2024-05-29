import React from "react";
import { teams } from "@/utils/data";
import TeamCard from "./TeamCard";
import { StaticImageData } from "next/image";

type TeamProp = {
  name: string;
  title: string;
  image: StaticImageData;
  color: string;
  rgbaColor: string;
};

const Team = () => {
  return (
    <section className="w-[90%] mx-[5%] 2xl:w-[1300px] 2xl:mx-auto my-[120px]">
      <div className="text-center">
        <h1 className="font-bold text-5xl " data-aos="fade-up">
          Meet the Hearts of Zaijoy
        </h1>
        <p className="my-3 sm:text-lg text-gray-500" data-aos="fade-up">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-[50px]">
        {teams.slice(0, 4).map((team: TeamProp, index) => (
          <div
            className="col-span-4 sm:col-span-2 lg:col-span-1"
            data-aos="fade-up"
          >
            <TeamCard team={team} key={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
