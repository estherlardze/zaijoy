'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";
import Header from "@/components/Header";
import { Gallery, Services, Embark } from "@/components";

const Service = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

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
