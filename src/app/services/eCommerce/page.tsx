import React from "react";
import Frame from "../components/Frame";
import Image from "next/image";
import ecommerce from "../../../../public/assets/images/ecommerce.png";
import prettyWomen from "../../../../public/assets/images/prettyWomen.png";
import { FONTFAMILY, colors } from "../../../../utils";
import WhyBox from "../components/WhyBox";
import commerceFootImg from "../../../../public/assets/images/commerceFootImg.png";
import DevelopmentProcess from "../components/DevelopmentProcess";

const page = () => {
  const leftSideDetails = [
    {
      text: "Tailored E-commerce Platforms",
      reasons:
        "Agrandi Technologies understands that each business is unique, and so are its e-commerce requirements. Our team of experts collaborates closely with clients to develop bespoke e-commerce platforms that align with their brand identity, goals, and target audience. Whether you're a startup or an established enterprise, we tailor solutions to suit your specific needs.",
    },
    {
      text: "User-Centric Design",
      reasons:
        "The success of an e-commerce platform hinges on user experience. Our design philosophy revolves around creating intuitive, visually appealing interfaces that engage users and drive conversions. From seamless navigation to a secure and straightforward checkout process, we prioritize every aspect of the user journey to enhance satisfaction and loyalty.",
    },
    {
      text: "Scalability for Growth",
      reasons:
        "Agrandi Technologies designs e-commerce solutions with scalability in mind. As your business expands, your online platform should effortlessly accommodate growth. Our scalable architectures and robust backend systems ensure that your e-commerce website can handle increased traffic, product offerings, and user interactions without compromising performance.",
    },
    {
      text: "Mobile-First Approach",
      reasons:
        "In an increasingly mobile-centric world, we prioritize a mobile-first approach to e-commerce development. Our responsive design ensures that your online store provides a seamless and enjoyable experience across various devices, catering to the preferences of today's on-the-go consumers.",
    },
    {
      text: "Integration with Leading Technologies",
      reasons:
        "Staying ahead in the competitive e-commerce landscape requires leveraging the latest technologies. Agrandi Technologies integrates cutting-edge solutions such as AI-driven personalization, secure payment gateways, and advanced analytics to enhance the functionality and efficiency of your online store.",
    },
    {
      text: "Robust Security Measures",
      reasons:
        "Security is non-negotiable in e-commerce. Agrandi Technologies implements industry-leading security measures to safeguard your customers' sensitive information and protect your business from cyber threats. Our commitment to data integrity and privacy compliance ensures a secure online shopping environment.",
    },
  ];
  const devProcess = [
    {
      text: "Consultation and Needs Analysis",
      reasons:
        "We start by understanding your business, target audience, and specific e-commerce goals. Through in-depth consultations, we identify the features and functionalities required to create a tailored solution.",
    },
    {
      text: "Design and Prototyping",
      reasons:
        "Our design phase involves creating prototypes and wireframes, allowing you to visualize the layout and flow of your e-commerce platform. This iterative process ensures that the final design aligns perfectly with your vision.",
    },
    {
      text: "Development and Integration",
      reasons:
        "With a solid plan in place, our development team brings your e-commerce platform to life. We integrate essential features, payment gateways, and third-party tools, ensuring seamless functionality and a positive user experience.",
    },
    {
      text: "Testing and Quality Assurance",
      reasons:
        "Rigorous testing is conducted to identify and resolve any issues before the platform goes live. We ensure that your e-commerce solution is bug-free, secure, and performs optimally across different devices and browsers.",
    },
    {
      text: "Launch and Ongoing Support",
      reasons:
        "Upon successful testing, we launch your e-commerce platform to the public. Agrandi Technologies provides ongoing support, addressing any issues promptly, implementing updates, and ensuring that your online store remains at the forefront of industry standards.",
    },
  ];
  return (
    <div className="w-full mb-20">
      <Frame
        heading={"E-Commerce & Solutions"}
        information={
          "From user-friendly interfaces to secure payment gateways, we provide end-to-end services for creating and optimizing your digital storefront. Our team ensures a seamless shopping experience for your customers, driving engagement and boosting sales."
        }
        pic={prettyWomen.src}
        img={ecommerce.src}
        detail={
          "In the era of digital commerce, having a robust and streamlined online presence is essential for businesses of all sizes. Agrandi Technologies is your go-to partner for cutting-edge e-commerce solutions that not only meet but exceed the demands of the dynamic online marketplace. With a focus on user experience, scalability, and innovation, we empower businesses to thrive in the ever-evolving world of e-commerce."
        }
        subHead={
          "Elevate your online business with Agrandi's tailored e-commerce solutions."
        }
        subTopic={
          "Elevating Your Business with Innovative E-commerce Solutions"
        }
      />
      <section
        className="mt-[88px] flex flex-col items-center pt-10 pb-[60px]"
        style={{ background: colors.lightgray }}
      >
        <h3
          className="font-medium text-2xl text-center leading-8 tracking-[0.51px] w-[45%] mb-[60px]"
          style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
        >
          {"Why Choose Agrandi Technologies for E-commerce Solutions?"}
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
            <div className="flex-grow w-full h-auto pt-20">
              <Image
                src={commerceFootImg}
                alt="image"
                style={{ minWidth: 450 }}
              />
            </div>
            <div className="flex-grow w-full h-auto" style={{ minWidth: 300 }}>
              <h3
                className="font-medium text-2xl tracking-tight leading-9 mb-8"
                style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
              >
                Our E-commerce Development Process
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
