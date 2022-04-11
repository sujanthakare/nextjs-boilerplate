import React, { useContext } from "react";
import { ViewContext } from "@/flex-ui/contexts/view-context";
import ViewItem from "./view-items";
import { Box, Grid } from "@mui/material";

const FluentView = () => {
  const { view } = useContext(ViewContext);

  if (!view) {
    return null;
  }

  return (
    <Grid container flexDirection="column" maxWidth="100%" rowSpacing={2}>
      {view.viewItems.map((viewItem) => (
        <Grid item key={viewItem.id} sm={viewItem.flexSize}>
          <ViewItem data={viewItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FluentView;
