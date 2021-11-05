import React from 'react'
import CheckBox from '.'

const ExCheckBox = ({ ...args }: any) => {
  const [checked, setValueChecked] = React.useState(false)

  React.useEffect(() => {
    setValueChecked(args.checked)
  }, [args.checked])

  return (
    <>
      <CheckBox
        id='checkBox101'
        {...args}
        checked={checked}
        value={checked}
        onChange={(v: boolean) => setValueChecked(v)}
      />
      <CheckBox
        id='checkBox101'
        {...args}
        value
        checked
        disabled
        label='Disabled checkbox'
        onChange={(v: boolean) => setValueChecked(v)}
      />
    </>
  )
}

export default {
  component: ExCheckBox,
  title: 'Atoms/Checkbox/Checkbox',
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
      type: { name: 'string', required: false },
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
    seperator: {
      name: 'seperator',
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
    }
  }
} as any

const Template: any = (args: any) => <ExCheckBox {...args} />

export const checkbox = Template.bind({})

checkbox.args = {
  label: 'Wunderbar!',
  helpText: 'Blutwurst is the best',
  checked: true,
  value: true
}
