import React from "react";
import { ComponentMeta } from "@storybook/react";

import Grid from "./grid";

export default {
  title: "Example/Grid",
  component: Grid,
  argTypes: {
    text: { type: "string" },
  },
} as ComponentMeta<typeof Grid>;

export const Variants = () => {
  return (
    <div>
      <Grid />
    </div>
  );
};
