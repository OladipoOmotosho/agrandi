import React from "react";
import Frame from "../components/Frame";
import Image from "next/image";
import handMan from "../../../../public/assets/images/handMan.png";
import analysisImg from "../../../../public/assets/images/analysisImg.png";
import { FONTFAMILY, colors } from "../../../../utils";
import WhyBox from "../components/WhyBox";
import foot from "../../../../public/assets/images/foot.png";
import DevelopmentProcess from "../components/DevelopmentProcess";
import styles from "./business.module.css";

const page = () => {
  const leftSideDetails = [
    {
      text: "Holistic Approach",
      reasons:
        "Our business analysis process begins with a holistic view of your organization. Agrandi Technologies takes the time to understand your business objectives, challenges, and unique market positioning. By examining internal processes and external factors, we provide a comprehensive analysis that forms the foundation for strategic decision-making.",
    },
    {
      text: "Data-Driven Insights",
      reasons:
        "Business decisions are only as good as the data they're based on. Agrandi Technologies leverages advanced analytics and data-driven methodologies to gather, analyze, and interpret relevant information. By turning raw data into actionable insights, we empower organizations to make informed and strategic choices.",
    },
    {
      text: "Process Optimization",
      reasons:
        "Efficiency is at the core of successful businesses. Our business analysis services include a detailed examination of your internal processes. We identify bottlenecks, redundancies, and areas for improvement, offering recommendations for process optimization to enhance overall productivity and resource utilization",
    },
    {
      text: "Market Research and Competitive Analysis",
      reasons:
        "Staying competitive requires a keen understanding of market dynamics and competitor strategies. Agrandi Technologies conducts thorough market research and competitive analysis, providing you with valuable insights into industry trends, consumer preferences, and the strategies employed by your competitors.",
    },
    {
      text: "Technology Alignment",
      reasons:
        "Technology plays a pivotal role in modern business operations. Agrandi Technologies assesses your current technology stack to ensure it aligns with your business objectives. Our recommendations include the integration of new technologies, upgrades, or customization to maximize the impact of your digital infrastructure.",
    },
    {
      text: "Strategic Planning",
      reasons:
        "Armed with a deep understanding of your organization and the business landscape, we assist in crafting strategic plans that align with your long-term goals. Our business analysis services provide the foundation for informed decision-making, enabling you to navigate challenges and capitalize on opportunities.",
    },
  ];
  const devProcess = [
    {
      text: "Discovery and Assessment",
      reasons:
        "We begin with a comprehensive discovery phase, collaborating with key stakeholders to understand your business goals, challenges, and current processes.",
    },
    {
      text: "Data Collection and Analysis",
      reasons:
        "Agrandi Technologies gathers relevant data from various sources, employing advanced analytics to extract meaningful insights. Our analysis encompasses both internal and external factors influencing your business.",
    },
    {
      text: "Process Evaluation",
      reasons:
        "We conduct a thorough evaluation of your internal processes, identifying areas for improvement, optimization, and increased efficiency. This stage involves collaboration with your team to gain insights into daily operations.",
    },
    {
      text: "Market and Competitive Analysis",
      reasons:
        "Through market research and competitive analysis, we provide a detailed understanding of your industry landscape, helping you stay ahead by anticipating market trends and reacting to competitor strategies",
    },
    {
      text: "Technology Assessment",
      reasons:
        "Our team assesses your current technology infrastructure, ensuring that it aligns with your business goals. We provide recommendations for technology enhancements or integrations to support your strategic objectives.",
    },
    {
      text: "Strategic Recommendations",
      reasons:
        "Agrandi Technologies delivers a comprehensive set of strategic recommendations based on our analysis. These recommendations serve as a roadmap for informed decision-making and long-term planning.",
    },
  ];
  return (
    <div className="w-full mb-20">
      <Frame
        heading={"Business Analysis"}
        information={
          "Our team of analysts brings a strategic approach to understanding your business objectives, identifying opportunities for improvement, and recommending tailored solutions. Gain valuable insights and stay agile in today's dynamic business landscape."
        }
        pic={analysisImg.src}
        img={handMan.src}
        detail={
          "In the dynamic landscape of business, staying ahead requires a deep understanding of market trends, consumer behavior, and internal operations. Agrandi Technologies offers comprehensive business analysis services designed to provide organizations with the insights needed to make informed decisions, enhance efficiency, and drive strategic growth."
        }
        subHead={
          "Drive informed decision-making and optimize your processes with Agrandi's business analysis services"
        }
        subTopic={"Strategic Business Analysis for Informed Decision-Making"}
      />
      <section
        className="mt-[80.48px] lg:mt-[88px] flex flex-col items-center px-[14px] lg:px-0 pt-8 lg:pt-10 pb-[60px] rounded-t-[40px] lg:rounded-t-none"
        style={{ background: colors.lightgray }}
      >
        <h3
          className="font-medium text-xl lg:text-2xl text-center leading-8 tracking-[0.51px] lg:w-[40%] mb-6 lg:mb-[60px]"
          style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
        >
          {"Why Choose Agrandi Technologies for Business Analysis?"}
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
              <Image src={foot} alt="image" className={styles.foot} priority />
            </div>
            <div
              className="flex-grow w-full px-4 lg:px-0 h-auto mt-8 lg:mt-0"
              style={{ minWidth: 300 }}
            >
              <h3
                className="font-medium text-xl lg:text-2xl text-center lg:text-left tracking-tight leading-9 mb-8"
                style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
              >
                Our Business Analysis Process
              </h3>
              <div>
                {devProcess.slice(0, 5).map((left, index) => (
                  <DevelopmentProcess
                    key={index}
                    text={left.text}
                    reasons={left.reasons}
                    type={"line"}
                  />
                ))}
                {devProcess.length >= 5 && (
                  <DevelopmentProcess
                    text={devProcess[5].text}
                    reasons={devProcess[5].reasons}
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
