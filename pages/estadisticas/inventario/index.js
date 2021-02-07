import { color, Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Estadisticas_Inventario() {

  return (
    <>
      <Head>
        <title>Estadisticas Inventario</title>
      </Head>
      <Flex w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text> Esta es la Pagina de Estadisticas de Inventario</Text>
        </Stack>
      </Flex>
    </>
  );
}