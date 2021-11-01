import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Primary Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { label, ...props } = args;
  return <Button {...props}>{label}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
