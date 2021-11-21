/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { css, jsx } from '@emotion/react'
import elevations from '../../styles/elevations'
import Global, { common } from '../../styles/global'
import { grey } from '../../styles/colors'
// eslint-disable-next-line no-unused-vars
import { commonProps } from '../../utils/commonProps'
import Typography from '../Typography'

export type cardProps = {
  topAction?: React.ReactElement
  footer?: React.ReactElement
  bordered?: boolean
  size?: 'small' | 'medium' | 'large'
  image?: string
  width?: number
}

const Card = ({
  title,
  topAction,
  footer,
  bordered,
  width,
  size,
  id,
  className,
  style,
  children,
  image
}: commonProps & cardProps) => {
  const styles = css`
    ${common}
    background: ${grey[100]};
    flex-flow: column;
    width: ${size === 'small'
      ? '400px'
      : size === 'medium'
      ? '600px'
      : '800px'};
    border-radius: 16px;
    overflow: hidden;

    ${bordered
      ? css`
          border: 2px solid ${grey[400]};

          :hover {
            border: 2px solid ${grey[500]};
          }
        `
      : css`
          ${elevations[200]}

          :hover {
            ${elevations[300]}
          }
        `}

    &,
    > div {
      display: flex;
    }

    > div {
      padding: ${size === 'small'
        ? '16px 24px'
        : size === 'medium'
        ? '20px 28px'
        : '24px 32px'};

      &[data-role='header'],
      &[data-role='footer'] {
        align-items: center;
      }

      &[data-role='header'] {
        border-bottom: 2px solid ${grey[400]};
      }

      &[data-role='footer'] {
        border-top: 2px solid ${grey[400]};
      }
    }

    ${width &&
    css`
      width: ${width}px;
    `}
  `

  return (
    <div id={id} style={style} className={className} css={styles}>
      <Global />
      {(title || topAction) && (
        <div data-role='header'>
          {title && <Typography type='subHeading'>{title}</Typography>}
          {topAction && <span style={{ marginLeft: 'auto' }}>{topAction}</span>}
        </div>
      )}
      {image && <img src={image} alt={title} />}
      <div data-role='body'>{children}</div>
      {footer && <div data-role='footer'>{footer}</div>}
    </div>
  )
}

export default Card

Card.defaultProps = {
  bordered: false,
  size: 'medium'
}
