import React, { ButtonHTMLAttributes } from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
  href?: ButtonProps["href"];
}

const Button: React.FC<IButtonProps> = ({
  title,
  variant = "contained",
  color,
  href,
}) => {
  return (
    <MuiButton variant={variant} color={color} href={href}>
      {title}
    </MuiButton>
  );
};

export default Button;
