/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/react'
import Global, { common } from '../../styles/global'
import { grey } from '../../styles/colors'
import Check from '../Icons/check'
import Close from '../Icons/close'
import elevations from '../../styles/elevations'

export type ToggleProps = {
  className?: string
  id?: string
  checked: Boolean
  name?: string
  error?: boolean
  disabled?: boolean
  style?: React.CSSProperties
  ref?: React.Ref<HTMLButtonElement> | undefined
  trueIcon?: React.ReactElement<any, any>
  falseIcon?: React.ReactElement<any, any>
  onChange?(checked: boolean, name?: string): void
  onFocus?(): void
  onBlur?(): void
}

interface ToggleHandles {
  focus(): void
}

export const Toggle = React.forwardRef<ToggleHandles, ToggleProps>(
  ({
    id,
    className,
    checked,
    disabled,
    name,
    style,
    ref,
    onChange,
    onFocus
  }: ToggleProps) => {
    const inputNode = React.useRef<HTMLButtonElement>(null)
    const onClick = () => onChange && onChange(!checked, name)

    const eves: any = {
      focus: () => {
        if (inputNode.current) {
          inputNode.current.focus()
        }
      }
    }

    React.useImperativeHandle(ref, () => eves)

    const styles = css`
      ${common}
      width: 52px;
      height: 30px;
      background-color: ${grey[400]};
      border: none;
      border-radius: 40px;
      display: inline-flex;
      align-items: center;
      padding: 5px;
      margin: 4px;
      justify-content: flex-start;
      cursor: pointer;

      > span {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: ${grey[100]};
        display: inline-flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 12px;
          height: 12px;
          * {
            fill: ${grey[900]};
            stroke: ${grey[900]};
          }
        }
      }

      &:hover,
      &:focus,
      &:active {
        box-shadow: 0 0 0 2px ${grey[500]};
        > span {
          ${elevations[100]}
        }
      }

      ${checked &&
      css`
        justify-content: flex-end;
        background-color: ${grey[900]};
      `}

      ${disabled &&
      css`
        background-color: ${grey[300]};
        cursor: not-allowed;

        &:hover,
        &:focus {
          box-shadow: none;
          > span {
            box-shadow: none;
          }
        }

        span > svg {
          * {
            fill: ${grey[400]};
            stroke: ${grey[400]};
          }
        }
      `}
    `

    return (
      <button
        onFocus={onFocus}
        ref={inputNode}
        disabled={disabled}
        css={styles}
        onClick={onClick}
        className={className}
        id={id}
        style={style}
        role='switch'
      >
        <span style={{ display: 'none' }} aria-hidden='true'>
          off
        </span>
        <span style={{ display: 'none' }} aria-hidden='true'>
          on
        </span>
        <Global />
        <span>{checked ? <Check /> : <Close />}</span>
      </button>
    )
  }
)

export default Toggle

Toggle.defaultProps = {
  checked: true,
  name: 'switch',
  trueIcon: <Check />,
  falseIcon: <Close />,
  onChange: () => {}
}
