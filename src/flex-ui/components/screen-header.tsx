import React from "react";
import { Box, Container, Icon, Typography, useTheme } from "@mui/material";
import { boxShadows } from "@/react-ui/theme/effects";
import { IScreen } from "../types";
import View from "./view";

interface IProps {
  data?: IScreen["header"];
}

const ScreenHeader = ({ data }: IProps) => {
  const { palette } = useTheme();

  return (
    <Container
      css={{
        height: 68,
        boxShadow: boxShadows.depth4,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box css={{ flex: 3 }}>
        <View view={data?.leftArea} />
      </Box>

      <Box css={{ flex: 2, justifyContent: "center", display: "flex" }}>
        <Typography
          variant="h5"
          component="header"
          fontWeight={700}
          color={palette.primary.main}
        >
          {data?.title}
        </Typography>
      </Box>

      <Box css={{ flex: 3 }}>
        <View view={data?.rightArea} />
      </Box>
    </Container>
  );
};

export default ScreenHeader;
