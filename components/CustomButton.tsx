import { height } from "@mui/system";
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
  // borderTopLeftRadius,
  // borderTopRightRadius,
  // borderEndEndRadius,
  // borderEndStartRadius,
  fontSize,
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
        // borderTopLeftRadius: borderTopLeftRadius,
        // borderTopRightRadius: borderTopRightRadius,
        // borderEndEndRadius: borderEndEndRadius,
        // borderEndStartRadius: borderEndStartRadius,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      className={` text-white flex flex-row justify-center items-center`}
      onClick={loading || disabled ? () => null : onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
