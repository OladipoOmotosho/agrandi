"use client";

// import { FONTFAMILY, firstlinks } from "../../utils";
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import menu from "../../public/assets/icons/menu.svg";
// import useScreenSize from "../../utils/useScreenSize";
// import Image from "next/image";
// import agrandi from "../../public/assets/icons/agrandi.svg";
// import CustomButton from "../CustomButton";

// const NavBar = () => {
//   const pathname = usePathname();
//   const { windowSize, isMobile, isTablet, isDesktop } = useScreenSize();
//   // const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <>
//       <div className={`md:py-6 py-6 px-4 xl:px-[140px]`}>
//         {isDesktop || isTablet ? (
//           <div className="flex flex-row justify-between items-center">
//             <div
//               className="flex flex-row items-center gap-10"
//               suppressHydrationWarning
//             >
//               <Link href={"/"}>
//                 <Image
//                   src={agrandi}
//                   alt="logo"
//                   width={150}
//                   height={25}
//                   style={{ width: "auto", height: "auto" }}
//                 />
//               </Link>
//               <div>
//                 {firstlinks.map((nav, index) => (
//                   <Link href={nav.link} key={index} className="">
//                     <p
//                       style={{ fontFamily: FONTFAMILY.inter }}
//                       className={`font-normal ${
//                         pathname === nav.link
//                           ? "text-[#635BFF]"
//                           : pathname === "/" ||
//                             pathname === "/services" ||
//                             pathname === "/about" ||
//                             (pathname === "/contactUs" && "text-[#1C1C24]")
//                       }`}
//                     >
//                       {nav.text}
//                     </p>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <Link href={"/contactUs"}>
//               <CustomButton
//                 text={"Get in touch"}
//                 disabled={false}
//                 fontSize={16}
//                 fontWeight={500}
//                 paddingBottom={12}
//                 paddingTop={12}
//                 paddingLeft={24}
//                 paddingRight={24}
//                 borderRadius={10}
//               />
//             </Link>
//           </div>
//         ) : (
//           isMobile && (
//             <div className="flex flex-row justify-between items-center">
//               <div className="flex flex-row items-center gap-10">
//                 <Link href={"/"}>
//                   <Image
//                     src={agrandi}
//                     alt="logo"
//                     width={150}
//                     height={25}
//                     style={{ width: "auto", height: "auto" }}
//                   />
//                 </Link>
//               </div>
//               <div>
//                 <Image
//                   src={menu}
//                   alt="menuBar"
//                   width={isTablet ? 50 : 40}
//                   height={isTablet ? 50 : 40}
//                 />
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </>
//   );
// };

// export default NavBar;

import { FONTFAMILY, firstlinks } from "../../utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu from "../../public/assets/icons/menu.svg";
import useScreenSize from "../../utils/useScreenSize";
import Image from "next/image";
import agrandi from "../../public/assets/icons/agrandi.svg";
import CustomButton from "../CustomButton";

const NavbarLogo = () => (
  <Link href={"/"}>
    <Image
      src={agrandi}
      alt="logo"
      width={150}
      height={25}
      style={{ width: "auto", height: "auto" }}
    />
  </Link>
);

const NavbarLinks = ({ pathname }: any) => (
  <div className="flex flex-row justify-between gap-9">
    {firstlinks.map((nav, index) => (
      <Link
        href={nav.link}
        key={index}
        style={{ fontFamily: FONTFAMILY.inter }}
        className={`font-normal ${
          pathname === nav.link
            ? "text-[#635BFF]"
            : ["", "/", "/services", "/about", "/contactUs"].includes(
                pathname
              ) && "text-[#1C1C24]"
        }`}
      >
        {nav.text}
      </Link>
    ))}
  </div>
);

const Navbar = () => {
  const pathname = usePathname();
  const { isMobile, isTablet } = useScreenSize();
  const isDesktopOrTablet = isTablet || !isMobile;

  return (
    <div className={`md:py-6 py-6 px-4 xl:px-[140px]`}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-10">
          <NavbarLogo />
          {isDesktopOrTablet && <NavbarLinks pathname={pathname} />}
        </div>
        {isDesktopOrTablet && (
          <div>
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
              href="/contactUs"
            />
          </div>
        )}
        {isMobile && (
          <div className="flex flex-row items-center gap-10">
            <Image
              src={menu}
              alt="menuBar"
              width={isTablet ? 50 : 40}
              height={isTablet ? 50 : 40}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
