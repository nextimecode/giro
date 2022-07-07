import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'DINNextLTW04-HeavyCondensed';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/DINNextLTPro-HeavyCondensed/DINNextLTW04-HeavyCondensed.ttf')
      }
      `}
  />
)

export default Fonts
