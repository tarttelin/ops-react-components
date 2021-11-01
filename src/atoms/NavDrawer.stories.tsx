import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../main.css";

import NavDrawer from "./NavDrawer";
import NavItem from "./NavItem";

export default {
  title: "Nav Drawer",
  component: NavDrawer,
} as ComponentMeta<typeof NavDrawer>;

const Template: ComponentStory<typeof NavDrawer> = (args) => {
  return (
    <div className="root">
      <NavDrawer side={args.side} isOpen={args.isOpen}>
        <NavItem side={args.side} text="Home" />
      </NavDrawer>
    </div>
  );
};

export const DrawerMenu = Template.bind({});
DrawerMenu.args = {
  side: "left",
  isOpen: true,
};
