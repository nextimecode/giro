import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import NextButton from '../components/atoms/nextButton'
import { Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NeXTIME Chakra UI</title>
        <meta name="description" content="Site da empresa NeXTIME" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading as="h1" size="lg" color={'yellow.500'}>
          SALVE NA AGENDA<br></br>PARA NÃO PERDER<br></br>
          <Text as="h1" size="lg" color={'beige.500'}>
            A INSCRIÇÃO
          </Text>
        </Heading>
        <NextButton>White</NextButton>
        <NextButton bg="primary-dark">Dark</NextButton>
      </main>

      <footer>
        <Image src="/images/logos/logo_nextime.svg" alt="NeXTIME Logo" width={146} height={45} />
      </footer>
    </div>
  )
}
