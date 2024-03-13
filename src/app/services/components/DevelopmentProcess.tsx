import React from "react";
import { FONTFAMILY, colors } from "../../../../utils";
import SideBars from "../../../../components/SideBars";
import star from "../../../../public/assets/icons/star.svg";
import line2 from "../../../../public/assets/icons/line2.svg";

const DevelopmentProcess = ({ text, reasons, type }: whyBox) => {
  const renderSideBars = () => {
    if (type === "noLine") {
      return <SideBars img1={star} img2={line2} type="noLine" />;
    } else {
      return <SideBars img1={star} img2={line2} type="line" />;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-start">
        {renderSideBars()}
        <div className="w-full mt-[-5px]">
          <h4
            className="text-xl font-medium leading-8 tracking-[0.51px]"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.gray3 }}
          >
            {text}
          </h4>
          <p
            className="font-light text-base text-left leading-[27.8px] tracking-[0.51px] md:w-full xl:w-[90%] 2xl:w-[75%]"
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
