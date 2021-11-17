import React from 'react'
import Typographycomp from '.'
import { commonPropsStoryArgs } from '../../utils/commonProps'

const ExTypography = ({ ...args }: any) => {
  return (
    <div style={{ width: '1000px' }}>
      <Typographycomp type='subHeadingBig'>Demo</Typographycomp>
      <br />
      <Typographycomp {...args}>
        The quick brown fox jumps over the lazy dog.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp type='subHeadingBig'>Complete Set</Typographycomp>
      <br />
      <Typographycomp {...args} type='display'>
        The quick brown fox jumps over the <i>lazy dog</i>.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp {...args} type='headingBig'>
        The quick brown fox jumps over the <i>lazy dog</i>.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp {...args} type='heading'>
        The quick brown fox jumps over the <i>lazy dog</i>.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp {...args} type='subHeadingBig'>
        The quick brown fox jumps over the <i>lazy dog</i>.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp {...args} type='subHeading'>
        The quick brown fox jumps over the <i>lazy dog</i>.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp type='bodyBig'>
        <b>Lorem Ipsum </b>is simply dummy text of the printing and typesetting
        industry. <i>Lorem Ipsum</i> has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp type='body'>
        <b>Lorem Ipsum </b>is simply dummy text of the printing and typesetting
        industry. <i>Lorem Ipsum</i> has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp {...args} type='caption'>
        The quick brown fox <b>jumps</b> over the <i>lazy dog</i>.
      </Typographycomp>
      <br />
      <hr />
      <br />
      <Typographycomp {...args} type='helpText'>
        The quick brown fox <b>jumps</b> over the <i>lazy dog</i>.
      </Typographycomp>
    </div>
  )
}

export default {
  component: ExTypography,
  title: 'Atoms/Typography',
  argTypes: {
    children: {
      name: 'children',
      defaultValue: 'The quick brown fox jumps over the lazy dog.',
      default: 'The quick brown fox jumps over the lazy dog.',
      control: { type: 'text' }
    },
    type: {
      name: 'type',
      defaultValue: 'body',
      default: 'body',
      options: [
        'display',
        'headingBig',
        'heading',
        'subHeadingBig',
        'subHeading',
        'bodyBig',
        'body',
        'caption',
        'helpText'
      ],
      control: { type: 'select' }
    },
    color: {
      name: 'color',
      defaultValue: 'primary',
      default: 'primary',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'disabled',
        'white',
        'success',
        'error',
        'warning',
        'info',
        'orange',
        'purple',
        'lightBlue'
      ],
      control: { type: 'select' }
    },
    weight: {
      name: 'weight',
      defaultValue: 'semiBold',
      default: 'semiBold',
      options: ['light', 'regular', 'medium', 'semiBold', 'bold', 'book'],
      control: { type: 'select' }
    },
    ...commonPropsStoryArgs
  }
} as any

const Template: any = (args: any) => <ExTypography {...args} />

export const Typography = Template.bind({})

Typography.args = {
  type: 'body'
}
