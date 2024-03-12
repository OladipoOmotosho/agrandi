import React from "react";
import Frame from "../components/Frame";
import Image from "next/image";
import dev from "../../../../public/assets/images/dev.png";
import wireframes from "../../../../public/assets/images/wireframes.png";
import { FONTFAMILY, colors } from "../../../../utils";
import WhyBox from "../components/WhyBox";

const page = () => {
  const leftSideDetails = [
    {
      text: "Unparalleled Expertise",
      reasons:
        "At the heart of our success is our team of seasoned developers and designers. With a wealth of experience and a commitment to staying ahead of industry trends, we bring a diverse skill set to every project. From intuitive user interfaces to robust backend systems, we have the expertise to turn your vision into reality.",
    },
    {
      text: "Unparalleled Expertise",
      reasons:
        "At the heart of our success is our team of seasoned developers and designers. With a wealth of experience and a commitment to staying ahead of industry trends, we bring a diverse skill set to every project. From intuitive user interfaces to robust backend systems, we have the expertise to turn your vision into reality.",
    },
    {
      text: "Unparalleled Expertise",
      reasons:
        "At the heart of our success is our team of seasoned developers and designers. With a wealth of experience and a commitment to staying ahead of industry trends, we bring a diverse skill set to every project. From intuitive user interfaces to robust backend systems, we have the expertise to turn your vision into reality.",
    },
  ];
  return (
    <div className="">
      <Frame
        heading={"Website and Application Development"}
        information={
          "Our team of skilled developers specializes in creating dynamic and user-friendly websites and mobile applications From concept to deployment, we focus on delivering innovative solutions that not only meet but exceed your expectations. Whether you need a sleek and responsive website or a cutting-edge mobile app, we bring your vision to life with precision and creativity."
        }
        pic={wireframes.src}
        img={dev.src}
        detail={
          "At Agrandi Technologies, we transcend boundaries to deliver cutting-edge solutions in website and application development. Our passion lies in crafting digital experiences that not only meet but exceed the expectations of our clients. Whether you're a startup looking to establish your online presence or a seasoned enterprise aiming for digital transformation, our bespoke development services are tailored to elevate your brand to new heights."
        }
        subHead={
          "At Agrandi Technologies, we are passionate about crafting exceptional digital experiences. "
        }
        subTopic={
          "Your Gateway to Innovative Website and Application Development"
        }
      />
      <section
        className="mt-[88px] flex flex-col items-center px-[198px] pt-10 pb-[60px]"
        style={{ background: colors.lightgray }}
      >
        <h3
          className="font-medium text-2xl text-center leading-8 tracking-[0.51px] w-[45%] mb-[60px]"
          style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
        >
          {
            "Why Choose Agrandi Technologies for Website and Application Development?"
          }
        </h3>
        <div className="w-full flex flex-row justify-center">
          <div>
            {leftSideDetails.map((left, index) => (
              <WhyBox key={index} text={left.text} reasons={left.reasons} />
            ))}
          </div>
          <div>
            {leftSideDetails.map((left, index) => (
              <WhyBox key={index} text={left.text} reasons={left.reasons} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
