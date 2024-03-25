"use client";
import React, { useState } from "react";
import InfoBlock from "../../../components/InfoBlock";
import htmlDude from "../../../public/assets/images/htmlDude.png";
import lady from "../../../public/assets/images/lady.png";
import women from "../../../public/assets/images/women.png";
import flowChart from "../../../public/assets/images/coding.png";
import digital from "../../../public/assets/images/digital.png";
import analysis from "../../../public/assets/images/analysis.png";
import { FONTFAMILY, colors } from "../../../utils";

const page = () => {
  const details = [
    {
      heading: "Website and Application Development",
      information:
        "At Agrandi Technologies, we are passionate about crafting exceptional digital experiences. Our team of skilled developers specializes in creating dynamic and user-friendly websites and mobile applications. From concept to deployment, we focus on delivering innovative solutions that not only meet but exceed your expectations. Whether you need a sleek and responsive website or a cutting-edge mobile app, we bring your vision to life with precision and creativity.",
      img: flowChart.src,
      href: "/services/websiteDevelopment",
    },
    {
      heading: "IT Consultation",
      information:
        "Navigate the ever-evolving landscape of technology with Agrandi Technologies as your trusted IT consulting partner. We offer strategic insights and expert guidance to help your business leverage the latest advancements in technology. Our consulting services encompass everything from system architecture and infrastructure optimization to cybersecurity and digital transformation. With Agrandi, empower your business with the right technology roadmap for sustained growth and success.",
      img: lady.src,
      href: "/services/itConsultation",
    },
    {
      heading: "E-Commerce Solutions",
      information:
        "Elevate your online business with Agrandi's tailored e-commerce solutions. From user-friendly interfaces to secure payment gateways, we provide end-to-end services for creating and optimizing your digital storefront. Our team ensures a seamless shopping experience for your customers, driving engagement and boosting sales.",
      img: women.src,
      href: "/services/eCommerce",
    },
    {
      heading: "Custom Software Development",
      information:
        "Empower your business with bespoke software solutions tailored to your unique needs. Agrandi Technologies excels in custom software development, creating applications that align perfectly with your goals. Whether it's streamlining internal processes or enhancing customer experiences, our team delivers scalable and efficient software that grows with your business.",
      img: htmlDude.src,
      href: "/services/customSoftware",
    },
    {
      heading: "Business Analysis",
      information:
        "Drive informed decision-making and optimize your processes with Agrandi's business analysis services. Our team of analysts brings a strategic approach to understanding your business objectives, identifying opportunities for improvement, and recommending tailored solutions. Gain valuable insights and stay agile in today's dynamic business landscape.",
      img: analysis.src,
      href: "/services/businessAnalysis",
    },
    {
      heading: "Cloud Computing Services",
      information:
        "Drive informed decision-making and optimize your processes with Agrandi's business analysis services. Our team of analysts brings a strategic approach to understanding your business objectives, identifying opportunities for improvement, and recommending tailored solutions. Gain valuable insights and stay agile in today's dynamic business landscape.",
      img: digital.src,
      href: "/services/cloudComputing",
    },
  ];
  return (
    <div className="mx-4 lg:mx-[140px] mb-20">
      <div className="flex flex-row justify-center mb-8 lg:mb-[68px] mt-4">
        <h1
          className="font-medium text-xl lg:text-[4rem]  bg-customBlue w-fit lg:w-full py-3 lg:py-0 px-2 lg:px-0 rounded-3xl text-center lg:bg-none"
          style={{ color: colors.black, fontFamily: FONTFAMILY.inter }}
        >
          Our Services
        </h1>
      </div>
      <div className="flex flex-col gap-[92px]">
        {details.map((detail, index) => (
          <InfoBlock
            key={index}
            heading={detail.heading}
            information={detail.information}
            img={detail.img}
            href={detail.href}
            className={`flex ${
              index % 2 === 0
                ? "lg:flex-row flex-col"
                : "lg:flex-row-reverse flex-col"
            } justify-between items-center gap-24`}
            type="services"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
