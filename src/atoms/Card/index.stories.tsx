import React from 'react'
import CardComp from '.'
import { commonPropsStoryArgs } from '../../utils/commonProps'
import CloseIcon from '../Icons/close'
import Button from '../Button'
import Typography from '../Typography'

const ExCard = ({ ...args }: any) => {
  return (
    <CardComp
      {...args}
      title='Sample Title'
      topAction={
        <Button style={{ padding: '0px' }} variant='link' PreIcon={CloseIcon} />
      }
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
    </CardComp>
  )
}

export default {
  component: ExCard,
  title: 'Atoms/Card',
  argTypes: {
    ...commonPropsStoryArgs,
    bordered: {
      name: 'bordered',
      defaultValue: false,
      default: false,
      control: { type: 'boolean' }
    },
    size: {
      name: 'size',
      defaultValue: 'medium',
      default: 'medium',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    width: {
      name: 'width',
      defaultValue: null,
      default: null,
      control: { type: 'number' }
    },
    image: {
      name: 'image',
      defaultValue:
        'https://images.unsplash.com/photo-1589043538298-fc25596d8349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300&q=80',
      default: null,
      control: { type: 'text' }
    }
  }
} as any

const Template: any = (args: any) => <ExCard {...args} />

export const Card = Template.bind({})
