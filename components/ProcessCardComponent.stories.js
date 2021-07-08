import ProcessCardComponent from "./ProcessCardComponent";
import React from 'react';

export default {
  component: ProcessCardComponent,
  title: 'Components/ProcessCardComponent',
};

const Template = (args) => <ProcessCardComponent {...args} />;

export const MediumCard = Template.bind({});
MediumCard.args = {
  mode: 'medium',
  coverPic: '/youngpeople.jpg', 
  title: 'collaborate team', 
  daysInQueue: 15,
  prevStationsPics: ['./src/images/p.jpg', '']
};    

export const SmallCard = Template.bind({});
SmallCard.args = {
  mode: 'small',
  coverPic: '/youngpeople.jpg', 
  title: 'collaborate team', 
  daysInQueue: 15,
  prevStationsPics: ['./src/images/p.jpg', '']
};
