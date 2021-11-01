import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavItem from './NavItem';

export default {
  title: 'Nav Item',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => {
  return (<span><NavItem text={args.text} side={args.side}/></span>);
}

export const NavItemButton = Template.bind({});
NavItemButton.args = {
  text: "save",
  side: "left"
};
