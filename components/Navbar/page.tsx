"use client";

import { firstlinks } from "../../utils";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "./assets/svg/menuIcon.svg";
import useScreenSize from "../../utils/useScreenSize";
import Image from "next/image";
import agrandi from "../../public/assets/icons/agrandi.svg";
import CustomButton from "../CustomButton";

const NavBar = () => {
  const pathname = usePathname();
  const { windowSize, isMobile, isTablet, isDesktop } = useScreenSize();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div
        className={`md:py-6 py-6 px-[140px] ${
          openMenu && "fixed z-50 top-0 right-0 left-0 bg-white"
        }`}
      >
        {isDesktop ? (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-10">
              <Image src={agrandi} alt="logo" width={150} height={25} />
              {firstlinks.map((nav, index) => (
                <Link href={nav.link} key={index} className="">
                  <p
                    // style={{ fontFamily: FONTFAMILY.inter }}
                    className={`font-normal ${
                      pathname === nav.link
                        ? "text-[#2b1a3e]"
                        : pathname === "/" ||
                          pathname === "/services" ||
                          pathname === "/aboutUs" ||
                          (pathname === "/contactUs" && "text-[#1C1C24]")
                    }`}
                  >
                    {nav.text}
                  </p>
                </Link>
              ))}
            </div>
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
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavBar;
