import React from "react";
import { contacts } from "@/utils/data";
import BranchCard from "./BranchCard";

const Branch = () => {
  return (
    <section className="w-[90%] mx-[5%] 2xl:w-xl 2xl:mx-auto my-[120px]">
      <div className="text-center">
        <h1 className="font-bold text-5xl ">Our Branches Near You</h1>
        <p className="my-3 sm:text-lg text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
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
