import { useState } from "react";
import calendar from "../public/assets/icons/calendar.svg";
import eyeHide from "../public/assets/icons/eyeHide.svg";
import eyeShow from "../public/assets/icons/eyeShow.svg";
import useScreenSize from "../utils/useScreenSize";
import { colors } from "../utils";
import Image from "next/image";

type CustomTextInputProps = {
  placeholder: string;
  value: string | number;
  setValue: (value: string | number) => void;
  type?: string;
  label: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  placeholderClassName?: string;
  width?: number;
  height?: number;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  placeholderStyle?: React.CSSProperties;
  borderColor?: string;
};

const CustomTextInput = ({
  placeholder,
  value,
  setValue,
  type,
  label,
  className,
  inputClassName,
  labelClassName,
  //   placeholderClassName,
  width,
  height,
  inputStyle,
  labelStyle,
  //   placeholderStyle,
  borderColor = colors.gray4,
}: CustomTextInputProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showCalendar, setShowCalendar] = useState(true);

  const { windowSize, isMobile, isDesktop, isTablet } = useScreenSize();
  const screenWidth = windowSize.width || 0;
  const inputWidth = isMobile
    ? screenWidth
    : isDesktop
    ? 464
    : isTablet
    ? 360
    : width || 464;

  return (
    <div className={className}>
      <div className={`text-xs mb-[8px] ${labelClassName}`} style={labelStyle}>
        {label}
      </div>
      <div
        className="md:w-[464px] w-[327px] py-[13px] px-[16px] text-sm flex flex-row"
        style={{
          color: colors.gray4,
          borderWidth: 1,
          borderColor: borderColor,
          borderRadius: 4,
          width: inputWidth,
          height: height,
          //   placeholderStyle: placeholderStyle,
        }}
      >
        <input
          value={value}
          placeholder={placeholder && placeholder}
          type={showPassword ? type : "text"}
          name={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full bg-inherit ${inputClassName}`}
          style={inputStyle}
        />
        {type === "password" ? (
          <div
            onClick={() => setShowPassword(!showPassword)}
            style={{ paddingLeft: 17, cursor: "pointer" }}
          >
            {showPassword ? (
              <Image src={eyeHide} alt="Eyeicon" />
            ) : (
              <Image src={eyeShow} alt="eyeIcon" />
            )}
          </div>
        ) : (
          type === "calendar" && (
            <div
              onClick={() => setShowCalendar(!showCalendar)}
              style={{ paddingLeft: 17, cursor: "pointer" }}
            >
              {showCalendar ? <Image src={calendar} alt="CalenderIcon" /> : ""}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CustomTextInput;
