import { Stack, Flex, Text, useBreakpointValue, Container } from '@chakra-ui/react'
import Image from 'next/image'

export default function NextWithBackgroundImageFooter() {
  return (
    <Flex
      w={'full'}
      minH={'100vh'}
      backgroundImage={'url(/images/verbo.png)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Container maxW="container.lg">
        <Stack
          direction={['column', 'row']}
          align="center"
          h={'100%'}
          w={'full'}
          gap={[10, 40]}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack maxW={'xl'} align={'flex-center'} spacing={1} px={[8, 0]} pt={[12, 0]}>
            <Image alt={'Verbo'} src={'/images/verbo.svg'} width={297} height={340} />
          </Stack>
          <Stack maxW={'xl'} align={'flex-start'} spacing={6} color={'#EAD6BA'}>
            <Text>
              O Verbo Gen�leza é um projeto que acredita que é possível transformar o mundo por meio
              de a�tudes gen�s. E, por isso, desde 2016, ele encanta e inspira quem mora e passa por
              Belo Horizonte com ações e a�vidades gratuitas realizadas nos espaços urbanos da
              capital.
            </Text>
            <Text>
              No Palco Liberdade, o Verbo Gen�leza se junta ao MM Gerdau em prol do incen�vo da arte
              local. Com sua curadoria de expositores locais para a nossa feira e um inesquecível
              show de luzes na fachada do Prédio Rosa, o Verbo Gen�leza busca inspirar os seus
              valores no público.
            </Text>
            <Text>Confira a nossa programação para saber mais.</Text>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  )
}
