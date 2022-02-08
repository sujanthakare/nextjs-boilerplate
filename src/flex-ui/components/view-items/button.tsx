import { IButton } from "@/flex-ui/types";
import MuiButton from "@/react-ui/button";

interface IProps {
  data: IButton;
}

const Button = ({ data }: IProps) => {
  const { text, href, color } = data;

  return <MuiButton href={href} title={text} color={color as any} />;
};

export default Button;
