import { color, Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Estadisticas_Ventas() {

  return (
    <>
      <Head>
        <title>Estadisticas Ventas</title>
      </Head>
      <Flex w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text> Esta es la Pagina de Estadisticas de Ventas</Text>
        </Stack>
      </Flex>
    </>
  );
}