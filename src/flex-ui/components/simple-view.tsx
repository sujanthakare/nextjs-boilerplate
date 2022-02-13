import React, { useContext } from "react";
import { SimpleViewContext } from "@/flex-ui/contexts/simple-view-context";
import ViewItem from "./view-items";
import { Grid } from "@mui/material";

const SimpleView = () => {
  const { view } = useContext(SimpleViewContext);

  if (!view) {
    return null;
  }

  return (
    <Grid container {...view.gridStyles}>
      {view.viewItems.map((viewItem) => (
        <Grid item key={viewItem.id}>
          <ViewItem data={viewItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SimpleView;
