import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

type BranchProps = {
  name: string;
  title: string;
  num: string;
  email: string;
  location: string;
  image: StaticImageData;
  color: string;
  rgbaColor: string;
};

const BranchCard = ({ contact }: any) => {
  return (
    <div
      className="w-full h-fit shadow-md p-3"
      style={{ backgroundColor: contact.rgbaColor }}
    >
      <div className="overflow-hidden">
        <Image
          src={contact.image}
          className="transform transition-transform duration-300 hover:scale-110 w-full"
          alt={`team member`}
          style={{ border: `2px dashed ${contact.color}` }}
        />
      </div>
      <div
        className="text-center py-8 flex flex-col items-start pl-2 sm:pl-6 justify-center text-gray-600"
        style={{ border: `2px dashed ${contact.color}` }}
      >
        <h1 className="font-bold text-xl mb-4">{contact.name}</h1>
        <div className="flex gap-4 items-center">
          <LuPhoneCall size={24} className="text-green-600" />
          <p>{contact.num}</p>
        </div>
        <div className="flex gap-4 items-center my-4">
          <MdAlternateEmail size={24} className="text-orange-600" />
          <p>{contact.email}</p>
        </div>
        <div className="flex gap-4 items-center">
          <GrLocation size={24} className="text-green-600" />
          <p>{contact.location}</p>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
