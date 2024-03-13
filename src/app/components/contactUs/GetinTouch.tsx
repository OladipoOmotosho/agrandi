import Image from "next/image";
import React from "react";
import coffeeMan from "../../../../public/assets/images/coffeeMan.png";
import arrow from "../../../../public/assets/icons/companys/arrow.svg";
import { colors } from "../../../../utils";

const GetinTouch = () => {
  return (
    <div className="mx-[140px]">
      <section className="flex flex-row gap-20 2xl:justify-between py-[60px]">
        <div className="w-full">
          <Image src={coffeeMan} alt="coffeeMan" />
        </div>
        <div className="w-full flex flex-col gap-4">
          <h3
            className="font-medium text-[40px] text-left w-4/5"
            style={{ color: colors.black }}
          >
            Get in touch
          </h3>
          <p
            className="font-normal text-base text-left leading-[27.8px] tracking-wide xl:w-[87%]"
            style={{ color: colors.black2 }}
          >
            Ready to elevate your digital presence or in need of expert IT
            guidance? We&apos;re here to help. Reach out to us, and let&apos;s
            start a conversation about how Agrandi Technologies can tailor
            solutions to meet your unique needs. Whether you have a specific
            project in mind or just want to explore the possibilities, our team
            is eager to collaborate with you. Contact us today to take the first
            step towards building a digital future that your audience will love.
          </p>
          <div
            className="p-4 rounded-full w-20 h-20"
            style={{ background: colors.blue }}
          >
            <Image src={arrow} alt="arrow" priority />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetinTouch;
