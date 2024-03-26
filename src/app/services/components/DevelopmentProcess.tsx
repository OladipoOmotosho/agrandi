"use client";
import React, { useEffect, useState } from "react";
import { FONTFAMILY, colors } from "../../../../utils";
import SideBars from "../../../../components/SideBars";
import star from "../../../../public/assets/icons/star.svg";
import line2 from "../../../../public/assets/icons/Line2.svg";
import useScreenSize from "../../../../utils/useScreenSize";
import Image from "next/image";

const DevelopmentProcess = ({ text, reasons, type }: whyBox) => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const isMobileorTablet = isMobile || isTablet;

  const [isClient, setClient] = useState(false);
  useEffect(() => {
    if (isMobileorTablet) {
      setClient(true);
    }
  }, [isClient, isMobileorTablet]);

  const renderSideBars = () => {
    if (type === "noLine") {
      return <SideBars img1={star} img2={line2} type="noLine" />;
    } else {
      return <SideBars img1={star} img2={line2} type="line" />;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row items-start lg:gap-6 mb-8 lg:mb-0">
        {!isClient && <div>{renderSideBars()}</div>}
        {isClient && (
          <div className="mb-[10px]">
            <Image src={star} alt="starIcon" />
          </div>
        )}
        <div className="w-full mt-[-5px]">
          <h4
            className="text-xl font-medium leading-8 tracking-[0.51px]"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.gray3 }}
          >
            {text}
          </h4>
          <p
            className="font-light text-base text-left leading-[27.8px] tracking-[0.51px] md:w-full xl:w-[90%] 2xl:w-[80%]"
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
  );
};

export default DevelopmentProcess;
