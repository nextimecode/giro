import React from 'react'
import packageInfo from '../../../../package.json'

import { Box, Flex, HStack } from '@chakra-ui/react'
import NextimeSvg from '../../atoms/nextimeSvg'
import Link from 'next/link'

const version = packageInfo.version

const NextFooter = () => {
  return (
    <Flex
      bgColor="black"
      color="white"
      fontSize="sm"
      w="100%"
      display={['block', 'flex']}
      alignItems="center"
      bottom={0}
    >
      <Box as="div" w={['100%', '50%']} textAlign="center" py={[3, 4]}>
        Copyright © {new Date().getFullYear()} | GIRO | v{version}
      </Box>
      <Box as="div" placeContent="center" w={['100%', '50%']} py={[3, 4]}>
        <HStack display="flex" placeContent={['center', 'auto']}>
          <Box as="span">Desenvolvido por </Box>
          <Link href="https://nextime.com.br">
            <a>
              <NextimeSvg size={1.5} />
            </a>
          </Link>
        </HStack>
      </Box>
    </Flex>
  )
}

export default NextFooter
