import React from 'react'
import Head from 'next/head'
import NextLayout from 'components/templates/nextLayout'
import NextHero from 'components/organisms/nextHero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NeXTIME Chakra UI</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextLayout>
        <NextHero />
      </NextLayout>
    </div>
  )
}
