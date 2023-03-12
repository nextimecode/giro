import React from 'react'
import Image from 'next/image'
import NextJSLink from 'next/link'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  useDisclosure,
  Container,
  HStack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'

export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'O GIRO',
    href: '/'
  },
  // {
  //   label: 'PALCO PRO FUTURO',
  //   href: '#'
  // },
  {
    label: 'GERDAU',
    href: '#gerdau'
  },
  // {
  //   label: 'RIR',
  //   href: '#'
  // },
  {
    label: 'REDES SOCIAIS',
    href: '#redessocias'
  }
  // {
  //   label: 'BAIXE O REGULAMENTO',
  //   href: '#'
  // }
]

type Props = {
  navItems?: Array<NavItem>
  logoSrc?: string
  logoWidth?: number
  logoHeight?: number
  logoAlt?: string
  logoSubtitle?: string
  logoSubtitleColor?: string
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text fontWeight={600} color={'white'} _hover={{ color: 'next-primary' }}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNav = ({ navItems = NAV_ITEMS }: Props) => {
  return (
    <Stack bg={'black.200'} p={4}>
      {navItems.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const NextHeader = ({
  navItems = NAV_ITEMS,
  logoSrc = '/images/logos/logo.svg',
  logoWidth = 170,
  logoHeight = 50,
  logoAlt = 'Logo',
  logoSubtitle,
  logoSubtitleColor = 'next-primary'
}: Props) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Container maxW="container.lg">
      <Flex color={'white'} align={'center'}>
        <Box display={{ base: 'block', md: 'none' }}>
          <Image src={logoSrc} alt={logoAlt} width={85} height={25} />
        </Box>
        <Flex>
          <Box display={{ base: 'none', md: 'block' }}>
            <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} />
          </Box>
          {logoSubtitle && (
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color={logoSubtitleColor}>
              {logoSubtitle}
            </Text>
          )}
        </Flex>
        <Stack flex={{ base: 1 }} justify={'flex-end'} direction={'row'}>
          <HStack spacing={{ base: 3, md: 4 }}>
            <NextJSLink href={'https://www.facebook.com/dobrasil.live/'}>
              <a target="_blank" rel="noreferrer">
                <Image alt={'Logo Facebook'} src={'/images/facebook.svg'} width={31} height={31} />
              </a>
            </NextJSLink>
            <NextJSLink href={'https://www.instagram.com/boraprogiro/?hl=pt-br'}>
              <a target="_blank" rel="noreferrer">
                <Image
                  alt={'Logo Instagram'}
                  src={'/images/instagram.svg'}
                  width={31}
                  height={31}
                />
              </a>
            </NextJSLink>
            <NextJSLink href={'https://vimeo.com/dobrasil'}>
              <a target="_blank" rel="noreferrer">
                <Image alt={'Logo Youtube'} src={'/images/youtube.svg'} width={31} height={31} />
              </a>
            </NextJSLink>
          </HStack>
        </Stack>
        <Flex ms={12}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={7} h={7} />}
            variant={'ghost'}
            color={'beige.500'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Container>
  )
}

export default NextHeader
