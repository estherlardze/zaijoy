"use client";
import { useEffect } from "react";

import Header from "@/components/Home/Header";
import { Features, Dedicated, Awards, MasonryImages,  Enhance, Embark, Pricing, Blog , Faqs, Gallery, Reviews} from "../components";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <main className=" w-screen">
      <Header />
      <Features />
      <Dedicated />
      <Awards />
      <Enhance />
      <MasonryImages/>
      <Pricing/>
      <Reviews/>
      <Faqs/>
      <Blog/>
      <Embark/>
      <Gallery/>
    </main>
  );
}
