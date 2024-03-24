import Image from "next/image";
import React, { useEffect, useState } from "react";
import coffeeMan from "../../../../public/assets/images/coffeeMan.png";
import arrow from "../../../../public/assets/icons/companys/arrow.svg";
import { FONTFAMILY, colors } from "../../../../utils";
import useScreenSize from "../../../../utils/useScreenSize";

const GetinTouch = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const isDesktopOrTablet = isTablet || !isMobile;

  const [isClient, setClient] = useState(false);
  useEffect(() => {
    if (isDesktop) {
      setClient(true);
    }
  }, [isClient, isDesktop]);
  return (
    <div className="lg:mx-[140px] px-4">
      <section className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-20 2xl:justify-between lg:py-[60px]">
        <div className="w-full">
          <Image src={coffeeMan} alt="coffeeMan" />
          {!isClient && (
            <div
              className="p-4 rounded-full w-20 h-20 mt-8"
              style={{ background: colors.blue }}
            >
              <Image src={arrow} alt="arrow" priority />
            </div>
          )}
        </div>
        <div className="w-full flex flex-col gap-4">
          <h3
            className="font-medium text-xl lg:text-[40px] text-left w-4/5"
            style={{ color: colors.black, fontFamily: FONTFAMILY.inter }}
          >
            Get in touch
          </h3>
          <p
            className="font-normal text-base text-left leading-[27.8px] tracking-wide xl:w-[87%]"
            style={{ color: colors.gray2, fontFamily: FONTFAMILY.inter }}
          >
            Ready to elevate your digital presence or in need of expert IT
            guidance? We&apos;re here to help. Reach out to us, and let&apos;s
            start a conversation about how Agrandi Technologies can tailor
            solutions to meet your unique needs. Whether you have a specific
            project in mind or just want to explore the possibilities, our team
            is eager to collaborate with you. Contact us today to take the first
            step towards building a digital future that your audience will love.
          </p>
          {isClient && (
            <div
              className="p-4 rounded-full w-20 h-20"
              style={{ background: colors.blue }}
            >
              <Image src={arrow} alt="arrow" priority />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GetinTouch;
