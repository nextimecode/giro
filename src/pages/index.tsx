import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import NextLayout from 'components/templates/nextLayout'
import NextHero from 'components/organisms/nextHero'
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Grid,
  GridItem,
  Container,
  Stack
} from '@chakra-ui/react'
import NextFooter from 'components/organisms/nextFooter'
import Link from 'next/link'
import NextWithBackgroundImage from 'components/organisms/NextWithBackgroundImage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>O GIRO</title>
      </Head>

      <NextLayout>
        <NextHero />
        <NextWithBackgroundImage />
        <Image
          alt={'Imagem Gerdau mais Rock in Rio'}
          src={'/images/superfold.png'}
          width={1920}
          height={1174}
        />
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
              <Heading color={'#FFCB07'} textAlign={['center', 'start']}>
                O MOVIMENTO
              </Heading>
              <Text maxW={'300px'} py={4} textAlign={['center', 'start']}>
                O Giro é um movimento que busca impulsionar a cena cultural mineira. Em parceria com
                grandes marcas organizamos projetos que projetam a cultura mineira para o mundo.{' '}
              </Text>
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
        <SimpleGrid bgColor={'beige.500'} columns={[1, 2]} py={12} gap={6}>
          <Container w="100%" color={'black'}>
            <Heading fontSize={'xl'}>
              A Gerdau, a maior empresa Brasileira produtora de aço e uma das principais
              fornecedoras de aços longos nas Américas e de aços especiais no mundo, agora é
              parceira do GIRO.
            </Heading>
          </Container>
          <Container w="100%" color={'black'}>
            <Text>
              A maior recicladora da América Latina mais uma vez vem reforçar seu compromisso com as
              futuras gerações, e o aço que já moldava um futuro mais sustentável, agora também vai
              moldar o Palco Mundo do Rock in Rio Brasil 2022!
            </Text>
          </Container>
        </SimpleGrid>
      </NextLayout>
      <NextFooter />
    </div>
  )
}
