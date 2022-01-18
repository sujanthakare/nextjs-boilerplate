import React, { ButtonHTMLAttributes } from "react";
import { baseButtonStyle, buildVariantStyle, Variant } from "./styles";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: Variant;
}

const Button: React.FC<IButtonProps> = ({
  children,
  variant = "default",
  text,
  className,
  ...rest
}) => {
  const variantStyle = buildVariantStyle(variant);

  return (
    <button css={[baseButtonStyle, variantStyle, className]} {...rest}>
      {text}
      {children}
    </button>
  );
};

export default Button;
