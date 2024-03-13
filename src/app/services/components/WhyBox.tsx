import React from "react";
import { FONTFAMILY, colors } from "../../../../utils";
import SideBars from "../../../../components/SideBars";
import circle from "../../../../public/assets/icons/circle.svg";
import line from "../../../../public/assets/icons/line.svg";

const WhyBox = ({ text, reasons, type }: whyBox) => {
  const renderSideBars = () => {
    if (type === "noLine") {
      return <SideBars img1={circle} img2={line} type="noLine" />;
    } else {
      return (
        <SideBars
          img1={circle}
          img2={line}
          type="line"
          className={"h-[335px] w-auto"}
        />
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-start gap-6">
        {renderSideBars()}
        <div className="w-full mt-[-40px] pt-9 pb-6">
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
  );
};

export default WhyBox;
