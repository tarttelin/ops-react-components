import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../main.css";

import Header from "./Header";

export default {
  title: "Header with nav",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  const [left, setLeft] = React.useState(args.toggleMainMenu);
  const [user, setUser] = React.useState(args.toggleUserMenu);
  return (
    <>
      <Header
        toggleMainMenu={left}
        setToggleMainMenu={setLeft}
        toggleUserMenu={user}
        setToggleUserMenu={setUser}
      ></Header>
      <span>Left menu: {left ? "On" : "Off"}</span>
      <br />
      <span>User menu: {user ? "On" : "Off"}</span>
    </>
  );
};

export const Toggles = Template.bind({});
Toggles.args = {
  toggleMainMenu: true,
  toggleUserMenu: false,
};
