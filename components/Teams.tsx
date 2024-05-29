import React from "react";
import { teams } from "@/utils/data";
import TeamCard from "./about/TeamCard";
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
    <section className="w-[90%] mx-[5%]  my-[120px] 2xl:w-[1300px] 2xl:mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-5xl ">Meet the Hearts of Zaijoy</h1>
        <p className="my-3 sm:text-lg text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-[50px]">
        {teams.map((team: TeamProp, index) => (
          <div className="col-span-4 sm:col-span-2 lg:col-span-1">
            <TeamCard team={team} key={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
