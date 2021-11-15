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

export type ChoiceProps = {
  className?: string
  id?: string
  label: string
  value: string
  checked?: Boolean
  name?: string
  helpText?: string
  error?: string
  disabled?: boolean
  labelHidden?: boolean
  isIntermediate?: boolean
  style?: React.CSSProperties
  ref?: React.Ref<HTMLButtonElement> | undefined
  type: 'checkbox' | 'radio'
  onChange?(checked: boolean, label: string, name?: string): void
  onFocus?(): void
  onBlur?(): void
}

interface ChoiceHandles {
  focus(): void
}

export const Choice = React.forwardRef<ChoiceHandles, ChoiceProps>(
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
    isIntermediate,
    type
  }: ChoiceProps) => {
    const inputNode = React.useRef<HTMLInputElement>(null)
    const isChecked = !isIntermediate && Boolean(checked)
    const isCheckbox = type === 'checkbox'
    const isRadio = !isCheckbox
    const [keyFocused, setKeyFocused] = React.useState(false)

    const handleBlur = () => {
      onBlur && onBlur()
      setKeyFocused(false)
    }

    const handleInput = () => {
      if (onChange == null || inputNode.current == null || disabled) {
        return
      }
      onChange(!inputNode.current.checked, label, name)
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
      display: flex;
      padding: 10px 6px;
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
        border-radius: 8px;
      `};

      span {
        input[type='${type}'] {
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

    const radioStyles = css`
      position: relative;
      border-radius: 6px;
      background: ${grey[100]};
      border: 2px solid ${!disabled ? grey[400] : grey[300]};
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        display: none;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${grey[100]};
      }

      ${isChecked &&
      css`
        background: ${grey[900]};
        border: none;
        > span {
          display: inline;
        }
      `};

      ${error &&
      css`
        background: ${red[200]};
        border-color: ${red[600]};
        > span {
          background: ${red[600]};
        }
      `};

      ${disabled &&
      css`
        background: ${grey[400]};
        border: none;
        > span {
          background: ${grey[500]};
        }
      `}
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
            type={type}
            checked={isChecked}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={handleBlur}
            onClick={(e) => e.stopPropagation()}
            onChange={() => {}}
            aria-checked={isChecked}
          />
        </span>
        {isCheckbox && (
          <span css={checkBoxStyles}>
            {isChecked && <Check />}
            {isIntermediate && <Minus />}
          </span>
        )}
        {isRadio && <span css={radioStyles}>{isChecked && <span />}</span>}
        <span css={labelStyles}>
          <b>{label}</b>
          {error && <span style={{ color: red[600] }}>{error}</span>}
          {helpText && <span>{helpText}</span>}
        </span>
      </label>
    )
  }
)

export default Choice

Choice.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  labelHidden: false,
  id: new Date().toISOString(),
  checked: true,
  value: 'true',
  type: 'checkbox'
}
