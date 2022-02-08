import React from "react";
import { useContext } from "react";
import { ScreenContext } from "@/flex-ui/contexts/screen-context";
import dynamic from "next/dynamic";
import Container from "@mui/material/Container";

const View = dynamic(() => import("@/flex-ui/components/view"));

const Screen = () => {
  const screenContext = useContext(ScreenContext);

  if (!screenContext.screen) {
    return null;
  }

  return (
    <Container {...screenContext.screen.containerStyles}>
      {screenContext.screen.views.map((view) => (
        <View key={view.id} view={view} />
      ))}
    </Container>
  );
};

export default Screen;
