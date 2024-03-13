import React from "react";
import Frame from "../components/Frame";
import Image from "next/image";
import touch from "../../../../public/assets/images/touch.png";
import cloud from "../../../../public/assets/images/cloud.png";
import { FONTFAMILY, colors } from "../../../../utils";
import WhyBox from "../components/WhyBox";
import foot from "../../../../public/assets/images/foot.png";
import DevelopmentProcess from "../components/DevelopmentProcess";

const page = () => {
  const leftSideDetails = [
    {
      text: "Scalability and Flexibility",
      reasons:
        "Agrandi Technologies understands that business needs are dynamic. Our cloud computing solutions are designed to scale seamlessly, allowing organizations to adapt to changing requirements, whether it's rapid growth or fluctuations in demand. This flexibility ensures that your IT infrastructure can keep pace with the evolving needs of your business..",
    },
    {
      text: "Cost Efficiency",
      reasons:
        "Traditional IT infrastructure often involves significant upfront costs and ongoing maintenance expenses. Cloud computing provides a cost-effective alternative with pay-as-you-go models. Agrandi Technologies helps organizations optimize their IT spending by leveraging cloud resources efficiently, reducing hardware investments, and minimizing operational overhead.",
    },
    {
      text: "Accessibility and Collaboration",
      reasons:
        "Cloud computing facilitates anytime, anywhere access to business applications and data. This accessibility promotes collaboration among remote teams and allows employees to work efficiently from various locations. Agrandi Technologies ensures that your organization embraces the full potential of cloud technology to enhance communication and teamwork.",
    },
    {
      text: "Data Security and Compliance",
      reasons:
        "Security is a top priority in the digital age. Agrandi Technologies implements robust security measures to protect your data in the cloud. From encryption to identity management, our solutions adhere to industry standards and compliance requirements, ensuring the confidentiality and integrity of your sensitive information.",
    },
    {
      text: "Disaster Recovery and Business Continuity",
      reasons:
        "Cloud computing offers built-in disaster recovery capabilities, reducing the risk of data loss and downtime. Agrandi Technologies designs comprehensive disaster recovery plans, leveraging cloud infrastructure to ensure quick and efficient recovery in the face of unforeseen events, minimizing business disruptions.",
    },
    {
      text: "Advanced Technologies Integration",
      reasons:
        "Staying competitive requires leveraging the latest technologies. Agrandi Technologies integrates cutting-edge solutions like artificial intelligence, machine learning, and analytics into cloud platforms. This integration enhances the functionality and efficiency of your business processes, providing a competitive edge in the market.",
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
        heading={
          <>
            Cloud Computing <br /> Services
          </>
        }
        information={
          "From migrating your infrastructure to the cloud to developing cloud-native applications, we provide comprehensive solutions to enhance scalability, flexibility, and cost-efficiency. Harness the power of the cloud with Agrandi Technologies for a competitive edge in the digital era."
        }
        pic={cloud.src}
        img={touch.src}
        detail={
          "In the era of digital transformation, businesses require scalable, flexible, and secure solutions to stay competitive. Agrandi Technologies is your trusted partner in harnessing the power of cloud computing. Our comprehensive cloud solutions enable organizations to streamline operations, enhance collaboration, and drive innovation in a dynamic and ever-evolving business landscape."
        }
        subHead={
          "Transform the way you do business with Agrandi's cloud computing services"
        }
        subTopic={
          "Transforming Businesses through Innovative Cloud Computing Solutions"
        }
      />
      <section
        className="mt-[88px] flex flex-col items-center pt-10 pb-[60px]"
        style={{ background: colors.lightgray }}
      >
        <h3
          className="font-medium text-2xl text-center leading-8 tracking-[0.51px] w-[40%] mb-[60px]"
          style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
        >
          {"Why Choose Agrandi Technologies for Cloud Computing Solutions?"}
        </h3>
        <div className="w-full flex flex-row justify-between gap-24 pl-[175px] pr-[198px]">
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
      <section className="pt-[140px] md:pl-28 md:pr-28 xl:pl-[198px] xl:pr-[117px]">
        <div className="mx-auto" style={{ margin: "0" }}>
          <div className="flex flex-row justify-between items-start md:gap-20 xl:gap-[140px]">
            <div className="flex-grow w-full h-auto">
              <Image src={foot} alt="image" style={{ minWidth: 450 }} />
            </div>
            <div
              className="flex-grow w-full h-auto mt-[-18px]"
              style={{ minWidth: 300 }}
            >
              <h3
                className="font-medium text-2xl tracking-tight leading-9 mb-8"
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
