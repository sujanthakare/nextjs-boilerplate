import React from "react";
import { ComponentMeta } from "@storybook/react";

import Button from "./button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    text: { type: "string" },
  },
} as ComponentMeta<typeof Button>;

export const Variants = () => {
  return (
    <div
      css={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        "> button": {
          margin: 10,
        },
      }}
    >
      <Button text="Standard" />

      <Button text="Primary" variant="primary" />
    </div>
  );
};
