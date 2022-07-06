import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader, { NavItem } from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'
import { Container } from '@chakra-ui/react'

type Props = {
  navItems?: Array<NavItem>
  title?: string
  description?: string
  nextSocialNetwork?: string
  logoSrc?: string
  logoHeight?: number
  logoSubtitle?: string
  logoSubtitleColor?: string
}

const NextLayout = ({
  navItems,
  children,
  title = 'NeXTIME',
  description = 'Site da empresa NeXTIME, temos como visão: otimizar o tempo através do desenvolvimento de novas tecnologias, produtos inovadores, soluções criativas e educação. Possibilitando aos indivíduos gastarem suas energias realizando os seus sonhos.',
  logoSrc,
  logoHeight,
  logoSubtitle,
  logoSubtitleColor
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextHeader
        navItems={navItems}
        logoSrc={logoSrc}
        logoHeight={logoHeight}
        logoSubtitle={logoSubtitle}
        logoSubtitleColor={logoSubtitleColor}
      />

      <main>
        <Container maxW="container.lg" py={[8, 16]}>
          {children}
        </Container>
      </main>

      <NextFooter />
    </>
  )
}

export default NextLayout
