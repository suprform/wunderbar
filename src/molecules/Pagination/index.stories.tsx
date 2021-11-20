import React from 'react'
import PageinatedComp from '.'
import { commonPropsStoryArgs } from '../../utils/commonProps'

const ExPagination = ({ ...args }: any) => {
  const [currentPage, setPage] = React.useState(1)

  return (
    <PageinatedComp
      {...args}
      currentPage={currentPage}
      onChange={(v) => {
        setPage(v)
        args.onChange(v)
      }}
    />
  )
}

export default {
  component: ExPagination,
  title: 'Molecules/Pagination',
  argTypes: {
    pages: {
      name: 'pages',
      defaultValue: 5,
      default: 5,
      control: { type: 'number' }
    },
    currentPage: {
      name: 'currentPage',
      defaultValue: 1,
      default: 1,
      control: { type: 'number' }
    },
    siblingCount: {
      name: 'siblingCount',
      defaultValue: 3,
      default: 3,
      control: { type: 'number' }
    },
    onChange: {
      name: 'onChange',
      action: 'selected'
    },
    ...commonPropsStoryArgs
  }
} as any

const Paginate: any = (args: any) => <ExPagination {...args} />

export const Pagination = Paginate.bind({})
