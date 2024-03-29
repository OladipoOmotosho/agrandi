import Link from "next/link";
import { colors, FONTFAMILY } from "../utils";
import useScreenSize from "../utils/useScreenSize";

const CustomButton = ({
  text,
  disabled,
  width,
  height,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  fontWeight,
  onClick,
  loading,
  color,
  background = colors.blue,
  border = "none",
  borderRadius,
  fontFamily,
  className,
  fontSize,
  href,
}: CustomButton) => {
  const { windowSize, isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <button
      disabled={disabled}
      style={{
        opacity: disabled ? "40%" : "100%",
        backgroundColor: background,
        borderRadius: borderRadius,
        textAlign: "center",
        width: width,
        height: height,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        color: color,
        border: border,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      className={`${className} text-white flex flex-row justify-center items-center`}
      onClick={loading || disabled ? () => null : onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
