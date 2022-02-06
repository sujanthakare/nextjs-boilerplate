import React from "react";
import { ThemeContextProvider } from "../src/react-ui/theme";

const PreviewWrapper: React.FC = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default PreviewWrapper;
