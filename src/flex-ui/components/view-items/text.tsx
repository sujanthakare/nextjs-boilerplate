import { IText } from "@/flex-ui/types";
import React from "react";

interface IProps {
  data: IText;
}

const Text: React.FC<IProps> = ({ data }) => {
  const { text, variant } = data;

  if (!text) {
    return null;
  }

  return <h1>{text}</h1>;
};

export default Text;
