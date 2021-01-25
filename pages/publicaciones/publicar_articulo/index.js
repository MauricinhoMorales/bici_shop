import { color, Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Publicar_Articulo() {

  return (
    <>
      <Head>
        <title>Publicar Articulos</title>
      </Head>
      <Flex w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text> Esta es la Pagina de Publicar Articulos</Text>
        </Stack>
      </Flex>
    </>
  );
}