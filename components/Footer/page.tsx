import { colors } from "../../utils";
import { contact, about, ServiceLink } from "./links";
import styles from "./Footer.module.css";
import agrandi from "../../public/assets/icons/agrandi.svg";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/assets/icons/Facebook.svg";
import insta from "../../public/assets/icons/insta.svg";
import x from "../../public/assets/icons/x.svg";
import youtube from "../../public/assets/icons/youtube.svg";

const Footer = () => {
  return (
    <div
      className="md:flex md:justify-between items-start md:px-[140px] px-[24px] md:pt-[40px] pt-[60px] pb-[122px] md:pb-[56px]"
      style={{ backgroundColor: colors.white }}
    >
      <div>
        <p className={`text-base mb-[21px]`} style={{ color: colors.blue }}>
          <Image
            src={agrandi}
            alt="logo"
            width={150}
            height={25}
            style={{ width: "auto", height: "auto" }}
            loading="lazy"
          />
        </p>
      </div>
      <div className="flex flex-col gap-[30px] items-center">
        <div className="flex flex-row gap-8">
          <div>
            {ServiceLink.map((link, index) => (
              <Link key={index} href={link.link}>
                <p
                  key={index}
                  className={`text-base font-[500] cursor-pointer`}
                  style={{ color: colors.black2 }}
                >
                  {link.text}
                </p>
              </Link>
            ))}
          </div>

          <div>
            {about.map((link, index) => (
              <Link key={index} href={link.link}>
                <p
                  key={index}
                  className={`text-base font-[500] cursor-pointer `}
                  style={{ color: colors.black2 }}
                >
                  {link.text}
                </p>
              </Link>
            ))}
          </div>
          <div>
            {contact.map((link, index) => (
              <Link key={index} href={link.link}>
                <p
                  key={index}
                  className={`text-base font-[500] cursor-pointer `}
                  style={{ color: colors.black2 }}
                >
                  {link.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <p
          className={"font-[500] text-[13px] leading-[18px]"}
          style={{ color: colors.gray7 }}
        >
          © Copyright 2024 Agrandi Technologies
        </p>
      </div>

      <div className="flex flex-row items-center gap-3">
        <Image src={facebook} alt="image" />
        <Image src={insta} alt="image" />
        <Image src={x} alt="image" />
        <Image src={youtube} alt="image" />
      </div>
    </div>
  );
};
export default Footer;
