import Image from "next/image";
import React from "react";
import { FONTFAMILY, colors } from "../../../../utils";

const Frame = ({
  heading,
  pic,
  subHead,
  information,
  img,
  detail,
  subTopic,
}: frame) => {
  return (
    <div className="my-10">
      <div className="flex flex-row justify-center lg:mx-8 mb-10">
        <h1
          className="text-[28px] lg:text-[64px] leading-10 lg:leading-[78px] text-center font-semibold lg:font-medium lg:w-2/3"
          style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
        >
          {heading}
        </h1>
      </div>
      <section className="flex flex-col items-center mx-[14.5px] lg:mx-8">
        <div>
          <Image
            src={pic}
            alt="image"
            width={1380}
            height={625}
            sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 100vw, 100vw"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 mt-[60px] lg:mx-[160px]">
          <h3
            className="text-xl lg:text-[32px] font-medium lg:font-semibold text-left lg:text-center leading-[30px] lg:leading-10"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
          >
            {subHead}
          </h3>
          <p
            className="font-normal text-base text-left lg:text-center tracking-[0.51px]"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.gray2 }}
          >
            {information}
          </p>
        </div>
      </section>
      <section className="mx-[14.5px] lg:mx-8 flex flex-col gap-6 lg:gap-0 lg:flex-row items-center mt-12 lg:mt-[140px] lg:pr-[84px] lg:pl-[116px]">
        <div className="w-full flex flex-col gap-5 lg:pt-6">
          <h4
            className="text-xl lg:text-2xl font-medium lg:font-semibold leading-8 tracking-[0.51px] lg:w-3/4"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
          >
            {subTopic}
          </h4>
          <p
            className="font-light text-base text-left leading-[27.8px] tracking-[0.51px] lg:w-4/5"
            style={{
              color: colors.gray2,
              fontFamily: FONTFAMILY.inter,
              fontWeight: 300,
            }}
          >
            {detail}
          </p>
        </div>

        <div className="w-full flex flex-row justify-center">
          <Image
            src={img}
            alt="image"
            width={604}
            height={419}
            quality={90}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default Frame;
