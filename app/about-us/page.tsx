"use client"
import React , {useEffect} from "react";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
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

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header heading="About-us" />
      <Welcome />
      <WhyChooseUs />
      <Awards />
      <Team />
      <Faqs />
      <Branch
        title="Welcome to Zaijoy Story!"
        text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <Embark />
      <Gallery />
    </div>
  );
};

export default Aboutus;
