import React, { useEffect, useState } from "react";
import CustomTextInput from "../../../../components/CustomTextInput";
import { colors } from "../../../../utils";
import CustomButton from "../../../../components/CustomButton";
import useScreenSize from "../../../../utils/useScreenSize";

const Main = () => {
  const [fullName, setFullName] = useState<string | number>("");
  const [email, setEmail] = useState<string | number>("");
  const [message, setMessage] = useState<string | number>("");

  const { isTablet, isDesktop } = useScreenSize();
  const [isClient, setClient] = useState(false);
  const isDesktopOrTablet = isDesktop || isTablet;
  useEffect(() => {
    if (isDesktopOrTablet) {
      setClient(true);
    }
  }, [isClient, isDesktopOrTablet]);

  return (
    <div>
      <div className="flex flex-col gap-4 mb-10">
        <h1
          // className="font-medium text-[64px] leading-[78px] tracking-[0.51px]"
          className="font-medium text-[28px] w-fit mb-4 lg:mb-0 lg:text-[64px] lg:bg-inherit bg-customBlue rounded-3xl py-1 px-4 lg:px-0 text-center lg:leading-[78px] tracking-[0.51px]"
          style={{ color: colors.black }}
        >
          Get in touch
        </h1>
        <p
          className="font-normal text-base text-left tracking-normal "
          style={{ color: colors.gray33 }}
        >
          Please fill the form below if you have any enquiries or questions,{" "}
          <br /> or you would like to kno more about us and our services.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <CustomTextInput
          placeholder={"Enter your full name"}
          value={fullName}
          setValue={setFullName}
          label={"Full Name"}
          width={isClient ? 464 : 343}
          className="customTextInputContainer"
          inputClassName="customInput"
          labelClassName="customLabel"
          borderColor={"#DADADA"}
        />
        <CustomTextInput
          placeholder={"Enter your email"}
          value={email}
          setValue={setEmail}
          label={"Email"}
          width={isClient ? 464 : 343}
          className="customTextInputContainer"
          inputClassName="customInput"
          labelClassName="customLabel"
          borderColor={"#DADADA"}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="customLabel">
            Message
          </label>
          <textarea
            className="customTextArea"
            // style={{ width: isClient ? 464 : 343 }}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <CustomButton
            text={"Send message"}
            disabled={false}
            fontSize={16}
            fontWeight={500}
            paddingBottom={12}
            paddingTop={12}
            paddingLeft={24}
            paddingRight={24}
            borderRadius={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
