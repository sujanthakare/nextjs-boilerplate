import React from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";

export interface IButtonProps extends ButtonProps {
  title: string;
}

const Button: React.FC<IButtonProps> = ({
  title,
  variant = "contained",
  color,
  ...rest
}) => {
  return (
    <MuiButton variant={variant} color={color} fullWidth {...rest}>
      {title}
    </MuiButton>
  );
};

export default Button;
