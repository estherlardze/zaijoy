import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

type TeamProp = {
  name: string;
  title: string;
  image: StaticImageData;
  color: string;
  rgbaColor: string;
};

const TeamCard = ({ team }: any) => {
  return (
    <div
      className="w-full h-fit shadow-md p-3"
      style={{ backgroundColor: team.rgbaColor }}
    >
      <div className="overflow-hidden">
        <Image
          src={team.image}
          className="transform transition-transform duration-300 hover:scale-110 w-full"
          alt={`team member`}
          style={{ border: `2px dashed ${team.color}` }}
        />
      </div>
      <div
        className="text-center py-8"
        style={{ border: `2px dashed ${team.color}` }}
      >
        <h1 className="font-bold text-xl mb-4">{team.name}</h1>
        <p>{team.title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
