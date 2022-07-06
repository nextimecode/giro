import NextFooter from 'components/organisms/nextFooter'
import React, { PropsWithChildren } from 'react'
import NextHeader, { NavItem } from '../../organisms/nextHeader'

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
  logoSrc,
  logoHeight,
  logoSubtitle,
  logoSubtitleColor
}: PropsWithChildren<Props>) => {
  return (
    <>
      <NextHeader
        navItems={navItems}
        logoSrc={logoSrc}
        logoHeight={logoHeight}
        logoSubtitle={logoSubtitle}
        logoSubtitleColor={logoSubtitleColor}
      />

      <main>{children}</main>
    </>
  )
}

export default NextLayout
