import { IRow } from "@/flex-ui/types";
import { Grid } from "@mui/material";
import React from "react";
import ViewItemComponent from "./view-item-component";

interface IProps {
  data: IRow;
}

const Row = ({ data }: IProps) => {
  return (
    <Grid container columnGap={2} flexDirection="row">
      {[...data.items].map((itemData, index) => {
        return (
          <Grid item key={itemData.id + index} xs>
            <ViewItemComponent data={itemData} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Row;
