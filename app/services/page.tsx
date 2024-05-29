import React from "react";
import Header from "@/components/Header";
import { Gallery, Services, Embark } from "@/components";

const Service = () => {
  return (
    <div className="overflow-x-hidden">
      <Header heading="Services" />
      <Services />
      <Gallery />
      <Embark />
    </div>
  );
};

export default Service;
