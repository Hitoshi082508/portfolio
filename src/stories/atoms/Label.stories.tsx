import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Label } from '../../components/atoms/Label'

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const LoggedIn = Template.bind({})
