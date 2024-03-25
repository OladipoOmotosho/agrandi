import React from "react";
import { FONTFAMILY, colors } from "../utils";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const InfoBlock = ({
  heading,
  information,
  img,
  className,
  type,
  href,
}: infoBlock) => {
  return (
    <div className={className}>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-semibold" style={{ color: colors.black }}>
            {heading}
          </h4>
          <p
            className="font-light text-base text-left leading-[27.8px] tracking-wide 2xl:w-4/5"
            style={{
              color: colors.gray2,
              fontFamily: FONTFAMILY.inter,
              fontWeight: 300,
            }}
          >
            {information}
          </p>
        </div>
        <div>
          {href && type === "services" && (
            <Link href={href}>
              <CustomButton
                text={"Learn more"}
                disabled={false}
                fontSize={16}
                fontWeight={500}
                paddingBottom={12}
                paddingTop={12}
                paddingLeft={24}
                paddingRight={24}
                borderRadius={10}
                fontFamily={FONTFAMILY.dmSans}
                className={"tracking-wider"}
              />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full">
        <Image
          src={img}
          alt="image"
          width={604}
          height={419}
          // style={{ width: "auto", height: "auto" }}
          priority
          quality={90}
        />
      </div>
    </div>
  );
};

export default InfoBlock;
