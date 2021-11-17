import React from 'react'
import BreadcrumbsComp from '.'
import LightningIcon from '../../atoms/Icons/lightning'
import { commonPropsStoryArgs } from '../../utils/commonProps'

const demoBreadcrumbs = [
  { name: 'Home', value: 'home', icon: LightningIcon },
  { name: 'Link2', value: 'crumb2', disabled: true },
  { name: 'Link3', value: 'crumb3', error: true },
  { name: 'Link4', value: 'crumb4', icon: LightningIcon },
  { name: 'Link5', value: 'crumb5' },
  { name: 'Link6', value: 'crumb6' }
]

const Exbreadcrumbs = ({ ...args }: any) => {
  return <BreadcrumbsComp {...args} breadcrumbs={demoBreadcrumbs} />
}

export default {
  component: Exbreadcrumbs,
  title: 'Molecules/Breadcrumbs',
  argTypes: {
    shorten: {
      name: 'shorten',
      defaultValue: 8,
      default: 8,
      control: { type: 'number' }
    },
    breadcrumbs: {
      name: 'breadcrumbs',
      defaultValue: demoBreadcrumbs,
      default: demoBreadcrumbs,
      type: { type: 'object', required: true }
    },
    onChange: {
      action: 'changed'
    },
    ...commonPropsStoryArgs
  }
} as any

const Template: any = (args: any) => <Exbreadcrumbs {...args} />

export const Breadcrumbs = Template.bind({})

Breadcrumbs.args = {
  breadcrumbs: demoBreadcrumbs
}
