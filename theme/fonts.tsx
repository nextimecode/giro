import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'DINNextLTW04-HeavyCondensed';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/DINNextLTPro-HeavyCondensed/DINNextLTW04-HeavyCondensed.ttf')
      }
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
