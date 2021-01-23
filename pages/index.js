import { Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Iniciar Sesión</title>
      </Head>
      <Flex bg="blue.500" w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text> Esta es la Pagina de Bienvenida</Text>
        </Stack>
      </Flex>
    </>
  )
}
