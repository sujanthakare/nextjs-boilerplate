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
      <Button title="Primary" />
      <Button title="Text" variant="text" />
      <Button title="Outlined" variant="outlined" />
      <Button title="Error" color="error" />
      <Button title="Success" color="success" />
      <Button title="Info" color="info" />
      <Button title="Warning" color="warning" />
    </div>
  );
};
