import React from "react";
import { HeroSection } from "./HeroSection/HeroSection";
import Portfolio from "./Portfolio/Portfolio";
import Process from "./Process/Process";
import Footer from "./Footer/Footer";

export function Home() {
  return (
    <>
      <HeroSection />
      <Portfolio />
      <Process />
      <Footer />
    </>
  );
}
