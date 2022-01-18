import React from "react";
import { baseButtonStyle, buildVariantStyle } from "./styles";

const Button: React.FC = ({ children }) => {
  const variantStyle = buildVariantStyle("primary");

  return (
    <button css={[baseButtonStyle, variantStyle]} onClick={() => {}}>
      {children}
    </button>
  );
};

export default Button;
