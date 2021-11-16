/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/react'
import { grey } from '../../styles/colors'
import Global, { common } from '../../styles/global'
import ChevronRightIcon from '../../atoms/Icons/chevronRight'
import body, { weight } from '../../styles/font'

type breadcrumbsProps = {
  breadcrumbs: breadcrumbProps[]
  id?: string
  className?: string
  style?: React.CSSProperties
  onChange?: (value: string, name: string) => {}
}

type breadcrumbProps = {
  name: string
  value: string
  disabled?: boolean
  error?: boolean
  icon?: React.FunctionComponent<any>
}

const Breadcrumbs = ({
  breadcrumbs,
  id,
  className,
  style,
  onChange
}: breadcrumbsProps) => {
  const styles = css`
    ${common}
    display: flex;
    display: flex;
    align-items: center;

    button {
      ${body}
      background: transparent;
      outline: none;
      border: none;
      padding: 0px;
      color: ${grey[600]};
      font-weight: ${weight.semiBold};
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-left: 12px;

      :hover {
        text-decoration: underline;

        a {
          color: ${grey[700]};
        }
      }

      &[disabled] {
        cursor: not-allowed;
        text-decoration: none;

        a {
          color: ${grey[500]};
        }
      }

      > a {
        margin-right: 12px;
        margin-left: 8px;
      }

      > svg:nth-last-child(1) * {
        fill: ${grey[800]};
      }

      :nth-child(1) {
        margin-left: 0px;
      }

      :nth-last-child(1) > a {
        color: ${grey[800]};
      }
    }
  `

  return (
    <nav id={id} className={className} style={style} css={styles}>
      <Global />
      {breadcrumbs.map((b, i) => (
        <button
          onClick={() => onChange && !b.disabled && onChange(b.value, b.name)}
          key={i + 'breadcrumbs'}
          disabled={b.disabled}
        >
          {b.icon && <b.icon />}
          <a>{b.name}</a>
          {i < breadcrumbs.length - 1 && <ChevronRightIcon />}
        </button>
      ))}
    </nav>
  )
}

export default Breadcrumbs

Breadcrumbs.defaultProps = {
  breadcrumbs: []
}
