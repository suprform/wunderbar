import React from 'react'
import ButtonGroup from '.'
import Button from '../../atoms/Button'

export default {
  component: ButtonGroup,
  title: 'Molecules/ButtonGroup',
  argTypes: {
    label: {
      name: 'children',
      type: { required: true },
      defaultValue: [
        <Button color='primary' key='1'>
          Primary
        </Button>,
        <Button color='secondary' key='2'>
          Secondary
        </Button>,
        <Button color='white' key='3'>
          White
        </Button>,
        <Button color='success' key='4'>
          Success
        </Button>,
        <Button color='warning' key='5'>
          Warning
        </Button>,
        <Button color='error' key='6'>
          Error
        </Button>,
        <Button color='info' key='7'>
          Info
        </Button>
      ],
      default: [
        <Button color='primary' key='1'>
          Primary
        </Button>,
        <Button color='secondary' key='2'>
          Secondary
        </Button>,
        <Button color='white' key='3'>
          White
        </Button>,
        <Button color='success' key='4'>
          Success
        </Button>,
        <Button color='warning' key='5'>
          Warning
        </Button>,
        <Button color='error' key='6'>
          Error
        </Button>,
        <Button color='info' key='7'>
          Info
        </Button>
      ],
      control: {
        type: 'array'
      }
    }
  }
} as any

const Template: any = (args: any) => <ButtonGroup {...args} />

export const buttonGroup = Template.bind({})

buttonGroup.args = {
  children: [
    <Button color='primary' key='1'>
      Primary
    </Button>,
    <Button color='secondary' key='2'>
      Secondary
    </Button>,
    <Button color='white' key='3'>
      White
    </Button>,
    <Button color='success' key='4'>
      Success
    </Button>,
    <Button color='warning' key='5'>
      Warning
    </Button>,
    <Button color='error' key='6'>
      Error
    </Button>,
    <Button color='info' key='7'>
      Info
    </Button>
  ]
}
