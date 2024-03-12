import Image from "next/image";
import React from "react";

const SideBars = ({ img1, img2 }: sideBars) => {
  return (
    <div className="flex flex-row justify-start">
      <div className="grid grid-flow-row gap-0 justify-items-center">
        <Image src={img1} alt="image" />
        <Image src={img2} alt="image" />
      </div>
    </div>
  );
};

export default SideBars;
