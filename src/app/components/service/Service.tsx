import Image from "next/image";
import React from "react";
import coding from "../../../../public/assets/images/coding.png";
import { colors } from "../../../../utils";
import boyGirl from "../../../../public/assets/images/boyGirl.png";
const Service = () => {
  return (
    <div className="py-20">
      <h1
        className="font-medium text-[64px] text-center"
        style={{ color: colors.black }}
      >
        Our Services
      </h1>
      <section className="flex flex-row gap-20 items-center xl:flex xl:flex-row xl:justify-between pr-[148px] pl-[116px] mt-[90px]">
        <div className="w-full">
          <h3
            className="font-medium text-[40px] text-left "
            style={{ color: colors.black }}
          >
            Website, Web & <br /> Mobile Application <br /> Development
          </h3>
          <p
            className="font-normal text-base text-left leading-[27.8px] tracking-wide 2xl:w-4/5"
            style={{ color: colors.gray2 }}
          >
            At Agrandi Technologies, we are passionate about crafting
            exceptional digital experiences. Our team of skilled developers
            specializes in creating dynamic and user-friendly websites and
            mobile applications. From concept to deployment, we focus on
            delivering innovative solutions that not only meet but exceed your
            expectations. Whether you need a sleek and responsive website or a
            cutting-edge mobile app, we bring your vision to life with precision
            and creativity.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={coding}
            alt="code"
            className="md:min-w-[500px]"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </section>
      <section
        className="mx-[100px] flex flex-row xl:flex xl:flex-row xl:justify-between items-end 2xl:pt-20 pl-20 pb-0 rounded-[40px] mt-[140px]"
        style={{ background: colors.deepBlue }}
      >
        <div className="w-full pb-[78px] flex flex-col gap-3 lg:min-w-[500px] sm:pt-20">
          <h3
            className="font-medium text-[40px]"
            style={{ color: colors.white }}
          >
            IT Consulting
          </h3>
          <p
            style={{ color: colors.white }}
            className="font-normal text-base leading-[27.8px] tracking-wide 2xl:w-4/5"
          >
            Navigate the ever-evolving landscape of technology with Agrandi
            Technologies as your trusted IT consulting partner. We offer
            strategic insights and expert guidance to help your business
            leverage the latest advancements in technology. Our consulting
            services encompass everything from system architecture and
            infrastructure optimization to cybersecurity and digital
            transformation. With Agrandi, empower your business with the right
            technology roadmap for sustained growth and success.
          </p>
        </div>
        <div className="w-full 2xl:ml-4">
          <Image
            src={boyGirl}
            alt=""
            className="mt-[109px] 2xl:min-w-[650px]"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default Service;
