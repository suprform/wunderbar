import React from 'react'
import TabsComp from '.'
import LightningIcon from '../../atoms/Icons/lightning'
import { commonPropsStoryArgs } from '../../utils/commonProps'

const demoTabs = [
  { name: 'Tab1', value: 'tab1', selected: true, icon: LightningIcon },
  { name: 'Tab2', value: 'tab2', selected: false, disabled: true },
  { name: 'Tab3', value: 'tab3', selected: false, error: true },
  { name: 'Tab4', value: 'tab4', selected: false, icon: LightningIcon },
  { name: 'Tab5', value: 'tab5', selected: false },
  { name: 'Tab6', value: 'tab6', selected: false }
]

const ExTabs = ({ ...args }: any) => {
  const [tabList, setTabList] = React.useState(demoTabs)

  React.useEffect(() => {
    setTabList(args.tabs)
  }, [args.tabs])

  const tabChange = (value: string) => {
    let tempTabs = [...tabList]
    tempTabs = tempTabs.map((t) => {
      if (t.value === value) {
        return { ...t, selected: true }
      } else {
        return { ...t, selected: false }
      }
    })
    setTabList(tempTabs)
  }

  return (
    <TabsComp
      {...args}
      tabs={tabList}
      onChange={(v, name) => {
        args.onChange(v, name)
        tabChange(v)
      }}
    />
  )
}

export default {
  component: ExTabs,
  title: 'Molecules/Tabs',
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'space',
      default: 'space',
      options: ['space', 'tabbed', 'line'],
      control: { type: 'radio' }
    },
    orientation: {
      name: 'orientation',
      defaultValue: 'horizontal',
      default: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' }
    },
    tabs: {
      name: 'tabs',
      defaultValue: demoTabs,
      default: demoTabs,
      type: { type: 'object', required: true }
    },
    onChange: {
      name: 'onChange',
      action: 'selected'
    },
    ...commonPropsStoryArgs
  }
} as any

const Template: any = (args: any) => <ExTabs {...args} />

export const Tabs = Template.bind({})

Tabs.args = {
  tabs: demoTabs
}
