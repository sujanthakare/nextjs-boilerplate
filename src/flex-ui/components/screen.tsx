import React from "react";
import { useContext } from "react";
import { ScreenContext } from "@/flex-ui/contexts/screen-context";
import dynamic from "next/dynamic";
import Container from "@mui/material/Container";
import { css, Grid, Typography } from "@mui/material";
import ScreenHeader from "./screen-header";

const View = dynamic(() => import("@/flex-ui/components/view"));

const Screen = () => {
  const { screen } = useContext(ScreenContext);

  if (!screen) {
    return null;
  }

  return (
    <>
      <ScreenHeader data={screen.header} />
      <Container
        maxWidth={screen.maxWidth}
        disableGutters={!screen.enableGutters}
        css={css(screen.containerStyles)}
      >
        <Grid container {...screen.gridStyles}>
          {screen.views.map((view) => (
            <View key={view.id} view={view} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Screen;
