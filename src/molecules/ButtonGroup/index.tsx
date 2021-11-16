/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import Button, { ButtonProps } from '../../atoms/Button'
import { css, jsx } from '@emotion/react'
import baseColor from '../../styles/colors'
import { common } from '../../styles/global'

const ButtonGroup = ({ children }: { children: ButtonProps[] }) => {
  const style = css`
    ${common}
    display: inline-flex;
    border-radius: 8px;
    :hover {
      box-shadow: 0 0 0 2px ${baseColor.secondary};
    }

    > button {
      border-radius: 0px;
      border-right: 2px solid ${baseColor.secondary};

      &:hover {
        box-shadow: none;
      }

      &:nth-child(1) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &:nth-last-child(1) {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-right: 0px;
      }
    }
  `
  return children.length > 0 ? <div css={style}>{children}</div> : null
}

export default ButtonGroup

ButtonGroup.defaultProps = {
  children: [
    <Button color='primary' key='1'>
      Primary
    </Button>,
    <Button color='secondary' key='2'>
      Secondary
    </Button>,
    <Button color='white' key='3'>
      White
    </Button>,
    <Button color='success' key='4'>
      Success
    </Button>,
    <Button color='warning' key='5'>
      Warning
    </Button>,
    <Button color='error' key='6'>
      Error
    </Button>,
    <Button color='info' key='7'>
      Info
    </Button>
  ]
}
