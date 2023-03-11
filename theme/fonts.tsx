import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'AkiraExpandedDemo';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/AkiraExpandedDemo.otf')
      }
      `}
  />
)

export default Fonts
