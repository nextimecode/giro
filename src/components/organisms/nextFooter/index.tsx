import React from 'react'
import packageInfo from '../../../../package.json'

import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import NextimeSvg from '../../atoms/nextimeSvg'
import NextLink from 'next/link'

const NeXTIMEColor = '#202F4F'
const version = packageInfo.version

const NextFooter = () => {
  return (
    <Flex
      bgColor="primary-lighter"
      color="white"
      fontSize="sm"
      w="100%"
      display={['block', 'flex']}
      alignItems="center"
      h={[40, 14]}
      bottom={0}
    >
      <Box as="div" w={['100%', '50%']} textAlign="center" py={[3, 4]}>
        <NextLink href="#">
          <a target="_blank">Baixe o regulamento</a>
        </NextLink>
      </Box>
      <Box as="div" w={['100%', '50%']} textAlign="center" py={[3, 4]}>
        Copyright © {new Date().getFullYear()} | GIRO | v{version}
      </Box>
      <Box as="div" placeContent="center" w={['100%', '50%']} py={[3, 4]}>
        <HStack display="flex" placeContent={['center', 'auto']}>
          <Box as="span">Desenvolvido por </Box>
          <Link
            href="https://nextime.com.br"
            _hover={{
              transition: '0.3s',
              fill: NeXTIMEColor
            }}
            transition="0.3s"
            fill="white"
          >
            <NextimeSvg size={1.5} />
          </Link>
        </HStack>
      </Box>
    </Flex>
  )
}

export default NextFooter
