import Image from "next/image";
import React from "react";
import heroBg from "../../../../public/assets/images/heroBg.png";
import styles from "./hero.module.css";
import CustomButton from "../../../../components/CustomButton";
import people from "../../../../public/assets/images/people.png";
import person from "../../../../public/assets/images/person.png";
import person2 from "../../../../public/assets/images/person2.png";
import layers from "../../../../public/assets/icons/companys/layers.svg";
import sisyphus from "../../../../public/assets/icons/companys/sisyphus.svg";
import catalog from "../../../../public/assets/icons/companys/catalog.svg";
import quotient from "../../../../public/assets/icons/companys/quotient.svg";
import circooles from "../../../../public/assets/icons/companys/circooles.svg";
import kounty from "../../../../public/assets/icons/kounty.svg";
import xms from "../../../../public/assets/icons/xms.svg";
import { FONTFAMILY, colors } from "../../../../utils";
import Link from "next/link";
import useScreenSize from "../../../../utils/useScreenSize";

const HeroSection = () => {
  const { isMobile, isTablet } = useScreenSize();
  const isDesktopOrTablet = isTablet || !isMobile;

  const logos = [
    {
      logo: isDesktopOrTablet && layers,
    },
    {
      logo: isDesktopOrTablet && sisyphus,
    },
    {
      logo: isDesktopOrTablet ? circooles : kounty,
    },
    {
      logo: isDesktopOrTablet ? catalog : xms,
    },
    {
      logo: isDesktopOrTablet && quotient,
    },
  ];

  return (
    <main className="mt-10 ">
      <section className="relative lg:px-8">
        <div className="flex flex-row justify-center px-4">
          <Image src={heroBg} alt="bg" className={styles.hero} priority />
        </div>
        <div className="absolute inset-0 pt-20 flex flex-col items-center gap-4">
          <span
            className="font-medium text-center text-4xl lg:text-7xl flex flex-col gap-4"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
          >
            <h2 className="font-bold lg:font-medium text-center text-4xl lg:text-7xl">
              We build products
            </h2>
            <h2
              className="font-bold lg:font-medium text-center text-4xl lg:text-7xl"
              style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
            >
              people love
            </h2>
            <p
              className="font-normal text-center text-sm lg:text-xl"
              style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
            >
              We help businesses improve bottom-line <br /> efficiency and focus
              on what matters most
            </p>
          </span>

          <Link href={"/contactUs"}>
            <CustomButton
              text={"Get in touch"}
              disabled={false}
              fontSize={16}
              fontWeight={500}
              paddingBottom={12}
              paddingTop={12}
              paddingLeft={24}
              paddingRight={24}
              borderRadius={10}
            />
          </Link>

          <div className="flex md:flex-row flex-col justify-center">
            <Image
              src={people}
              alt="people"
              width={isDesktopOrTablet ? 767 : 321}
              height={isDesktopOrTablet ? 417 : 174}
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <Image
              src={isDesktopOrTablet ? person : person2}
              alt="person"
              width={isDesktopOrTablet ? 423 : 324}
              height={isDesktopOrTablet ? 417 : 112}
              className="lg:ml-[-80px] mt-[-40px]"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
        </div>
      </section>
      <section
        className={styles.companys}
        style={{ backgroundColor: colors.lightgray }}
      >
        <p className="text-2xl font-bold lg:font-semibold lg:text-[64px] lg:leading-[96px] tracking-tighter text-black text-center">
          Agrandi has saved us thousands of hours of work and money
        </p>
        <div className="flex flex-row justify-center gap-8 lg:gap-16">
          {logos.map((icon, key) => (
            <Image
              key={key}
              src={icon.logo}
              alt=""
              width={200}
              height={200}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
