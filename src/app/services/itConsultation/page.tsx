import React from "react";
import Frame from "../components/Frame";
import Image from "next/image";
import businessMeet from "../../../../public/assets/images/businessMeet.png";
import businessBg from "../../../../public/assets/images/businessBg.png";
import { FONTFAMILY, colors } from "../../../../utils";
import WhyBox from "../components/WhyBox";
import businessFootImg from "../../../../public/assets/images/businessFootImg.png";
import DevelopmentProcess from "../components/DevelopmentProcess";
import styles from "./it.module.css";

const page = () => {
  const leftSideDetails = [
    {
      text: "Holistic Approach",
      reasons:
        "We understand that successful IT consulting goes beyond solving immediate challenges. It involves a holistic understanding of your business, its objectives, and the industry landscape. Our seasoned consultants work closely with you to develop a comprehensive IT strategy that aligns with your business goals and sets the stage for long-term success.",
    },
    {
      text: "Strategic Planning",
      reasons:
        "Our consulting services begin with a thorough analysis of your current IT infrastructure, processes, and challenges. Through strategic planning, we identify opportunities for improvement, optimization, and innovation. Whether you're looking to streamline operations, enhance cybersecurity, or leverage emerging technologies, our consultants craft a roadmap tailored to your unique needs.",
    },
    {
      text: "Technology Alignment",
      reasons:
        "The rapidly evolving nature of technology requires businesses to stay agile and adaptive. Agrandi Technologies ensures that your IT infrastructure is aligned with the latest advancements, promoting efficiency and scalability. We assess your current technology stack, recommend upgrades or integrations, and guide you in leveraging the right tools to stay competitive in your industry.",
    },
    {
      text: "Cybersecurity Expertise",
      reasons:
        "In an era where data breaches and cyber threats are on the rise, safeguarding your digital assets is paramount. Our IT consultants bring extensive cybersecurity expertise to the table. From risk assessments to implementing robust security measures, we prioritize the protection of your sensitive information, ensuring compliance with industry regulations and bolstering your overall security posture.",
    },
    {
      text: "Scalability and Flexibility",
      reasons:
        "Agrandi Technologies understands that business needs are dynamic. Our IT consulting services are designed to be scalable and flexible, allowing you to adapt to changing requirements and market conditions. Whether you're expanding operations, entering new markets, or integrating new technologies, our consultants provide guidance to ensure a seamless and efficient transition.",
    },
    {
      text: "Cost Optimization",
      reasons:
        "Effective IT consulting is not just about implementing the latest technologies; it's also about optimizing costs. Agrandi Technologies conducts thorough cost assessments to identify opportunities for optimization without compromising on performance. Our goal is to help you achieve maximum efficiency and ROI from your IT investments.",
    },
  ];
  const devProcess = [
    {
      text: "Needs Assessment",
      reasons:
        "We begin by understanding your business objectives, challenges, and existing IT landscape. Through in-depth discussions and analysis, our consultants identify areas where technology can drive value and improvement.",
    },
    {
      text: "Strategic Planning",
      reasons:
        "Based on the needs assessment, we develop a tailored IT strategy that aligns with your business goals. This includes recommendations for technology upgrades, process improvements, and cybersecurity measures.",
    },
    {
      text: "Implementation and Integration",
      reasons:
        "Our team works seamlessly to implement the proposed solutions, ensuring minimal disruption to your operations. We focus on efficient integration with existing systems and provide comprehensive training to your staff.",
    },
    {
      text: "Continuous Monitoring and Optimization",
      reasons:
        "Post-implementation, Agrandi Technologies continues to monitor the performance of your IT infrastructure. We proactively identify areas for optimization, recommend updates, and ensure that your technology environment evolves with your business.",
    },
  ];
  return (
    <div className="w-full mb-20">
      <Frame
        heading={"IT Consultation"}
        information={
          "We offer strategic insights and expert guidance to help your business leverage the latest advancements in technology. Our consulting services encompass everything from system architecture and infrastructure optimization to cybersecurity and digital transformation. With Agrandi, empower your business with the right technology roadmap for sustained growth and success."
        }
        pic={businessBg.src}
        img={businessMeet.src}
        detail={
          "In the fast-paced and ever-evolving world of technology, businesses face a myriad of challenges and opportunities. Navigating this digital landscape requires a strategic approach, and that's where Agrandi Technologies steps in as your trusted IT consulting partner. With a wealth of expertise and a commitment to driving innovation, we empower businesses to harness the full potential of technology to achieve their goals."
        }
        subHead={
          "Navigate the ever-evolving landscape of technology with Agrandi Technologies as your trusted IT consulting partner."
        }
        subTopic={
          "Unlocking Business Potential: We are your Trusted IT Consulting Partner"
        }
      />
      <section
        className="mt-[80.48px] lg:mt-[88px] flex flex-col items-center px-[14px] lg:px-0 pt-8 lg:pt-10 pb-[60px] rounded-t-[40px] lg:rounded-t-none"
        style={{ background: colors.lightgray }}
      >
        <h3
          className="font-medium text-xl lg:text-2xl text-center leading-8 tracking-[0.51px] lg:w-[40%] mb-6 lg:mb-[60px]"
          style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
        >
          {"Why Choose Agrandi Technologies for IT Consultation?"}
        </h3>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-24 lg:pl-[175px] lg:pr-[198px]">
          <div className="flex flex-col">
            {leftSideDetails.slice(0, 2).map((left, index) => (
              <WhyBox
                key={index}
                text={left.text}
                reasons={left.reasons}
                type={"line"}
              />
            ))}
            {leftSideDetails.length >= 3 && (
              <WhyBox
                text={leftSideDetails[2].text}
                reasons={leftSideDetails[2].reasons}
                type={"noLine"}
              />
            )}
          </div>
          <div className="flex flex-col">
            {leftSideDetails.slice(3, 5).map((left, index) => (
              <WhyBox
                key={index + 3}
                text={left.text}
                reasons={left.reasons}
                type={"line"}
              />
            ))}
            {leftSideDetails.length === 6 && (
              <WhyBox
                text={leftSideDetails[5].text}
                reasons={leftSideDetails[5].reasons}
                type={"noLine"}
              />
            )}
          </div>
        </div>
      </section>
      <section className="pt-20 lg:pt-[140px] md:pl-28 md:pr-28 xl:pl-[198px] xl:pr-[117px]">
        <div className="mx-[14.5px] lg:mx-auto" style={{ margin: "0" }}>
          <div className="flex flex-col lg:flex-row justify-between items-center md:gap-20 xl:gap-[140px]">
            <div className="flex-grow flex justify-center w-full h-auto px-4 lg:px-0 ">
              <Image
                src={businessFootImg}
                alt="image"
                className={styles.businessFootImg}
                priority
              />
            </div>
            <div
              className="flex-grow w-full px-4 lg:px-0 h-auto mt-8 lg:mt-0"
              style={{ minWidth: 300 }}
            >
              <h3
                className="font-medium text-xl lg:text-2xl text-center lg:text-left tracking-tight leading-9 mb-8"
                style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
              >
                Our IT Consultation Process
              </h3>
              <div className="">
                {devProcess.slice(0, 2).map((left, index) => (
                  <DevelopmentProcess
                    key={index}
                    text={left.text}
                    reasons={left.reasons}
                    type={"line"}
                  />
                ))}
                {devProcess.length >= 4 && (
                  <DevelopmentProcess
                    text={devProcess[2].text}
                    reasons={devProcess[2].reasons}
                    type={"noLine"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
