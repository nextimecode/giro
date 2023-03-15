import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import NextLayout from 'components/templates/nextLayout'
import NextHero from 'components/organisms/nextHero'
import { Box, Heading, Text, HStack, Grid, GridItem, Container, Stack } from '@chakra-ui/react'
import NextFooter from 'components/organisms/nextFooter'
import Link from 'next/link'
import NextWithBackgroundImage from 'components/organisms/NextWithBackgroundImage'
import NextWithBackgroundImageFooter from 'components/organisms/NextWithBackgroundImageFooter'
import NextGiroFooter from 'components/organisms/NextGiroFooter'

export default function Home() {
  return (
    <div>
      <Head>
        <title>O GIRO</title>
      </Head>

      <NextLayout>
        <NextHero />
        <Box h={'14px'} bgColor={'#C9996D'} mt={[0, -2]} />
        <NextWithBackgroundImage />
        <Box display={{ base: 'none', sm: 'block' }}>
          <Image
            alt={'Programacao mobile'}
            src={'/images/superfold.jpg'}
            width={1920}
            height={1174}
          />
        </Box>
        <Box display={{ base: 'block', sm: 'none' }}>
          <Image
            alt={'Programacao Desktop'}
            src={'/images/superfold_mobile.jpg'}
            width={1280}
            height={5827}
          />
        </Box>
        <Box h={'32px'} bgColor={'#003E74'} mt={[0, -2]} />
        <Grid
          bgColor={'#0778BE'}
          gap={4}
          templateColumns={['repeat(1, 1fr)', 'repeat(12, 1fr)']}
          mb={-2}
          px={[6, 12]}
          pb={[6, 0]}
        >
          <GridItem colSpan={7}>
            <Box w="100%" pt={6}>
              <Image alt={'Texto Giro'} src={'/images/giro_letra.svg'} width={927} height={420} />
            </Box>
          </GridItem>
          <GridItem colSpan={5}>
            <Container maxW="container.md" py={[0, 12]}>
              <Heading
                color={'#FFCB07'}
                textAlign={['center', 'start']}
                fontSize={['40px', '4xl', '76px']}
              >
                O MOVIMENTO
              </Heading>
              <Box py={4} textAlign={['center', 'start']} fontSize={'20px'}>
                <Text>O Giro é um movimento que busca impulsionar a cena cultural mineira.</Text>
                <Text>
                  Em parceria com grandes marcas, organizamos projetos que projetam a cultura
                  mineira para o mundo.
                </Text>
              </Box>
              <Stack justify={['center', 'start']} direction={'row'}>
                <HStack spacing={{ base: 3, md: 4 }}>
                  <Link href={'https://www.facebook.com/dobrasil.live/'}>
                    <a target="_blank" rel="noreferrer">
                      <Image
                        alt={'Logo Facebook'}
                        src={'/images/facebook.svg'}
                        width={31}
                        height={31}
                      />
                    </a>
                  </Link>
                  <Link href={'https://www.instagram.com/boraprogiro/?hl=pt-br'}>
                    <a target="_blank" rel="noreferrer">
                      <Image
                        alt={'Logo Instagram'}
                        src={'/images/instagram.svg'}
                        width={31}
                        height={31}
                      />
                    </a>
                  </Link>
                  <Link href={'https://vimeo.com/dobrasil'}>
                    <a target="_blank" rel="noreferrer">
                      <Image
                        alt={'Logo Youtube'}
                        src={'/images/youtube.svg'}
                        width={31}
                        height={31}
                      />
                    </a>
                  </Link>
                </HStack>
              </Stack>
            </Container>
          </GridItem>
        </Grid>
        <NextWithBackgroundImageFooter />
        <Box h={'14px'} bgColor={'#C9996D'} mt={[0, -2]} />
        <NextGiroFooter />
      </NextLayout>
      <NextFooter />
    </div>
  )
}
