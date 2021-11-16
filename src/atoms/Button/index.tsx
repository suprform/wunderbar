/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx, keyframes } from '@emotion/react'
import Global, { common } from '../../styles/global'
import baseColor, { grey, green, red, blue, yellow } from '../../styles/colors'
import { weight } from '../../styles/font'
import elevation from '../../styles/elevations'
import LoadingIcon from '../Icons/loading'

export type ButtonProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'white'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
  variant?: 'filled' | 'outline' | 'link'
  size?: 'small' | 'regular' | 'big'
  disabled?: boolean
  loading?: boolean
  rounded?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  children?: React.ReactNode
  PreIcon?: React.FunctionComponent<any>
  PostIcon?: React.FunctionComponent<any>
  style?: React.CSSProperties
  width?: number
  height?: number
  id?: string
  label?: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  href?: string
  ref?: React.LegacyRef<HTMLButtonElement>
}

const Button = ({
  color,
  variant,
  width,
  height,
  loading,
  disabled,
  onClick,
  children,
  id,
  label,
  type,
  ref,
  className,
  style,
  href,
  PreIcon,
  PostIcon,
  rounded,
  size
}: ButtonProps) => {
  const renderChildren = () => {
    if (label) return label
    return children
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled || !onClick) return

    if (href) {
      const o: any = window.open
      o(href, '_blank').focus()
    }

    onClick(event)
  }

  const base = css`
    position: relative;
    width: ${width ? `${width}px` : 'auto'};
    height: ${height ? `${height}px` : 'auto'};
    text-align: center;
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    background-color: ${baseColor.primary};
    color: ${baseColor.white};
    font-size: 18px;
    border-color: ${grey[400]};
    font-weight: ${weight.semiBold};

    :hover {
      background-color: ${grey[800]};
      ${elevation[200]}
    }
    :active {
      background-color: ${grey[1000]};
      box-shadow: 0 0 0 2px ${baseColor.disabled};
    }

    :focus {
      box-shadow: 0 0 0 2px ${baseColor.disabled};
    }
  `

  const secondary = css`
    background-color: ${baseColor.secondary};
    :hover {
      background-color: ${grey[600]};
      ${elevation[200]}
    }
    :active {
      background-color: ${green[900]};
    }
  `

  const white = css`
    background-color: ${grey[100]};
    color: ${baseColor.primary};

    span svg * {
      fill: ${baseColor.primary};
    }

    :hover {
      background-color: ${grey[300]};
      ${elevation[200]}
    }
    :active {
      background-color: ${grey[400]};
    }
  `

  const success = css`
    background-color: ${baseColor.success};
    :hover {
      background-color: ${green[500]};
      ${elevation[200]}
    }
    :active {
      background-color: ${green[700]};
    }
  `

  const error = css`
    background-color: ${baseColor.error};
    :hover {
      background-color: ${red[500]};
      ${elevation[200]}
    }
    :active {
      background-color: ${red[700]};
    }
  `

  const warning = css`
    background-color: ${baseColor.warning};
    :hover {
      background-color: ${yellow[500]};
      ${elevation[200]}
    }
    :active {
      background-color: ${yellow[700]};
    }
  `

  const info = css`
    background-color: ${baseColor.info};
    :hover {
      background-color: ${blue[500]};
      ${elevation[200]}
    }
    :active {
      background-color: ${blue[700]};
    }
  `

  const disabledStyle = css`
    cursor: not-allowed;
    background-color: ${grey[400]};
    :hover {
      box-shadow: none;
      background-color: ${grey[400]};
    }
  `

  const colorStlyes = disabled
    ? disabledStyle
    : color === 'white'
    ? white
    : color === 'secondary'
    ? secondary
    : color === 'success'
    ? success
    : color === 'error'
    ? error
    : color === 'warning'
    ? warning
    : color === 'info'
    ? info
    : css``

  const linkVariant = css`
    ${white};
    text-decoration: underline;
    :hover {
      box-shadow: none;
      color: ${baseColor.secondary};
    }
  `

  const outlineColor =
    color === 'success'
      ? green[600]
      : color === 'error'
      ? red[600]
      : color === 'warning'
      ? yellow[600]
      : color === 'info'
      ? blue[600]
      : grey[600]

  const outlineHoverColor =
    color === 'success'
      ? green[100]
      : color === 'error'
      ? red[100]
      : color === 'warning'
      ? yellow[100]
      : color === 'info'
      ? blue[100]
      : grey[300]

  const outlineActiveColor =
    color === 'success'
      ? green[200]
      : color === 'error'
      ? red[200]
      : color === 'warning'
      ? yellow[200]
      : color === 'info'
      ? blue[200]
      : grey[400]

  const outlineVariant = css`
    ${disabled ? disabledStyle : white};
    color: ${outlineColor};
    border: 2px solid ${outlineColor};
    :hover {
      background-color: ${outlineHoverColor};
    }
    :active {
      background-color: ${outlineActiveColor};
    }
  `

  const variationStyles =
    href || variant === 'link'
      ? linkVariant
      : variant === 'outline'
      ? outlineVariant
      : css``

  const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

  const spinner = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inherit;
    svg {
      animation: ${spin} 0.75s linear infinite;
    }
  `

  const loadingStyle = css`
    color: transparent;
    cursor: not-allowed;
    :hover {
      box-shadow: none;
    }
  `

  const sizeStyles =
    size === 'small'
      ? css`
          padding: 6px 12px;
          font-size: 16px;

          svg {
            width: 18px;
            height: auto;
          }
        `
      : size === 'big'
      ? css`
          padding: 15px 30px;
          font-size: 22px;

          svg {
            width: 30px;
            height: auto;
          }
        `
      : css`
          svg {
            width: 21px;
            height: auto;
          }
        `

  const composedStyles = css`
    ${common}
    ${base};
    ${colorStlyes};
    ${variationStyles};
    ${sizeStyles}
    ${rounded
      ? css`
          border-radius: 40px;
        `
      : css``}
    ${loading ? loadingStyle : css``}
  `

  const icon = css`
    display: inline-flex;
    opacity: ${loading ? 0 : 1};
    padding: 4px;
    svg * {
      margin: auto;
      fill: ${variant === 'outline' ? outlineColor : outlineHoverColor};
    }
  `

  const text = css`
    font-weight: inherit;
    font-size: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: inherit;
  `

  return (
    <button
      ref={ref}
      type={type}
      id={id}
      className={className}
      onClick={handleButtonClick}
      css={composedStyles}
      style={style}
      disabled={disabled || loading}
      data-color={color}
      data-variant={variant}
    >
      <Global />
      {PreIcon && (
        <span
          style={{
            marginRight: !children && !label && !PostIcon ? '0px' : '8px'
          }}
          css={icon}
        >
          <PreIcon />
        </span>
      )}
      <span css={text}>{renderChildren()}</span>
      {loading && (
        <span css={spinner}>
          <LoadingIcon />
        </span>
      )}
      {PostIcon && (
        <span
          style={{
            marginLeft: !children && !label && !PreIcon ? '0px' : '8px'
          }}
          css={icon}
        >
          <PostIcon />
        </span>
      )}
    </button>
  )
}

export default Button

Button.defaultProps = {
  color: 'primary',
  variant: 'filled',
  size: 'regular',
  loading: false,
  onClick: () => {},
  type: 'button'
}
