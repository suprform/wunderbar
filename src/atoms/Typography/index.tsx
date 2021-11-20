/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { css, jsx } from '@emotion/react'
import baseColor from '../../styles/colors'
import {
  display,
  headingBig,
  heading,
  subHeadingBig,
  subHeading,
  bodyBig,
  body,
  caption,
  helpText,
  weight as fontWeight
} from '../../styles/font'
import { common } from '../../styles/global'
// eslint-disable-next-line no-unused-vars
import { commonProps } from '../../utils/commonProps'

const Typography = ({
  id,
  className,
  style,
  children,
  type,
  color,
  weight
}: {
  type:
    | 'display'
    | 'headingBig'
    | 'heading'
    | 'subHeadingBig'
    | 'subHeading'
    | 'bodyBig'
    | 'body'
    | 'caption'
    | 'helpText'
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'white'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'orange'
    | 'purple'
    | 'lightBlue'
  weight?: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'book'
} & commonProps) => {
  let styles = css``
  let ElmType: any = 'h1'

  switch (type) {
    case 'display':
      ElmType = 'h1'
      styles = display
      break
    case 'headingBig':
      ElmType = 'h1'
      styles = headingBig
      break
    case 'heading':
      ElmType = 'h2'
      styles = heading
      break
    case 'subHeadingBig':
      ElmType = 'h3'
      styles = subHeadingBig
      break
    case 'subHeading':
      ElmType = 'h4'
      styles = subHeading
      break
    case 'bodyBig':
      ElmType = 'p'
      styles = bodyBig
      break
    case 'body':
      ElmType = 'p'
      styles = body
      break
    case 'caption':
      ElmType = 'span'
      styles = caption
      break
    case 'helpText':
      ElmType = 'span'
      styles = helpText
      break
    default:
      ElmType = 'p'
      styles = body
  }

  styles = css`
    ${common}
    ${styles}
    ${color &&
    css`
      color: ${baseColor[color]};
    `}

    ${weight &&
    css`
      font-weight: ${fontWeight[weight]};
    `}

    > b {
      font-weight: ${fontWeight.bold};
      ${(weight === 'book' || weight === 'bold') &&
      css`
        font-weight: ${fontWeight.book};
      `}
    }
  `

  return (
    <ElmType id={id} className={className} style={style} css={styles}>
      {' '}
      {children}{' '}
    </ElmType>
  )
}

export default Typography
