import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputField from "./InputField";
import "../main.css";

export default {
  title: "Input field",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => {
  return (
    <div>
      <div>
        <InputField id={args.id} type={args.type} value="some value" />
      </div>
      <div>
        <InputField id={args.id} type={args.type} value="some value" />
      </div>
    </div>
  );
};

export const TextInputField = Template.bind({});
TextInputField.args = {
  id: "save",
  type: "text",
};
