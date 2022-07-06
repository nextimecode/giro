import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import NextLayout from 'components/templates/nextLayout'
import NextHero from 'components/organisms/nextHero'
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'

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
      </NextLayout>
    </div>
  )
}
