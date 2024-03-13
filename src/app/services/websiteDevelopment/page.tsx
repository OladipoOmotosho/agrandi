import React from "react";
import Frame from "../components/Frame";
import Image from "next/image";
import dev from "../../../../public/assets/images/dev.png";
import wireframes from "../../../../public/assets/images/wireframes.png";
import { FONTFAMILY, colors } from "../../../../utils";
import WhyBox from "../components/WhyBox";
import sketch from "../../../../public/assets/images/sketch.png";
import DevelopmentProcess from "../components/DevelopmentProcess";

const page = () => {
  const leftSideDetails = [
    {
      text: "Unparalleled Expertise",
      reasons:
        "At the heart of our success is our team of seasoned developers and designers. With a wealth of experience and a commitment to staying ahead of industry trends, we bring a diverse skill set to every project. From intuitive user interfaces to robust backend systems, we have the expertise to turn your vision into reality.",
    },
    {
      text: "Customized Solutions",
      reasons:
        "We understand that one size does not fit all. That's why our approach is centered on understanding your unique requirements and tailoring our solutions accordingly. Whether you need a dynamic website, a feature-rich mobile application, or a comprehensive e-commerce platform, we have the skills to deliver bespoke solutions that align with your business objectives.",
    },
    {
      text: "Cutting-Edge Technologies",
      reasons:
        "In the ever-evolving landscape of technology, staying ahead is key. Agrandi Technologies is committed to harnessing the power of the latest tools and technologies. From responsive web design to scalable cloud-based applications, we leverage innovative solutions to ensure your digital presence remains at the forefront of industry standards.",
    },
    {
      text: "User-Centric Design",
      reasons:
        "User experience is at the core of everything we do. Our design philosophy revolves around creating seamless, intuitive, and visually appealing interfaces that captivate your audience. We understand the importance of a positive user experience in driving engagement and conversion, and we meticulously design every element with this in mind.",
    },
    {
      text: "Agile Development Methodology",
      reasons:
        "In a dynamic digital landscape, agility is key. Agrandi Technologies follows agile development practices to ensure flexibility and adaptability throughout the project lifecycle. This approach allows for continuous collaboration, quick iterations, and the ability to respond promptly to changing requirements.",
    },
    {
      text: "Comprehensive Support",
      reasons:
        "Our commitment to your success doesn't end with the delivery of the final product. Agrandi Technologies provides ongoing support and maintenance to ensure that your website or application continues to perform at its best. Our support team is readily available to address any issues, implement updates, and provide guidance as your digital presence evolves.",
    },
  ];
  const devProcess = [
    {
      text: "Discovery and Planning",
      reasons:
        "We kick off every project with a thorough discovery phase, where we delve into your goals, target audience, and unique challenges. This lays the foundation for a comprehensive development plan that aligns with your vision and objectives.",
    },
    {
      text: "Design and Prototyping",
      reasons:
        "Our design process involves creating visually stunning and user-friendly prototypes. This stage allows you to visualize the end product and provides an opportunity for feedback and refinement before moving into full-scale development.",
    },
    {
      text: "Development and Testing",
      reasons:
        "With a solid plan and design in place, our development team brings your project to life. We follow rigorous testing processes to ensure the functionality, performance, and security of every feature, delivering a product that meets the highest standards.",
    },
    {
      text: "Deployment and Optimization",
      reasons:
        "Once the development and testing phases are complete, we deploy your website or application to the live environment. Our team continues to monitor performance and optimize for efficiency, ensuring a smooth and seamless user experience.",
    },
  ];
  return (
    <div className="w-full mb-20">
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
        className="mt-[88px] flex flex-col items-center pt-10 pb-[60px]"
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
          <div className="flex flex-row justify-between items-center md:gap-20 xl:gap-[140px]">
            <div className="flex-grow w-full h-auto">
              <Image src={sketch} alt="image" style={{ minWidth: 450 }} />
            </div>
            <div className="flex-grow w-full h-auto" style={{ minWidth: 300 }}>
              <h3
                className="font-medium text-2xl tracking-tight leading-9 mb-8"
                style={{ fontFamily: FONTFAMILY.inter, color: colors.black }}
              >
                Our Development Process
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
