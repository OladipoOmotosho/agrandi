import Image from "next/image";
import React from "react";
import aboutBg from "../../../public/assets/images/aboutBg.png";
import { FONTFAMILY, colors } from "../../../utils";

const page = () => {
  return (
    <div>
      <div className="mx-8">
        <Image src={aboutBg} alt="" />
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
    </div>
  );
};

export default page;
