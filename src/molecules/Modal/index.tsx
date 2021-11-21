/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react'
import ReactDom from 'react-dom'
import { css, jsx } from '@emotion/react'
import Global, { common } from '../../styles/global'
// eslint-disable-next-line no-unused-vars
import { commonProps } from '../../utils/commonProps'
// eslint-disable-next-line no-unused-vars
import Card, { cardProps } from '../../atoms/Card'
import CloseIcon from '../../atoms/Icons/close'
import Button from '../../atoms/Button'
import { grey } from '../../styles/colors'

export type modalProps = {
  visible: boolean
  zIndex?: number
  width?: number
  closable?: boolean
  keyboardEscape?: boolean
  onClose?: () => {}
}

// Todo fix this type
const Modal: any = ({
  visible,
  zIndex = 1000,
  closable,
  keyboardEscape,
  onClose,
  width,
  title,
  footer,
  size,
  children,
  image,
  id,
  className,
  style
}: modalProps & cardProps & commonProps) => {
  const styles = css`
    ${common}
    z-index: ${zIndex};
    > div:nth-child(1) {
      position: fixed;
      z-index: ${zIndex + 2};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    > div:nth-child(2) {
      position: fixed;
      z-index: ${zIndex + 1};
      top: 0%;
      left: 0%;
      background: ${grey[100]};
      width: 100vw;
      height: 100vh;
      opacity: 0.5;
    }
  `
  const close = () => closable && onClose && onClose()

  if (!visible) {
    return null
  }

  useEffect(() => {
    const closeEvent = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        close()
      }
    }
    if (keyboardEscape) {
      window.addEventListener('keydown', closeEvent)
      return () => window.removeEventListener('keydown', closeEvent)
    } else {
      return () => {}
    }
  }, [keyboardEscape])

  return ReactDom.createPortal(
    visible ? (
      <div css={styles}>
        <Global />
        <Card
          id={id}
          style={style}
          className={className}
          width={width}
          title={title}
          footer={footer}
          size={size}
          children={children}
          image={image}
          topAction={
            <Button
              style={{ padding: '0px' }}
              variant='link'
              PreIcon={CloseIcon}
              onClick={() => close()}
            />
          }
        />
        <div role='tabpanel' onClick={() => close()} />
      </div>
    ) : null,
    document.body
  )
}

export default Modal

Modal.defaultProps = {
  zIndex: 1000,
  visible: true,
  closable: true,
  keyboardEscape: true,
  onClose: () => {}
}
