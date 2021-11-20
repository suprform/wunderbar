import React from 'react'

const ChevronLeftIcon = (props: any) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    style={{
      transform: 'rotate(180deg)'
    }}
  >
    <path
      d='M8.59009 7.41L13.1701 12L8.59009 16.59L10.0001 18L16.0001 12L10.0001 6L8.59009 7.41Z'
      fill='#4A5568'
    />
  </svg>
)

export default ChevronLeftIcon
