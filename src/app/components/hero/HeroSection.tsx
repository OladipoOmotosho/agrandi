import Image from "next/image";
import React, { useEffect, useState } from "react";
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
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setClient(true);
    }
  }, [isClient, isMobile]);

  const logos = [
    {
      logo: layers,
    },
    {
      logo: sisyphus,
    },
    {
      logo: circooles,
    },
    {
      logo: catalog,
    },
    {
      logo: quotient,
    },
  ];
  const logos2 = [
    {
      logo: kounty,
    },
    {
      logo: xms,
    },
  ];

  return (
    <main className="mt-10">
      <section className="relative lg:px-8">
        <div className="flex flex-row justify-center px-4">
          <Image src={heroBg} alt="bg" className={styles.hero} priority />
        </div>
        <div className="absolute inset-0 pt-20 flex flex-col items-center gap-4">
          <span
            className="font-medium text-center text-[36px] lg:text-7xl flex flex-col gap-4"
            style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
          >
            <h2 className="font-bold lg:font-medium text-center text-[36px] lg:text-7xl">
              We build products
            </h2>
            <h2
              className="font-bold lg:font-medium text-center text-[36px] lg:text-7xl"
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

          <div
            className={`flex lg:flex-row flex-col justify-center ${styles.imgFlex}`}
          >
            <Image
              src={people}
              alt="people"
              width={!isClient ? 767 : 321}
              height={!isClient ? 417 : 174}
              className={styles.people}
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <Image
              src={!isClient ? person : person2}
              alt="person"
              width={!isClient ? 423 : 324}
              height={!isClient ? 417 : 112}
              style={{ width: "auto", height: "auto" }}
              className={`lg:ml-[-80px] mt-[-40px] lg:mt-0 ${styles.person}`}
              priority
            />
            <Image
              src={person2}
              alt="person"
              width={!isClient ? 423 : 324}
              height={!isClient ? 417 : 112}
              style={{ width: "auto", height: "auto" }}
              className={`lg:ml-[-80px] mt-[-40px] lg:mt-0 ${styles.person2}`}
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
        {!isClient && (
          <div className="flex flex-row justify-center gap-2 lg:gap-16">
            {logos.map((icon, key) => (
              <Image
                key={key}
                src={icon.logo}
                alt="logo"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            ))}
          </div>
        )}

        {isClient && (
          <div className="flex flex-row justify-center gap-8 lg:gap-16">
            {logos2.map((icon2, key) => (
              <Image
                key={key}
                src={icon2.logo}
                alt="logo"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default HeroSection;
