import React, { useContext } from "react";
import { FormViewContext } from "@/flex-ui/contexts/form-view-context";
import ViewItem from "./view-items";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { css } from "@mui/material";

const FormView = () => {
  const { view } = useContext(FormViewContext);

  if (!view) {
    return null;
  }

  return (
    <Container maxWidth={view.maxWidth || "sm"} css={css(view.containerStyles)}>
      <form>
        <Grid container {...view.gridStyles}>
          {view.viewItems.map((viewItem) => (
            <Grid item key={viewItem.id}>
              <ViewItem data={viewItem} />
            </Grid>
          ))}
        </Grid>
      </form>
    </Container>
  );
};

export default FormView;
