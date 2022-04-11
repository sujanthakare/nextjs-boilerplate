import React from "react";
import { useContext } from "react";
import { ScreenContext } from "@/flex-ui/contexts/screen-context";
import dynamic from "next/dynamic";
import ScreenHeader from "./screen-header";
import { Box } from "@mui/material";

const View = dynamic(() => import("@/flex-ui/components/view"));

const Screen = () => {
  const { screen } = useContext(ScreenContext);

  if (!screen) {
    return null;
  }

  return (
    <>
      <ScreenHeader />
      <Box sx={{ marginTop: 2 }}>
        <View view={screen.view} />
      </Box>
    </>
  );
};

export default Screen;
