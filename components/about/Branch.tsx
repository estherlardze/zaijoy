import React from "react";
import { contacts } from "@/utils/data";
import BranchCard from "./BranchCard";

type BranchProp = {
  title: string;
  text: string;
};

const Branch = ({ title, text }: BranchProp) => {
  return (
    <section className="w-[90%] mx-[5%] my-[120px] 2xl:w-[1300px] 2xl:mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-5xl " data-aos="fade-up">
          {title}
        </h1>
        <p className="my-3 sm:text-lg text-gray-500" data-aos="fade-up">
          {text}
        </p>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-[50px]">
        {contacts.map((contact, index) => (
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <BranchCard contact={contact} key={index}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branch;
