/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/react'
import Global from '../../styles/global'
import { grey, red } from '../../styles/colors'
import body, { bodyBig } from '../../styles/font'
import Check from '../Icons/check'
import Minus from '../Icons/minus'

type CheckBoxProps = {
  className?: string
  id: string
  label: string
  value?: string
  checked?: Boolean
  name?: string
  helpText?: string
  error?: string
  disabled?: boolean
  labelHidden?: boolean
  seperator?: boolean
  isIntermediate?: boolean
  style?: React.CSSProperties
  ref?: React.Ref<HTMLButtonElement> | undefined
  onChange?(value: boolean, id: string): void
  onFocus?(): void
  onBlur?(): void
}

interface CheckboxHandles {
  focus(): void
}

export const Checkbox = React.forwardRef<CheckboxHandles, CheckBoxProps>(
  ({
    className,
    id,
    label,
    value,
    helpText,
    name,
    checked,
    error,
    disabled,
    labelHidden,
    style,
    ref,
    onChange,
    onBlur,
    onFocus,
    seperator,
    isIntermediate
  }: CheckBoxProps) => {
    const inputNode = React.useRef<HTMLInputElement>(null)
    const isChecked = !isIntermediate && Boolean(checked)
    const [keyFocused, setKeyFocused] = React.useState(false)

    const handleBlur = () => {
      onBlur && onBlur()
      setKeyFocused(false)
    }

    const handleInput = () => {
      if (onChange == null || inputNode.current == null || disabled) {
        return
      }
      onChange(!inputNode.current.checked, id)
      inputNode.current.focus()
    }

    const handleKeyUp = (event: React.KeyboardEvent) => {
      const { keyCode } = event
      !keyFocused && setKeyFocused(true)
      if (keyCode === 32) {
        handleInput()
      }
    }

    const eves: any = {
      focus: () => {
        if (inputNode.current) {
          inputNode.current.focus()
        }
      }
    }

    React.useImperativeHandle(ref, () => eves)

    const styles = css`
      display: inline-flex;
      padding: 12px 6px;
      cursor: pointer;

      :hover {
        border-radius: 8px;
        background: ${grey[300]};
      }

      :active {
        border-radius: 8px;
        box-shadow: 0 0 0 2px ${grey[500]};
      }

      :focus {
        border-radius: 8px;
        box-shadow: 0 0 0 2px ${grey[500]};
      }

      ${disabled &&
      css`
        cursor: not-allowed;
        :hover {
          background: transparent;
        }
      `}

      ${error &&
      css`
        background: ${red[100]};
      `};

      ${seperator &&
      css`
        border-bottom: 1px solid ${grey[400]};
      `}

      span {
        input[type='checkbox'] {
          position: absolute;
          top: 0;
          clip: rect(1px, 1px, 1px, 1px);
          overflow: hidden;
          height: 1px;
          width: 1px;
          padding: 0;
          border: 0;
        }
      }
    `

    const checkBoxFilledStyles = css`
      background: ${!disabled ? grey[900] : grey[400]};
      border-color: ${!disabled ? grey[900] : grey[400]};
      ${error &&
      css`
        background: ${red[600]};
        border-color: ${red[600]};
      `}
    `

    const checkBoxStyles = css`
      position: relative;
      border-radius: 6px;
      border: 2px solid ${!disabled ? grey[400] : grey[300]};
      background: ${grey[100]};
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      ${error &&
      css`
        background: ${red[200]};
        border-color: ${red[600]};
      `};
      ${(isChecked || isIntermediate) && checkBoxFilledStyles};
    `

    const labelStyles = css`
      display: flex;
      flex-flow: column;
      margin-left: 14px;
      max-width: 210px;

      ${labelHidden &&
      css`
        display: none;
      `}

      b {
        ${bodyBig}
        color: ${!disabled ? grey[900] : grey[400]};
        line-height: 24px;
      }

      span {
        ${body}
        margin-top: 6px;
        color: ${!disabled ? grey[600] : grey[400]};
      }
    `

    return (
      <label
        onClick={handleInput}
        htmlFor={id}
        className={className}
        style={style}
        css={styles}
      >
        <Global />
        <span style={{ position: 'relative' }}>
          <input
            onKeyUp={handleKeyUp}
            ref={inputNode}
            id={id}
            name={name}
            value={value}
            type='checkbox'
            checked={isChecked}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={handleBlur}
            onClick={(e) => e.stopPropagation()}
            onChange={() => {}}
          />
        </span>
        <span css={checkBoxStyles}>
          {isChecked && <Check />}
          {isIntermediate && <Minus />}
        </span>
        <span css={labelStyles}>
          <b>{label}</b>
          {error && <span style={{ color: red[600] }}>{error}</span>}
          {helpText && <span>{helpText}</span>}
        </span>
      </label>
    )
  }
)

export default Checkbox

Checkbox.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  labelHidden: false,
  id: new Date().toISOString(),
  checked: true,
  value: 'true'
}
