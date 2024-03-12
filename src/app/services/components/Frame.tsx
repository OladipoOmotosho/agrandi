import Image from "next/image";
import React from "react";
import InfoBlock from "../../../../components/InfoBlock";
import circle from "../../../../public/assets/icons/circle.svg";
import line from "../../../../public/assets/icons/line.svg";
import { FONTFAMILY, colors } from "../../../../utils";
import CustomButton from "../../../../components/CustomButton";
import SideBars from "../../../../components/SideBars";

const Frame = ({
  heading,
  pic,
  subHead,
  subTitle,
  information,
  img,
  detail,
  subTopic,
  text,
  reasons,
}: frame) => {
  return (
    <div className="mx-8 my-10">
      <div className="flex flex-row justify-center mb-10">
        <h1
          className="text-[64px] leading-[78px] text-center font-medium w-2/3"
          style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
        >
          {heading}
        </h1>
      </div>
      <section className="flex flex-col items-center">
        <div>
          <Image
            src={pic}
            alt="image"
            width={1380}
            height={625}
            sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 100vw, 100vw"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-4 mt-[60px] mx-[160px]">
          <h3
            className="text-[32px] font-semibold text-center leading-10"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
          >
            {subHead}
          </h3>
          <p
            className="font-normal text-base text-center tracking-[0.51px]"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.gray2 }}
          >
            {information}
          </p>
        </div>
      </section>
      <section className="flex flex-row mt-[140px] pr-[84px] pl-[116px]">
        <div className="w-full flex flex-col gap-5 pt-6">
          <h4
            className="text-2xl font-semibold leading-8 tracking-[0.51px] w-3/4"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
          >
            {subTopic}
          </h4>
          <p
            className="font-light text-base text-left leading-[27.8px] tracking-[0.51px] w-4/5"
            style={{
              color: colors.gray2,
              fontFamily: FONTFAMILY.inter,
              fontWeight: 300,
            }}
          >
            {detail}
          </p>
        </div>

        <div className="w-full">
          <Image
            src={img}
            alt="image"
            width={604}
            height={419}
            quality={90}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </section>
      <section className="flex flex-col items-center mx-[100px]">
        <h3>{subTitle}</h3>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start items-start">
            <SideBars img1={circle} img2={line} />
            <div className=" w-1/2">
              <h4
                className="text-xl font-medium leading-8 tracking-[0.51px]"
                style={{ fontFamily: FONTFAMILY.inter, color: colors.gray3 }}
              >
                {text}
              </h4>
              <p
                className="font-light text-base text-left leading-[27.8px] tracking-[0.51px]"
                style={{
                  color: colors.gray2,
                  fontFamily: FONTFAMILY.inter,
                  fontWeight: 300,
                }}
              >
                {reasons}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start">
            <SideBars img1={circle} img2={line} />
            <div className=" w-[50%]">
              <h4
                className="text-xl font-medium leading-8 tracking-[0.51px]"
                style={{ fontFamily: FONTFAMILY.inter, color: colors.gray3 }}
              >
                {text}
              </h4>
              <p
                className="font-light text-base text-left leading-[27.8px] tracking-[0.51px]"
                style={{
                  color: colors.gray2,
                  fontFamily: FONTFAMILY.inter,
                  fontWeight: 300,
                }}
              >
                {reasons}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame;
