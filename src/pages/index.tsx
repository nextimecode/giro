import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import NextLayout from 'components/templates/nextLayout'
import NextHero from 'components/organisms/nextHero'
import {
  Box,
  Link,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  VStack,
  Center,
  Grid,
  GridItem,
  Container
} from '@chakra-ui/react'
import NextFooter from 'components/organisms/nextFooter'
import NextLink from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>O GIRO</title>
      </Head>

      <NextLayout>
        <NextHero />
        <Box bgColor={'white'}>
          <Container maxW="container.xl">
            <Grid py={8} mt={-2} templateColumns={['repeat(1, 1fr)', 'repeat(12, 1fr)']} gap={6}>
              <GridItem colSpan={3}>
                <Text
                  fontSize={'xs'}
                  textAlign={'center'}
                  fontFamily={'Montserrat'}
                  fontWeight={'bold'}
                  color={'black'}
                >
                  Projeto Executado por meio da Lei Estadual de Incentivo à Cultura CA
                  2018.13608.0160 CA 2018.13607.0372
                </Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  alt={'Logo da Lei de Incentivo à Cultura'}
                  src={'/images/logos/logo_cultura.svg'}
                  width={70}
                  height={70}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  alt={'Logo da Gerdau'}
                  src={'/images/logos/gerdau.svg'}
                  width={104}
                  height={98}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  alt={'Logo da Do Brasil'}
                  src={'/images/logos/dobrasil.svg'}
                  width={54}
                  height={97}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  alt={'Logo Rede Minas'}
                  src={'/images/logos/redeminas.svg'}
                  width={110}
                  height={68}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  alt={'Logo da Radio Inconfidência'}
                  src={'/images/logos/radio.svg'}
                  width={84}
                  height={69}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  alt={'Logo da Verbo Gentileza'}
                  src={'/images/logos/verbo.svg'}
                  width={60}
                  height={97}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <Image
                  alt={'Logo da Do Brasil'}
                  src={'/images/logos/realizacao.svg'}
                  width={67}
                  height={97}
                />
              </GridItem>
              <GridItem colSpan={2} pt={12}>
                <Image
                  alt={'Logo da Ministerio'}
                  src={'/images/logos/governo.svg'}
                  width={214}
                  height={22}
                />
              </GridItem>
            </Grid>
          </Container>
        </Box>
        <Grid bgColor={'white'} templateColumns={['repeat(1, 1fr)', 'repeat(6, 1fr)']} pb={[12, 0]}>
          <GridItem colSpan={2}>
            <Box w="100%">
              <Image
                alt={'Imagem de um piano'}
                src={'/images/piano.png'}
                width={538}
                height={672}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={4}>
            <Container maxW="container.md" py={[0, 12]}>
              <Box color={'black'} pb={6}>
                <Heading>
                  Já pensou tocar na Praça da Liberdade no Palco Giro ganhando cachê de{' '}
                  <Text as="span" color={'red.500'}>
                    R$8.000,00
                  </Text>{' '}
                  e ainda ter a chance de tocar no Rock in Rio?
                </Heading>
              </Box>
              <SimpleGrid bgColor={'white'} columns={[1, 2]} spacing={4} p={0}>
                <VStack spacing={{ base: 3, md: 4 }} color={'black'}>
                  <Text>
                    Esse ano o Giro dará palco para a próxima geração de artistas que irá conquistar
                    o mundo e você pode fazer parte desse movimento.
                  </Text>
                  <Text>
                    O Festival será no dia 28/08/2022, na Praça da Liberdade. As inscrições começam
                    no dia 25/07 e vai até o dia 31/07.
                  </Text>
                  <Text>
                    A nossa comissão irá selecionar as 12 melhores bandas ou artistas inscritos, que
                    irão disputar em uma votação popular 6 vagas para tocar no palco Giro na Praça
                    da Liberdade.
                  </Text>
                </VStack>
                <Box color={'black'}>
                  <Text>
                    A banda ou artista mais votado vai, ainda, tocar no Rock In Rio dentro do espaço
                    Gerdau.
                  </Text>
                  <Heading size="md" py={4}>
                    FICOU INTERESSADO?
                  </Heading>
                  <Text>Acesse o regulamento e veja como participar.</Text>
                </Box>
              </SimpleGrid>
            </Container>
          </GridItem>
        </Grid>
        <Center bgColor={'blue.700'} textAlign={'center'} py={8}>
          <Link
            color={'yellow.500'}
            href={'https://forms.gle/X5p7DHfzkkAySZXp6'}
            isExternal
            textDecoration={'underline'}
            _hover={{
              color: 'white'
            }}
          >
            <Heading>
              Faça agora<br></br>
              sua inscrição
            </Heading>
          </Link>
        </Center>
        <Box
          id="gerdau"
          as={'iframe'}
          src={'https://www.youtube.com/embed/O8a-_mHmZeQ'}
          width="100%"
          sx={{
            aspectRatio: '16/9'
          }}
        />
        {/* <Image
          alt={'Imagem Gerdau mais Rock in Rio'}
          src={'/images/gerdauerockrio.png'}
          width={1920}
          height={551}
        /> */}
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
        <Box mt={[-5, -20]}>
          <Image
            alt={'Imagem Gerdau mais Rock in Rio'}
            src={'/images/disco.svg'}
            width={1920}
            height={218}
          />
        </Box>
        <Center pt={[6, 20]} pb={[6, 8]} w="100%" mt={[-5, -20]} bgColor={'black.200'}>
          <HStack spacing={{ base: 3, md: 6 }} id={'redessocias'}>
            <NextLink href={'https://pt-br.facebook.com/gerdau/'}>
              <a target="_blank" rel="noreferrer">
                <Image alt={'Logo Facebook'} src={'/images/facebook.svg'} width={31} height={31} />
              </a>
            </NextLink>
            <NextLink href={'https://www.instagram.com/gerdau/?hl=pt-br'}>
              <a target="_blank" rel="noreferrer">
                <Image
                  alt={'Logo Instagram'}
                  src={'/images/instagram.svg'}
                  width={31}
                  height={31}
                />
              </a>
            </NextLink>
            <NextLink href={'https://www.youtube.com/c/Gerdau-Brasil'}>
              <a target="_blank" rel="noreferrer">
                <Image alt={'Logo Youtube'} src={'/images/youtube.svg'} width={31} height={31} />
              </a>
            </NextLink>
          </HStack>
        </Center>
      </NextLayout>
      <NextFooter />
    </div>
  )
}
