/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/react'
import { Button } from '../..'
import { grey, red } from '../../styles/colors'

type tabsProps = {
  tabs: TabProps[]
  type: 'space' | 'tabbed'
  orientation?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  id?: string
  className?: string
  onChange?: (value: string, name: string) => {}
}

type TabProps = {
  name: string
  value: string
  selected?: string
  disabled?: boolean
  error?: boolean
  icon?: React.FunctionComponent<any>
}

const Tabs = ({
  tabs,
  type,
  className,
  orientation,
  id,
  style,
  onChange
}: tabsProps) => {
  const styles = css`
    display: flex;
    padding: 8px;
    border-radius: 16px;
    overflow: auto;

    > button {
      background: ${grey[300]};
      color: ${grey[900]};
      padding: 12px 32px;
      margin-right: 16px;
      border-radius: 11px;
      flex: 1;

      :hover,
      :active {
        background: ${grey[400]};
        box-shadow: none;
      }

      &[disabled] {
        background: ${grey[200]};
        color: ${grey[500]};
        box-shadow: none !important;
      }

      &[data-color='primary'] {
        background: ${grey[800]};
        color: ${grey[100]};
      }

      &[data-color='error'] {
        background: ${red[200]};
        color: ${red[600]};
      }

      &:nth-last-child(1) {
        margin-right: 0px;
      }
    }

    ${type === 'tabbed' &&
    css`
      background: ${grey[300]};

      > button {
        margin-right: 2px;

        &[disabled] {
          background: ${grey[300]};
          color: ${grey[500]};
        }

        :hover,
        :active {
          background: ${grey[300]};
          box-shadow: 0 0 0 2px ${grey[400]};
          z-index: 2;
        }

        &[data-color='primary'] {
          background: ${grey[800]};
          color: ${grey[100]};
        }
      }
    `}

    ${orientation === 'vertical' &&
    css`
      flex-flow: column;
      width: fit-content;

      > button {
        margin-right: 0px;
        margin-bottom: 16px;

        &:nth-last-child(1) {
          margin-bottom: 0px;
        }
      }

      ${type === 'tabbed' &&
      css`
        > button {
          margin: 0px;
          margin-bottom: 2px;
        }
      `}
    `}
  `

  return (
    <nav css={styles} id={id} className={className} style={style}>
      {tabs.map((t, i) => (
        <Button
          color={t.selected ? 'primary' : t.error ? 'error' : 'white'}
          key={i + type + 'tabs'}
          onClick={() => onChange && onChange(t.value, t.name)}
          data-selected={t.selected}
          PreIcon={t.icon && t.icon}
          disabled={t.disabled}
        >
          {t.name}
        </Button>
      ))}
    </nav>
  )
}

export default Tabs

Tabs.defaultProps = {
  tabs: [],
  type: 'space',
  orientation: 'horizontal'
}
