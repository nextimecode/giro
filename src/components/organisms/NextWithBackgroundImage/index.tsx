import {
  Stack,
  Flex,
  Text,
  useBreakpointValue,
  Heading,
  HStack,
  Container,
  StackDivider
} from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      minH={'50vh'}
      backgroundImage={'url(/images/folder1.png)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Container maxW="container.lg">
        <HStack
          h={'100%'}
          w={'full'}
          gap={40}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack
            maxW={'xl'}
            align={'flex-center'}
            divider={<StackDivider borderColor={'#fff'} borderWidth="5px" />}
            spacing={1}
          >
            <Heading
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '2xl' })}
            >
              PRESERVANDO A CULTURA
            </Heading>
            <Heading
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              textAlign="right"
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              PROJETAMOS O FUTURO
            </Heading>
          </Stack>
          <Stack maxW={'xl'} align={'flex-start'} spacing={6}>
            <Text>
              A parceria entre a Gerdau e o Governo de Minas por meio do MM Gerdau - Museu das Minas
              e do Metal, nasceu do compromisso com a preservação, manutenção e projeção da cultura.
              Em 2023, essa jornada completa 10 anos, com muito por vir. Marcando o início de um ano
              de celebrações dessa parceria, o MM Gerdau convida o público para uma semana de
              programações inéditas e mais dois dias de muita festa na rua, no período de 21 a 26 de
              março.
            </Text>
          </Stack>
        </HStack>
      </Container>
    </Flex>
  )
}
