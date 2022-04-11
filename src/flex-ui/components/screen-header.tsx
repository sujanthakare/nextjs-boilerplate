import React, { useContext } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { boxShadows } from "@/react-ui/theme/effects";
import { ScreenContext } from "../contexts/screen-context";
import ViewItemComponent from "./view-items/view-item-component";

const ScreenHeader = () => {
  const { screen } = useContext(ScreenContext);

  if (!screen?.header) {
    return null;
  }

  return (
    <Container
      css={{
        height: 68,
        boxShadow: boxShadows.depth4,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        flex={3}
        flexDirection="row"
        justifyContent="flex-start"
        spacing={1}
      >
        {screen?.header?.leftViewItems?.map((itemData) => {
          return (
            <Grid key={itemData.id} item>
              <ViewItemComponent data={itemData} />
            </Grid>
          );
        })}
      </Grid>

      <Box css={{ flex: 2, justifyContent: "center", display: "flex" }}>
        <Typography variant="h5" component="header" fontWeight={700}>
          {screen?.header?.title}
        </Typography>
      </Box>

      <Grid
        container
        flex={3}
        flexDirection="row"
        justifyContent="flex-end"
        spacing={1}
      >
        {screen?.header?.rightViewItems?.map((itemData) => {
          return (
            <Grid key={itemData.id} item>
              <ViewItemComponent data={itemData} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ScreenHeader;
