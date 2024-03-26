"use client";
import { FONTFAMILY, firstlinks } from "../../utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu from "../../public/assets/icons/menu.svg";
import useScreenSize from "../../utils/useScreenSize";
import Image from "next/image";
import agrandi from "../../public/assets/icons/agrandi.svg";
import CustomButton from "../CustomButton";
import { useEffect, useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const isDesktopOrTablet = isTablet || !isMobile;
  const [openMenu, setOpenMenu] = useState(false);

  const [isClient, setClient] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setClient(true);
    }
  }, [isClient, isMobile]);

  // useEffect(() => {
  //   if(openMenu){

  //   }
  // })

  return (
    <>
      {openMenu && (
        <div className="bg-white flex flex-col gap-4 absolute top-20 left-0 right-0 mx-10 px-8 py-10 z-10">
          {firstlinks.map((nav, index) => (
            <Link href={nav.link} key={index}>
              <p
                style={{ fontFamily: FONTFAMILY.inter }}
                className={`font-normal ${
                  pathname === nav.link
                    ? "text-[#635BFF]"
                    : pathname === "/" ||
                      pathname === "/services" ||
                      pathname === "/about" ||
                      (pathname === "/contactUs" && "text-[#ffffff]")
                }`}
              >
                {nav.text}
              </p>
            </Link>
          ))}
        </div>
      )}

      <div className={`md:py-6 py-6 px-4 xl:px-[140px]`}>
        {!isClient ? (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-10">
              <Link href={"/"}>
                <Image
                  src={agrandi}
                  alt="logo"
                  width={150}
                  height={25}
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
              <div className="lg:flex lg:flex-row lg:gap-4">
                {firstlinks.map((nav, index) => (
                  <Link href={nav.link} key={index}>
                    <p
                      style={{ fontFamily: FONTFAMILY.inter }}
                      className={`font-normal ${
                        pathname === nav.link
                          ? "text-[#635BFF]"
                          : pathname === "/" ||
                            pathname === "/services" ||
                            pathname === "/about" ||
                            (pathname === "/contactUs" && "text-[#1C1C24]")
                      }`}
                    >
                      {nav.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
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
          </div>
        ) : (
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-10">
              <Link href={"/"}>
                <Image
                  src={agrandi}
                  alt="logo"
                  width={150}
                  height={25}
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </div>
            <div className="cursor-pointer" onClick={() => setOpenMenu(true)}>
              <Image
                src={menu}
                alt="menuBar"
                width={isTablet ? 50 : 40}
                height={isTablet ? 50 : 40}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
