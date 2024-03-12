"use client";
import Image from "next/image";
import React from "react";
import aboutBg from "../../../public/assets/images/aboutBg.png";
import { FONTFAMILY, colors } from "../../../utils";
import InfoBlock from "../../../components/InfoBlock";
import vrGirl from "../../../public/assets/images/vrGirl.png";
import handshake from "../../../public/assets/images/handshake.png";
import map from "../../../public/assets/images/map.png";

const page = () => {
  const details = [
    {
      heading: "In the heart of Innovation",
      information: (
        <>
          <>
            {" "}
            Website and Application Development <br />{" "}
          </>
          At Agrandi Technologies, we are passionate about crafting exceptional
          digital experiences. Our team of skilled developers specializes in
          creating dynamic and user-friendly websites and mobile applications.
          From concept to deployment, we focus on delivering innovative
          solutions that not only meet but exceed your expectations. Whether you
          need a sleek and responsive website or a cutting-edge mobile app, we
          bring your vision to life with precision and creativity
        </>
      ),
      img: vrGirl.src,
    },
    {
      heading: "Beyond Technology- It's a Partnership",
      information:
        "At Agrandi, we recognize that our success is intertwined with the success of our clients. We don't just offer products; we forge partnerships. Our team is dedicated to understanding the unique challenges of each business we work with, ensuring our solutions align seamlessly with their goals and aspirations.",
      img: handshake.src,
    },
    {
      heading: "Toronto Roots, Global Impact",
      information:
        "Proudly headquartered in Toronto, we are driven by a global perspective. Our solutions transcend borders, impacting businesses far and wide. From local startups to established enterprises, Agrandi Technologies is the catalyst for digital transformation, propelling businesses into a future where they not only survive but thrive.",
      img: map.src,
    },
  ];
  return (
    <div className="mb-[146px]">
      <div className="mx-8">
        <Image src={aboutBg} alt="backgroundImage" quality={90} />
      </div>
      <div className="mb-[92px]">
        <section className="flex flex-row justify-between 2xl:justify-center 2xl:gap-44">
          <div
            className="p-8 rounded-[20px] max-w-[509px] mt-[-110px] ml-[148px]"
            style={{ background: colors.lightgray }}
          >
            <h3
              className="font-medium text-[64px] leading-[78px] tracking-tighter"
              style={{ color: colors.black, fontFamily: FONTFAMILY.inter }}
            >
              About Us
            </h3>
            <p
              className="font-light text-base text-left leading-[27.8px] tracking-tight"
              style={{
                color: colors.gray2,
                fontFamily: FONTFAMILY.inter,
                fontWeight: 300,
              }}
            >
              Welcome to Agrandi Technologies, where innovation meets excellence
              in the heart of Toronto, Canada. Our journey is woven with a
              passion for transforming businesses through cutting-edge
              technology solutions that redefine the way industries operate. At
              Agrandi, we pride ourselves on being architects of change, driven
              by a commitment to crafting products and services that resonate
              with the pulse of modern business. Rooted in Toronto&apos;s
              vibrant tech landscape, we are a dynamic force shaping the digital
              future, one breakthrough at a time.
            </p>
          </div>
          <div className="mr-[117px] max-w-[474px] mt-[111px]">
            <h4
              className="font-medium text-2xl leading-8 tracking-tighter"
              style={{ color: colors.black, fontFamily: FONTFAMILY.inter }}
            >
              Our Mission
            </h4>
            <p
              className="font-light text-base text-left leading-[27.8px] tracking-tight"
              style={{
                color: colors.gray2,
                fontFamily: FONTFAMILY.inter,
                fontWeight: 300,
              }}
            >
              Agrandi Technologies is more than a technology company; we are
              architects of possibility. Our mission is to empower businesses to
              thrive in the digital age, offering solutions that seamlessly
              blend innovation, functionality, and user-centric design.
            </p>
          </div>
        </section>
      </div>
      <div className="ml-[140px] mr-[117px]">
        {details.map((detail, index) => (
          <InfoBlock
            key={index}
            heading={detail.heading}
            information={detail.information}
            img={detail.img}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } justify-between items-center gap-24`}
            type="about"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
