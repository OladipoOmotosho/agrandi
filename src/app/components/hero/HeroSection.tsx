import Image from "next/image";
import React from "react";
import heroBg from "../../../../public/assets/images/heroBg.png";
import styles from "./hero.module.css";
import CustomButton from "../../../../components/CustomButton";
import people from "../../../../public/assets/images/people.png";
import person from "../../../../public/assets/images/person.png";
import layers from "../../../../public/assets/icons/companys/layers.svg";
import sisyphus from "../../../../public/assets/icons/companys/sisyphus.svg";
import catalog from "../../../../public/assets/icons/companys/catalog.svg";
import quotient from "../../../../public/assets/icons/companys/quotient.svg";
import circooles from "../../../../public/assets/icons/companys/circooles.svg";
import { colors } from "../../../../utils";

const HeroSection = () => {
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

  return (
    <main className="mt-10 ">
      <section className="px-8">
        <div className="flex flex-row justify-center">
          <Image src={heroBg} alt="bg" className={styles.hero} priority />
        </div>
        <div className="mt-[-620px] flex flex-col items-center gap-4">
          <h2 className="font-medium text-center text-7xl tracking-tight w-1/2 leading-[108px]">
            We build products people love
          </h2>
          <p className="font-normal text-center text-xl w-[38%] leading-8">
            We help businesses improve bottom-line efficiency and focus on what
            matters most
          </p>
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
        </div>
        <div className="flex flex-row justify-center mt-[-3] px-[108px]">
          <Image
            src={people}
            alt="people"
            width={767}
            height={417}
            style={{ width: 767, height: "auto" }}
            priority
          />
          <Image
            src={person}
            alt="person"
            width={423}
            height={417}
            className="ml-[-80px]"
            style={{ width: 423, height: "auto" }}
            priority
          />
        </div>
      </section>
      <section
        className={styles.companys}
        style={{ backgroundColor: colors.lightgray }}
      >
        <p className="text-[64px] leading-[96px] tracking-tighter text-black text-center">
          Agrandi has saved us thousands of hours of work and money
        </p>
        <div className="flex flex-row justify-center gap-16">
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
      </section>
    </main>
  );
};

export default HeroSection;
