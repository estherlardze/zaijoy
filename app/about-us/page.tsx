import React from "react";
import Header from "@/components/Header";
import {
  Awards,
  Welcome,
  WhyChooseUs,
  Team,
  Faqs,
  Branch,
  Embark,
  Gallery,
} from "@/components/index";

const page = () => {
  return (
    <div>
      <Header heading="About-us" />
      <Welcome />
      <WhyChooseUs />
      <Awards />
      <Team />
      <Faqs/>
      <Branch
        title="Welcome to Zaijoy Story!"
        text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      {/* <Embark/> */}
      <Gallery />
     
    </div>
  );
};

export default page;
