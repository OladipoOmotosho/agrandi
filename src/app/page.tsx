"use client";
import React from "react";
import HeroSection from "./components/hero/HeroSection";
import { colors } from "../../utils";
import Service from "./components/service/Service";
import GetinTouch from "./components/contactUs/GetinTouch";

const page = () => {
  return (
    <div className="" style={{ backgroundColor: colors.white }}>
      <section>
        <HeroSection />
      </section>
      <section className="lg:mt-[60px]">
        <Service />
      </section>
      <section>
        <GetinTouch />
      </section>
    </div>
  );
};

export default page;
