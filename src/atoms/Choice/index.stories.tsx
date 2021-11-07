import React from 'react'
import Choice from '.'

const ExChoice = ({ ...args }: any) => {
  const [checked, setValueChecked] = React.useState(false)

  React.useEffect(() => {
    setValueChecked(args.checked)
  }, [args.checked])

  return (
    <>
      <Choice
        value='checkBox101'
        {...args}
        checked={checked}
        onChange={(v, l, n) => {
          setValueChecked(v)
          args.onChange(v, l, n)
        }}
      />
      <Choice
        value='checkBox102'
        {...args}
        checked
        disabled
        label='Disabled checkbox'
        onChange={(v) => setValueChecked(v)}
      />
    </>
  )
}

export default {
  component: ExChoice,
  title: 'Atoms/Choice',
  argTypes: {
    id: {
      name: 'id',
      type: { name: 'string', required: true },
      defaultValue: 'sampleID',
      default: 'sampleID',
      control: {
        type: 'text'
      }
    },
    type: {
      name: 'type',
      type: { name: 'string', required: true },
      defaultValue: 'checkbox',
      default: 'checkbox',
      options: ['checkbox', 'radio'],
      control: { type: 'radio' }
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
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Wunderbar!',
      default: null,
      control: {
        type: 'text'
      }
    },
    value: {
      name: 'value',
      type: { name: 'string', required: true },
      defaultValue: 'Wunderbar!',
      default: 'value',
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
    helpText: {
      name: 'helpText',
      type: { name: 'string', required: false },
      defaultValue: 'Blutwurst is the best',
      default: null,
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
    checked: {
      name: 'checked',
      type: { required: true },
      defaultValue: true,
      default: true,
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
    labelHidden: {
      name: 'labelHidden',
      defaultValue: false,
      default: false,
      control: {
        type: 'boolean'
      }
    },
    isIntermediate: {
      name: 'isIntermediate',
      defaultValue: false,
      default: false,
      control: {
        type: 'boolean'
      }
    },
    style: {
      name: 'style',
      defaultValue: {},
      default: {},
      control: { type: 'object' }
    },
    onChange: {
      name: 'onChange',
      action: 'clicked'
    },
    onFocus: {
      name: 'onFocus',
      action: 'focused'
    },
    onBlur: {
      name: 'onBlur',
      action: 'blurred'
    }
  }
} as any

const Template: any = (args: any) => <ExChoice {...args} />

export const choice = Template.bind({})

choice.args = {
  label: 'Wunderbar!',
  helpText: 'Blutwurst is the best',
  checked: true,
  value: true
}
