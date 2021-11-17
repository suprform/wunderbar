/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/react'
import { grey } from '../../styles/colors'
import Global, { common } from '../../styles/global'
import ChevronRightIcon from '../../atoms/Icons/chevronRight'
import MenuIcon from '../../atoms/Icons/menu'
import body, { weight } from '../../styles/font'
// eslint-disable-next-line no-unused-vars
import { commonProps } from '../../utils/commonProps'

type breadcrumbsProps = {
  breadcrumbs: breadcrumbProps[]
  shorten?: number
  onChange?: (name: string, value?: string) => {}
}

type breadcrumbProps = {
  name: string
  value?: string
  disabled?: boolean
  error?: boolean
  icon?: React.FunctionComponent<any>
  intermideate?: boolean
}

const Breadcrumbs = ({
  breadcrumbs,
  id,
  className,
  style,
  shorten,
  onChange
}: breadcrumbsProps & commonProps) => {
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

      :nth-last-child(1) {
        cursor: text;
        :hover {
          text-decoration: none;
        }

        > a {
          color: ${grey[800]};
        }
      }
    }
  `

  const [list, setList] = React.useState(breadcrumbs)

  let collapsed: breadcrumbProps[] = []

  React.useEffect(() => {
    if (shorten && shorten > 4 && breadcrumbs.length > shorten) {
      breadcrumbs.forEach((b, i) => {
        if (i === 0 || i >= breadcrumbs.length - 2) {
          collapsed.push(b)
        }
      })

      collapsed = ArrInsert(collapsed, 1, {
        intermideate: true,
        name: 'intermideate'
      })

      setList(collapsed)
    } else {
      setList(breadcrumbs)
    }
  }, [breadcrumbs, shorten])

  return (
    <nav id={id} className={className} style={style} css={styles}>
      <Global />
      {list.map((b, i) =>
        !b.intermideate ? (
          <button
            onClick={() => onChange && !b.disabled && onChange(b.name, b.value)}
            key={i + 'breadcrumbs'}
            disabled={b.disabled}
          >
            {b.icon && <b.icon />}
            <a>{b.name}</a>
            {i < breadcrumbs.length - 1 && <ChevronRightIcon />}
          </button>
        ) : (
          <button
            onClick={() => setList(breadcrumbs)}
            key={i + 'breadcrumbsInter'}
          >
            <MenuIcon style={{ marginRight: '12px' }} />
            <ChevronRightIcon />
          </button>
        )
      )}
    </nav>
  )
}

export default Breadcrumbs

Breadcrumbs.defaultProps = {
  breadcrumbs: []
}

const ArrInsert = (arr: any, index: number, newItem: any) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index)
]
