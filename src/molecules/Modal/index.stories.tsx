import React from 'react'
import ModalComp from '.'
import { commonPropsStoryArgs } from '../../utils/commonProps'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

const ExModal = ({ ...args }: any) => {
  return (
    <ModalComp
      {...args}
      title='Sample Title'
      footer={
        <div style={{ display: 'inline-flex', marginLeft: 'auto' }}>
          <Button variant='link'>Action One</Button>
          <Button>Action Two</Button>
        </div>
      }
    >
      <div style={{ textAlign: 'center' }}>
        <Typography type='heading'>Hello World</Typography>
        <Typography type='body'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          dolorum fuga? Saepe possimus distinctio quidem amet ut officiis at
          magnam corporis iure doloribus nostrum accusantium id, blanditiis
          dignissimos ullam quibusdam.
        </Typography>
      </div>
    </ModalComp>
  )
}

export default {
  component: ExModal,
  title: 'Molecules/Modal',
  argTypes: {
    ...commonPropsStoryArgs,
    size: {
      name: 'size',
      defaultValue: 'medium',
      default: 'medium',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    visible: {
      name: 'visible',
      defaultValue: true,
      default: true,
      control: { type: 'boolean' }
    },
    closable: {
      name: 'closable',
      defaultValue: true,
      default: true,
      control: { type: 'boolean' }
    },
    keyboardEscape: {
      name: 'keyboardEscape',
      defaultValue: true,
      default: true,
      control: { type: 'boolean' }
    },
    zIndex: {
      name: 'zIndex',
      defaultValue: 1000,
      default: 1000,
      control: { type: 'number' }
    },
    width: {
      name: 'width',
      defaultValue: null,
      default: null,
      control: { type: 'number' }
    },
    image: {
      name: 'image',
      defaultValue: null,
      default: null,
      control: { type: 'text' }
    },
    onClose: { action: 'closed' }
  }
} as any

const Template: any = (args: any) => <ExModal {...args} />

export const Modal = Template.bind({})
