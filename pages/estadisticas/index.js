import { Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Estadisticas() {

  return (
    <>
      <Head>
        <title>Estadisticas</title>
      </Head>
      <Flex bg="red.500" w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text> Esta es la Pagina de Estadisticas</Text>
        </Stack>
      </Flex>
    </>
  );
}