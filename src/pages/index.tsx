import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import NextLayout from 'components/templates/nextLayout'
import NextHero from 'components/organisms/nextHero'
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import NextFooter from 'components/organisms/nextFooter'

export default function Home() {
  return (
    <div>
      <Head>
        <title>O GIRO</title>
      </Head>

      <NextLayout>
        <NextHero />
        <SimpleGrid bgColor={'white'} columns={[1, 3]} spacing={10}>
          <Box w="100%" h="700">
            <Image alt={'Imagem de um piano'} src={'/images/piano.png'} width={600} height={670} />
          </Box>
          <Box w="100%" h="700" color={'black'}>
            <Heading>VOCÊ TOCANDO NO GIRO E NO ROCK IN RIO</Heading>
            <Text>
              Esse ano o Giro dará palco para a próxima geração de artistas que irá conquistar o
              mundo.
            </Text>
            <Text>
              No dia 28/08/2022, você terá a chance de tocar em um festival gratuito na Praça da
              Liberdade ganhando um cachê de R$8.000,00.
            </Text>
            <Text>
              A nossa comissão irá selecionar as 12 melhores bandas ou artistas inscritos, que irão
              disputar em uma votação popular 6 vagas para tocar no palco Giro na Praça da
              Liberdade.
            </Text>
          </Box>
          <Box w="100%" h="700" color={'black'}>
            <Heading color={'red.500'}>Cachê de R$8.000,00</Heading>
            <Text>
              A banda ou artista mais votado vai ainda tocar no Rock In Rio, dentro do espaço
              Gerdau.
            </Text>
            <Text>FICOU INTERESSADO?</Text>
            <Text>Acesse o regulamento e veja como participar.</Text>
            <Text>Inscrições de 25/07 a 31/07.</Text>
          </Box>
        </SimpleGrid>
        <Box bgColor={'blue.500'}>
          <Heading color={'yellow.500'}>SALVE NA AGENDA PARA NÃO PERDER A INSCRIÇÃO</Heading>
        </Box>
        <Image
          alt={'Imagem Gerdau mais Rock in Rio'}
          src={'/images/gerdauerockrio.png'}
          width={1920}
          height={551}
        />
        <SimpleGrid bgColor={'beige.500'} columns={[1, 2]} spacing={10}>
          <Box w="100%" color={'black'}>
            <Text>
              A Gerdau, a maior empresa Brasileira produtora de aço e uma das principais
              fornecedoras de aços longos nas Américas e de aços especiais no mundo, agora é
              parceira do GIRO.
            </Text>
          </Box>
          <Box w="100%" color={'black'}>
            <Text>
              A maior recicladora da América Latina mais uma vez vem reforçar seu compromisso com as
              futuras gerações, e o aço que já moldava um futuro mais sustentável, agora também vai
              moldar o Palco Mundo do Rock in Rio Brasil 2022!
            </Text>
          </Box>
        </SimpleGrid>
        <Image
          alt={'Imagem Gerdau mais Rock in Rio'}
          src={'/images/disco.png'}
          width={1920}
          height={212}
        />
        <Box w="100%" bgColor={'black.200'}>
          <Text>
            A Gerdau, a maior empresa Brasileira produtora de aço e uma das principais fornecedoras
            de aços longos nas Américas e de aços especiais no mundo, agora é parceira do GIRO.
          </Text>
        </Box>
      </NextLayout>
      <NextFooter />
    </div>
  )
}
