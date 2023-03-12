import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export type NextGiroFooterProps = {
  id?: string
  bg?: string
  image?: string
  width?: number
  height?: number
  alt?: string
}

const NextGiroFooter = ({
  image = '/images/footer.svg',
  width = 1920,
  height = 216,
  alt = 'Logos das empresas'
}: NextGiroFooterProps) => {
  return (
    <header>
      <Box py={8} bgColor={'white'} display={{ base: 'none', sm: 'block' }}>
        <Image alt={alt} src={image} width={width} height={height} />
      </Box>
      <Box p={8} bgColor={'white'} display={{ base: 'block', sm: 'none' }}>
        <Image alt={alt} src={'/images/footer_mobile.svg'} width={579} height={487} />
      </Box>
    </header>
  )
}

export default NextGiroFooter
