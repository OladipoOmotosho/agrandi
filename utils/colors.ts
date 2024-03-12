export type Colors<T> = {
  white: T;
  black: T;
  gray2: T;
  gray3: T;
  gray4: T;
  gray33: T;
  black2: T;
  gray7: T;
  blue: T;
  deepBlue: T;
  green: T;
  green2: T;
  green3: T;
  green4: T;
  yellow: T;
  offWhite: T;
  red: T;
  lightgray: T;
  grayBlack: T;
};

export const colors: Colors<string> = {
  white: "#ffffff",
  black: "#000000",
  gray3: "rgba(130, 130, 130, 1)",
  gray4: "rgba(189, 189, 189, 1)",
  grayBlack: "rgba(0, 0, 0, 0.5)",
  blue: "#635BFF",
  deepBlue: "#0A2540",
  green: "#065143",
  green2: "#04362D",
  green3: "#021B16",
  green4: "#27AE60",
  yellow: "#F3C31B",
  offWhite: "#F5F5F7",
  lightgray: "#F5F5F9",
  gray2: "#666666",
  gray33: "#333333",
  black2: "#1C1C1C",
  gray7: "#969696",
  red: "#E43535",
};
