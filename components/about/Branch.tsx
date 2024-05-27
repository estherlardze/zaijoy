import React from "react";
import { contacts } from "@/utils/data";
import BranchCard from "./BranchCard";


type BranchProp ={
title:string,
text:string
}

const Branch = ({title, text} :BranchProp) => {
  return (
    <section className="w-[90%] mx-[5%] 2xl:w-xl 2xl:mx-auto my-[120px]">
      <div className="text-center">
        <h1 className="font-bold text-5xl ">{title}</h1>
        <p className="my-3 sm:text-lg text-gray-500">
          {text}
        </p>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-[50px]">
        {contacts.map((contact) => (
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <BranchCard contact={contact} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branch;
