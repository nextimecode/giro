import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export type NextHeroProps = {
  id?: string
  bg?: string
  image?: string
  width?: number
  height?: number
  alt?: string
}

const NextHero = ({
  image = '/images/hero.png',
  width = 1920,
  height = 1061,
  alt = 'Imagem Hero'
}: NextHeroProps) => {
  return (
    <header>
      <Box display={{ base: 'none', sm: 'block' }}>
        <Image alt={alt} src={image} width={width} height={height} />
      </Box>
      <Box display={{ base: 'block', sm: 'none' }}>
        <Image alt={alt} src={'/images/hero_mobile.png'} width={750} height={400} />
      </Box>
    </header>
  )
}

export default NextHero
