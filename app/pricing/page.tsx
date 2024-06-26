"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/shared/Header";
import { Gallery, Pricing, Embark } from "@/components";

const Pricings = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header heading="Pricing" />
      <Pricing />
      <Embark />
      <Gallery />
    </div>
  );
};

export default Pricings;
