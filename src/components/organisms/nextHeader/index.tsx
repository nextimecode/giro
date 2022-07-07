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
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'O GIRO'
  },
  {
    label: 'PALCO PRO FUTURO',
    href: '#'
  },
  {
    label: 'GERDAU',
    href: '#'
  },
  {
    label: 'RIR',
    href: '#'
  },
  {
    label: 'REDES SOCIAIS',
    href: '#'
  },
  {
    label: 'BAIXE O REGULAMENTO',
    href: '#'
  }
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
    <Stack bg={'gray.800'} p={4}>
      {navItems.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const NextHeader = ({
  navItems = NAV_ITEMS,
  logoSrc = '/images/logos/logo.svg',
  logoWidth = 340,
  logoHeight = 100,
  logoAlt = 'Logo',
  logoSubtitle,
  logoSubtitleColor = 'next-primary'
}: Props) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Container maxW="container.lg">
        <Flex color={'white'} minH={'70px'} align={'center'}>
          <Flex flex={{ base: 1 }} justify={{ base: 'center' }} alignItems={'center'}>
            <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} />
            {logoSubtitle && (
              <Text fontSize={{ base: 'lg', lg: 'xl' }} color={logoSubtitleColor}>
                {logoSubtitle}
              </Text>
            )}
          </Flex>
          <Stack flex={{ base: 1 }} justify={'flex-end'} direction={'row'} spacing={6}>
            <HStack spacing={{ base: 3, md: 6 }}>
              <NextJSLink href={'https://www.facebook.com/nextimetecnologia'}>
                <a target="_blank" rel="noreferrer">
                  <Icon
                    color="next-gray"
                    _hover={{ color: 'next-primary' }}
                    as={FaFacebookF}
                    w={6}
                    h={6}
                  />
                </a>
              </NextJSLink>
              <NextJSLink href={'https://www.instagram.com/nextimetec/'}>
                <a target="_blank" rel="noreferrer">
                  <Icon
                    color="next-gray"
                    _hover={{ color: 'next-primary' }}
                    as={FaInstagram}
                    w={6}
                    h={6}
                  />
                </a>
              </NextJSLink>
              <NextJSLink href={'https://www.linkedin.com/company/nextimetec/'}>
                <a target="_blank" rel="noreferrer">
                  <Icon
                    color="next-gray"
                    _hover={{ color: 'next-primary' }}
                    as={FaYoutube}
                    w={6}
                    h={6}
                  />
                </a>
              </NextJSLink>
            </HStack>
          </Stack>
          <Flex display={{ base: 'flex' }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={navItems} />
        </Collapse>
      </Container>
    </Box>
  )
}

export default NextHeader
