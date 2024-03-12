"use client";
import React from "react";
import InfoBlock from "./components/InfoBlock";
import htmlDude from "../../../public/assets/images/htmlDude.png";
import lady from "../../../public/assets/images/lady.png";
import women from "../../../public/assets/images/women.png";
import flowChart from "../../../public/assets/images/flowChart.png";
import digital from "../../../public/assets/images/digital.png";
import analysis from "../../../public/assets/images/analysis.png";
import { colors } from "../../../utils";

const page = () => {
  const details = [
    {
      heading: "Website and Application Development",
      information:
        "At Agrandi Technologies, we are passionate about crafting exceptional digital experiences. Our team of skilled developers specializes in creating dynamic and user-friendly websites and mobile applications. From concept to deployment, we focus on delivering innovative solutions that not only meet but exceed your expectations. Whether you need a sleek and responsive website or a cutting-edge mobile app, we bring your vision to life with precision and creativity.",
      img: flowChart.src,
    },
    {
      heading: "IT Consultation",
      information:
        "Navigate the ever-evolving landscape of technology with Agrandi Technologies as your trusted IT consulting partner. We offer strategic insights and expert guidance to help your business leverage the latest advancements in technology. Our consulting services encompass everything from system architecture and infrastructure optimization to cybersecurity and digital transformation. With Agrandi, empower your business with the right technology roadmap for sustained growth and success.",
      img: lady.src,
    },
    {
      heading: "E-Commerce Solutions",
      information:
        "Elevate your online business with Agrandi's tailored e-commerce solutions. From user-friendly interfaces to secure payment gateways, we provide end-to-end services for creating and optimizing your digital storefront. Our team ensures a seamless shopping experience for your customers, driving engagement and boosting sales.",
      img: women.src,
    },
    {
      heading: "Custom Software Development",
      information:
        "Empower your business with bespoke software solutions tailored to your unique needs. Agrandi Technologies excels in custom software development, creating applications that align perfectly with your goals. Whether it's streamlining internal processes or enhancing customer experiences, our team delivers scalable and efficient software that grows with your business.",
      img: htmlDude.src,
    },
    {
      heading: "Business Analysis",
      information:
        "Drive informed decision-making and optimize your processes with Agrandi's business analysis services. Our team of analysts brings a strategic approach to understanding your business objectives, identifying opportunities for improvement, and recommending tailored solutions. Gain valuable insights and stay agile in today's dynamic business landscape.",
      img: analysis.src,
    },
    {
      heading: "Cloud Computing Services",
      information:
        "Drive informed decision-making and optimize your processes with Agrandi's business analysis services. Our team of analysts brings a strategic approach to understanding your business objectives, identifying opportunities for improvement, and recommending tailored solutions. Gain valuable insights and stay agile in today's dynamic business landscape.",
      img: digital.src,
    },
  ];
  return (
    <div className="mx-[140px] mb-20">
      <div
        className="flex flex-row justify-center mb-[68px] font-medium text-[4rem]"
        style={{ color: colors.black }}
      >
        <h1>Our Services</h1>
      </div>
      <div className="flex flex-col gap-[92px]">
        {details.map((detail, index) => (
          <InfoBlock
            key={index}
            heading={detail.heading}
            information={detail.information}
            img={detail.img}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } justify-between items-center gap-24`}
            type="services"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
