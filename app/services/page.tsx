import React from "react";
import Header from "@/components/Header";
import { Gallery, Services, Embark } from "@/components";

const page = () => {
  return (
    <div>
      <Header heading="Services" />
      <Services />
      <Gallery />
      <Embark />
    </div>
  );
};

export default page;
