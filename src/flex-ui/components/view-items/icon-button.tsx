import { IButton, IIconButton } from "@/flex-ui/types";
import { css, Icon, useTheme } from "@mui/material";
import MuiIconButton from "@mui/material/IconButton";

import { useRouter } from "next/router";

interface IProps {
  data: IIconButton;
}

const IconButton = ({ data }: IProps) => {
  const router = useRouter();
  const { palette } = useTheme();

  return (
    <MuiIconButton
      onClick={(e) => {
        e.preventDefault();

        if (data.action) {
          router.push(data.action.location);
        }
      }}
    >
      <Icon
        className={data.name}
        fontSize="medium"
        css={css({ color: data.color || palette.grey[900] })}
      />
    </MuiIconButton>
  );
};

export default IconButton;
