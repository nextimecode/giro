import React from 'react'
import '@fontsource/roboto'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Fonts from '../../theme/fonts'
import theme from '../../theme/'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
