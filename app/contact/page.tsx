"use client"
import React , {useEffect} from "react";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { Gallery, Form, Branch, Embark } from "@/components";

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
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

export default Contact;
