import React from "react";
import Header from "@/components/Header";
import { Gallery, Services } from "@/components";

const page = () => {
  return (
    <div>
      <Header heading="Services" />
      <Services />
      <Gallery />
    </div>
  );
};

export default page;
