import { ITextField } from "@/flex-ui/types";
import MuiTextField from "@mui/material/TextField";

interface IProps {
  data: ITextField;
}

const TextField = ({ data }: IProps) => {
  const { name, placeholder, label, inputType = "text" } = data;

  return (
    <MuiTextField
      name={name}
      placeholder={placeholder}
      label={label}
      fullWidth
      type={inputType}
    />
  );
};

export default TextField;
