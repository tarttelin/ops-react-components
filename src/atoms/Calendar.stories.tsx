import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../main.css';

import Calendar from './Calendar';

export default {
  title: 'Month view Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => {
  return (
  <div style={{width: "90vw", height: "90vh"}}>
    <Calendar date={args.date}/>
  </div>);
}

export const Options = Template.bind({});
Options.args = {
  date: undefined
};

