import { css } from '@emotion/react'

export const fonts = {
  monteserrat: 'Monteserrat'
}

export const display = css`
  font-size: 96px;
  line-height: 67px;
  letter-spacing: -0.032em;
  @media (max-width: 420px) {
    font-size: 48px;
    line-height: 62px;
    letter-spacing: -0.016em;
  }
`

export const headingBig = css`
  font-size: 60px;
  line-height: 84px;
  letter-spacing: -0.02em;
  @media (max-width: 420px) {
    font-size: 40px;
    line-height: 56px;
    letter-spacing: -0.0133333em;
  }
`

export const heading = css`
  font-size: 48px;
  line-height: 67.2px;
  letter-spacing: -0.016em;
  @media (max-width: 420px) {
    font-size: 48px;
    line-height: 62px;
    letter-spacing: -0.016em;
  }
`

export const subHeadingBig = css`
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -0.016em;
  @media (max-width: 420px) {
    line-height: 45px;
    letter-spacing: -0.0106667em;
  }
`

export const subHeading = css`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.08em;
  @media (max-width: 420px) {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.006em;
  }
`

export const bodyBig = css`
  font-size: 18px;
  line-height: 36px;
  letter-spacing: -0.006em;
  @media (max-width: 420px) {
    font-size: 16px;
    line-height: 27px;
    letter-spacing: -0.005em;
  }
`
export const body = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.005em;
  @media (max-width: 420px) {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.005em;
  }
`
export const caption = css`
  font-size: 14px;
  line-height: 23.8px;
  letter-spacing: -0.04em;
  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.004em;
  }
`

export default body

export const weight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  book: 800
}
