import Image from "next/image";
import React from "react";

const SideBars = ({ img1, img2, type, className }: sideBars) => {
  return (
    <div className="flex flex-row justify-start">
      <div className="grid grid-flow-row gap-0 justify-items-center">
        <Image src={img1} alt="image" />
        {type === "line" ? (
          <Image
            src={img2}
            alt="image"
            width={2}
            height={200}
            className={`h-[200px] ${className}`}
          />
        ) : (
          type === "noLine" && ""
        )}
      </div>
    </div>
  );
};

export default SideBars;
