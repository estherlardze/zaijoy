import React from "react";
import Header from "@/components/Header";
import { Gallery, Form, Branch, Embark } from "@/components";

const page = () => {
  return (
    <div>
      <Header heading="Contact" />
      <Branch
        title="Playful Magic to Every Corner"
        text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
      />
      <Form/>
      <Embark />
      <Gallery />
    </div>
  );
};

export default page;
