import React from "react";
import Frame from "../components/Frame";
import Image from "next/image";
import uiUx from "../../../../public/assets/images/uiUx.png";
import software from "../../../../public/assets/images/software.png";
import { FONTFAMILY, colors } from "../../../../utils";
import WhyBox from "../components/WhyBox";
import customFooter from "../../../../public/assets/images/customFooter.png";
import DevelopmentProcess from "../components/DevelopmentProcess";

const page = () => {
  const leftSideDetails = [
    {
      text: "Client-Centric Approach",
      reasons:
        "Agrandi Technologies believes in placing our clients at the forefront of every project. Our custom software development process begins with a deep understanding of your business objectives, workflow, and challenges. We collaborate closely with you to ensure that the resulting software aligns seamlessly with your vision and operational needs.",
    },
    {
      text: "Scalability and Flexibility",
      reasons:
        "Business environments evolve, and so should your software. Our custom solutions are designed to be scalable and flexible, accommodating changes in user volumes, data loads, and feature requirements. This ensures that your software investment continues to provide value as your business grows and adapts.",
    },
    {
      text: "Streamlined Workflows",
      reasons:
        "We analyze your existing workflows and business processes to identify areas for improvement and optimization. Through custom software development, we create solutions that streamline your operations, reduce redundancies, and enhance overall productivity.",
    },
    {
      text: "Integration with Existing Systems",
      reasons:
        "We understands the importance of seamless integration with your existing systems. Whether it's integrating with third-party applications, databases, or other software platforms, our development team ensures that your custom solution functions harmoniously within your technological ecosystem.",
    },
    {
      text: "User-Friendly Interfaces",
      reasons:
        "User adoption is critical for the success of any software solution. Our development team prioritizes the creation of intuitive and user-friendly interfaces. Through iterative design processes, we guarantee that your custom software is not only powerful but also easily navigable, ensuring high user satisfaction.",
    },
    {
      text: "Data Security and Compliance",
      reasons:
        "Security is paramount in the digital age. Agrandi Technologies incorporates robust security measures into every phase of custom software development. From data encryption to compliance with industry regulations, we prioritize the protection of your sensitive information.",
    },
  ];
  const devProcess = [
    {
      text: "Requirement Analysis",
      reasons:
        "Our process begins with a comprehensive analysis of your business needs and requirements. We work closely with key stakeholders to gather insights into your objectives, challenges, and specific features required for the custom software.",
    },
    {
      text: "Design and Prototyping",
      reasons:
        "Based on the gathered requirements, our team creates detailed design documents and prototypes. This phase allows you to visualize the software's layout, features, and functionalities. We welcome feedback to ensure that the final design aligns perfectly with your expectations.",
    },
    {
      text: "Development and Testing",
      reasons:
        "With a solid plan in place, our development team brings your custom software to life. Rigorous testing is conducted throughout the development process to identify and rectify any issues, ensuring the final product meets the highest quality standards.",
    },
    {
      text: "Deployment and Training",
      reasons:
        "Upon successful testing, we deploy the custom software in your environment. Our team provides comprehensive training to your staff, ensuring a smooth transition and effective utilization of the new solution in your day-to-day operations.",
    },
    {
      text: "Ongoing Support and Maintenance",
      reasons:
        "Agrandi Technologies is committed to providing ongoing support and maintenance for your custom software. Our support team is readily available to address any issues, implement updates, and ensure the continuous performance and relevance of the solution.",
    },
  ];
  return (
    <div className="w-full mb-20">
      <Frame
        heading={
          <>
            Custom Software <br /> Development
          </>
        }
        information={
          "Agrandi Technologies excels in custom software development, creating applications that align perfectly with your goals. Whether it's streamlining internal processes or enhancing customer experiences, our team delivers scalable and efficient software that grows with your business."
        }
        pic={software.src}
        img={uiUx.src}
        detail={
          "In the dynamic landscape of modern business, off-the-shelf software may not always align perfectly with the specific requirements of your organization. Agrandi Technologies specializes in custom software development, offering tailored solutions that address your unique challenges, enhance operational efficiency, and propel your business towards innovation and success."
        }
        subHead={
          "Empower your business with bespoke software solutions tailored to your unique needs. "
        }
        subTopic={"Bespoke Software Solutions Tailored to Your Unique Needs"}
      />
      <section
        className="mt-[88px] flex flex-col items-center pt-10 pb-[60px]"
        style={{ background: colors.lightgray }}
      >
        <h3
          className="font-medium text-2xl text-center leading-8 tracking-[0.51px] w-[45%] mb-[60px]"
          style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
        >
          {"Why Choose Agrandi Technologies for Custom Software Development?"}
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
          <div className="flex flex-row justify-between iitems-start md:gap-20 xl:gap-[140px]">
            <div className="flex-grow w-full h-auto ">
              <Image src={customFooter} alt="image" style={{ minWidth: 450 }} />
            </div>
            <div className="flex-grow w-full h-auto" style={{ minWidth: 300 }}>
              <h3
                className="font-medium text-2xl tracking-tight leading-9 mb-8"
                style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
              >
                Our Software Development Process
              </h3>
              <div>
                {devProcess.slice(0, 4).map((left, index) => (
                  <DevelopmentProcess
                    key={index}
                    text={left.text}
                    reasons={left.reasons}
                    type={"line"}
                  />
                ))}
                {devProcess.length >= 4 && (
                  <DevelopmentProcess
                    text={devProcess[4].text}
                    reasons={devProcess[4].reasons}
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
