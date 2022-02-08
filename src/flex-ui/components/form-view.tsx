import React, { useContext } from "react";
import { FormViewContext } from "@/flex-ui/contexts/form-view-context";
import ViewItem from "./view-items";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const FormView = () => {
  const formViewContext = useContext(FormViewContext);

  if (!formViewContext.view) {
    return null;
  }

  return (
    <Container {...formViewContext.view.containerStyles}>
      <form>
        <Grid container {...formViewContext.view.gridStyles}>
          {formViewContext.view.viewItems.map((viewItem) => (
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
