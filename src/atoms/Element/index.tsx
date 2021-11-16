/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { SerializedStyles, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { common } from '../../styles/global'

export type ElementProps = {
  as: string
  css?: SerializedStyles
  style?: React.CSSProperties
  ref?: React.LegacyRef<HTMLButtonElement>
  component?: string
  ariaProps?: Object
  id?: string
  label?: string
  type?: string
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

const Element = (props: any) => {
  const Elm = styled[props.as]`
    ${common}
    box-sizing: border-box;
  `

  return <Elm data-component={props.component} {...props} />
}

export default Element
