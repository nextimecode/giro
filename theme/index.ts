import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import config from './config'
import styles from './styles'

const theme = extendTheme({
  colors,
  config,
  styles,
  fonts: {
    heading: `'DINNextLTW04-HeavyCondensed', 'Roboto', sans-serif`,
    body: `'DINNextLTW04-HeavyCondensed', 'Roboto', sans-serif`
  }
})

export default theme
