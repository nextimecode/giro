import {
  Stack,
  Flex,
  Text,
  useBreakpointValue,
  Heading,
  Container,
  StackDivider
} from '@chakra-ui/react'

export default function NextWithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      minH={['80vh', '50vh']}
      backgroundImage={'url(/images/folder1.png)'}
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
              fontFamily={'AkiraExpandedDemo'}
            >
              PRESERVANDO A CULTURA
            </Heading>
            <Heading
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              textAlign="right"
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              fontFamily={'AkiraExpandedDemo'}
            >
              PROJETAMOS O FUTURO
            </Heading>
          </Stack>
          <Stack maxW={'xl'} align={'flex-start'} spacing={6}>
            <Text>
              A parceria entre a Gerdau e o Governo de Minas, por meio do MM Gerdau - Museu das
              Minas e do Metal, nasceu do compromisso com a preservação, manutenção e projeção da
              cultura. Em 2023, essa jornada completa 10 anos, com muito por vir.
            </Text>
            <Text>
              Marcando o início de um ano de celebrações dessa parceria, o MM Gerdau - Museu das
              Minas e do Metal convida o público para uma semana de programações inéditas e um final
              de semana de festa pela cultura, no período de 21 a 26 de março.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  )
}
