import React from "react";
import Frame from "../components/Frame";
import Image from "next/image";
import dev from "../../../../public/assets/images/dev.png";
import wireframes from "../../../../public/assets/images/wireframes.png";

const page = () => {
  return (
    <div>
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
        subTitle={""}
      />
    </div>
  );
};

export default page;
