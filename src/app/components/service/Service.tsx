import Image from "next/image";
import React, { useEffect, useState } from "react";
import coding from "../../../../public/assets/images/coding.png";
import { colors } from "../../../../utils";
import boyGirl from "../../../../public/assets/images/boyGirl.png";
import mobileBoyGirl from "../../../../public/assets/images/mobileBoyGirl.png";
import useScreenSize from "../../../../utils/useScreenSize";
const Service = () => {
  const { isMobile, isTablet } = useScreenSize();
  const isDesktopOrTablet = isTablet || !isMobile;

  const [isClient, setClient] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setClient(true);
    }
  }, [isClient, isMobile]);

  return (
    <div className="py-20 px-4">
      <div className="flex flex-row justify-center">
        <h1
          className="font-semibold lg:font-medium lg:text-[64px] w-fit lg:w-full text-2xl text-center rounded-3xl px-3 py-2"
          style={{
            color: colors.black,
            background: isClient ? colors.customBlue : colors.white,
          }}
        >
          Our Services
        </h1>
      </div>
      <section className="flex flex-col-reverse gap-6 lg:gap-20 items-center xl:flex xl:flex-row xl:justify-between lg:pr-[148px] lg:pl-[116px] mt-[50px]">
        <div className="w-full">
          {!isClient ? (
            <h3
              className="font-medium text-xl sm:text-3xl lg:text-[40px] lg:text-left lg:leading-[56px] w-4/5"
              style={{ color: colors.black }}
            >
              Website, Web & Mobile Application Development
            </h3>
          ) : (
            <h3
              className="font-medium text-xl sm:text-3xl lg:text-[40px] lg:text-left "
              style={{ color: colors.black }}
            >
              Website, Web & Mobile Application Development
            </h3>
          )}
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
        <div className="w-full flex flex-row justify-center">
          <Image
            src={coding}
            alt="code"
            className="md:min-w-[500px]"
            width={!isClient ? 767 : 400}
            priority
          />
        </div>
      </section>
      <section
        className="lg:mx-[100px] flex flex-col xl:flex xl:flex-row xl:justify-between xl:gap-4 items-end  pt-8 sm:pt-4 2xl:pt-20 px-4 lg:pl-20 pb-0 lg:rounded-[40px] mt-20 lg:mt-[140px] rounded-t-3xl"
        style={{ background: colors.deepBlue }}
      >
        <div className="w-full pb-6 lg:pb-[78px] flex flex-col gap-3 lg:min-w-[500px] sm:pt-10">
          <h3
            className="font-medium text-xl lg:text-[40px]"
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
        {!isClient && (
          <div className="w-full xl:mr-[-20px] 2xl:ml-[-32px]">
            <Image
              src={boyGirl}
              alt=""
              className="sm:mt-10 mt-[109px] 2xl:min-w-[650px]"
              priority
            />
          </div>
        )}
      </section>
      {isClient && (
        <div className="w-full flex flex-row justify-center">
          <Image src={mobileBoyGirl} alt="image" className="w-full" priority />
        </div>
      )}
    </div>
  );
};

export default Service;
