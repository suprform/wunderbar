import React from 'react'
import ChoiceList from '.'

const ExChoiceList = ({ ...args }: any) => {
  const [selected, setSelected] = React.useState(['Brezel'])
  const handleChange = React.useCallback((value) => setSelected(value), [])

  return (
    <ChoiceList
      title='Your favorite dish'
      choices={[
        { label: 'Wurst', value: 'Wurst', helpText: 'Authentic german' },
        { label: 'Rouladen', value: 'Rouladen', helpText: 'Authentic german' },
        { label: 'Brezel', value: 'Brezel', helpText: 'Authentic german' },
        {
          label: 'Pork Chops',
          value: 'Pork Chops',
          helpText: 'Authentic german'
        }
      ]}
      {...args}
      selected={selected}
      onChange={handleChange}
    />
  )
}

export default {
  component: ExChoiceList,
  title: 'Molecules/ChoiceList',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string' },
      defaultValue: 'Your favorite dish',
      default: 'Your favorite dish',
      control: {
        type: 'text'
      }
    },
    choices: {
      name: 'choices',
      defaultValue: [
        { label: 'Wurst', value: 'Wurst', helpText: 'Authentic german' },
        { label: 'Rouladen', value: 'Rouladen', helpText: 'Authentic german' },
        { label: 'Brezel', value: 'Brezel', helpText: 'Authentic german' },
        {
          label: 'Pork Chops',
          value: 'Pork Chops',
          helpText: 'Authentic german'
        }
      ],
      default: [],
      control: {
        type: 'array'
      }
    },
    selected: {
      name: 'selected',
      defaultValue: ['Brezel'],
      default: [],
      control: {
        type: 'array'
      }
    },
    className: {
      name: 'className',
      type: { name: 'string', required: false },
      defaultValue: 'className',
      default: 'className',
      control: {
        type: 'text'
      }
    },
    id: {
      name: 'id',
      type: { name: 'string', required: false },
      defaultValue: 'ID',
      default: 'ID',
      control: {
        type: 'text'
      }
    },
    name: {
      name: 'name',
      type: { name: 'string', required: false },
      defaultValue: 'Wunderbar!',
      default: 'name',
      control: {
        type: 'text'
      }
    },
    error: {
      name: 'error',
      type: { name: 'string', required: false },
      default: 'London bridge is down!',
      control: {
        type: 'text'
      }
    },
    allowMultiple: {
      name: 'allowMultiple',
      defaultValue: false,
      default: false,
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      default: false,
      control: {
        type: 'boolean'
      }
    },
    separator: {
      name: 'separator',
      defaultValue: false,
      default: false,
      control: {
        type: 'boolean'
      }
    }
  }
} as any

const Template: any = (args: any) => <ExChoiceList {...args} />

export const choiceList = Template.bind({})
