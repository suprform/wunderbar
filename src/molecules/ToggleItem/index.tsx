/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { css, jsx } from '@emotion/react'
// eslint-disable-next-line no-unused-vars
import Toggle, { ToggleProps } from '../../atoms/Toggle'
import { grey, red } from '../../styles/colors'
import { bodyBig } from '../../styles/font'

type ChoiceListPropTypes = {
  label: string
  helpText?: string
  error?: string
  Icon?: React.FunctionComponent<any>
  separator?: boolean
}

const ToggleItem = ({
  id,
  className,
  checked,
  disabled,
  name,
  label,
  helpText,
  Icon,
  style,
  ref,
  onChange,
  onFocus,
  separator,
  error
}: ToggleProps & ChoiceListPropTypes) => {
  const styles = css`
    display: flex;
    padding: 20px;

    div {
      display: flex;
      flex-flow: column;
      margin-right: 8px;
      cursor: pointer;

      b {
        display: inline-flex;
        align-items: center;

        > svg {
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }

        span {
          ${bodyBig}
        }
      }

      > span {
        margin-top: 8px;
        width: 300px;
        color: ${grey[600]};
      }
    }

    ${disabled &&
    css`
      cursor: not-allowed;

      div {
        cursor: not-allowed;
        b {
          svg {
            * {
              fill: ${grey[400]};
              stroke: ${grey[400]};
            }
          }

          > span {
            color: ${grey[400]};
          }
        }

        > span {
          color: ${grey[400]};
        }
      }
    `}

    ${separator &&
    css`
      border-bottom: 1px solid ${grey[400]};

      &:nth-last-child(1) {
        border-bottom: 0px;
      }
    `}
  `

  return (
    <label css={styles} className={className} id={id} style={style}>
      <div>
        <b>
          {Icon && <Icon />}
          <span>{label}</span>
        </b>
        {helpText && <span>{helpText}</span>}
        {error && (
          <span
            css={css`
              color: ${red[600]} !important;
            `}
          >
            {error}
          </span>
        )}
      </div>
      <Toggle
        checked={checked}
        disabled={disabled}
        name={name}
        ref={ref}
        onChange={onChange}
        onFocus={onFocus}
      />
    </label>
  )
}

export default ToggleItem

ToggleItem.defaultProps = {
  label: 'Want to go to the Autobahn?',
  helpText: `Germany's autobahns are famous for being among the few public roads in the world without blanket speed limits for cars and motorcycles`,
  checked: false,
  onChange: () => {}
}
