"use client"

import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import CorePhilosophy from "@/components/core-philosophy-motion";
import AboutUs from "@/components/about-us";
import Events from "@/components/events";
import JoinUs from "@/components/join-us";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <HeroSection/>
      <CorePhilosophy/>
      <Events/>
      <Footer/>
    </div>
  );
}
