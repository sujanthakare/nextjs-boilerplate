import React from "react";
import { ThemeContextProvider } from "../src/react-ui/theme/themeContext";

const PreviewWrapper: React.FC = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default PreviewWrapper;
