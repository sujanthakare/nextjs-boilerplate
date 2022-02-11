import { IButton } from "@/flex-ui/types";
import MuiButton from "@/react-ui/button";
import { useRouter } from "next/router";

interface IProps {
  data: IButton;
}

const Button = ({ data }: IProps) => {
  const { text, href } = data;

  const router = useRouter();

  return (
    <MuiButton
      type="submit"
      href={href}
      title={text}
      onClick={(e) => {
        e.preventDefault();
        if (data.action) {
          router.push(data.action.location);
        }
      }}
    />
  );
};

export default Button;
