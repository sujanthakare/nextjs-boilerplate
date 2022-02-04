import React, { ButtonHTMLAttributes } from "react";
import MuiButton from "@mui/material/Button";

// import { baseButtonStyle, buildVariantStyle, Variant } from "./styles";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<IButtonProps> = ({ title }) => {
  return <MuiButton variant="contained">{title}</MuiButton>;
};

export default Button;
