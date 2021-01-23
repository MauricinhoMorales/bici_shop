import { color, Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Compras() {

  return (
    <>
      <Head>
        <title>Compras</title>
      </Head>
      <Flex bg="red.500" w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text textColor="yellow"> Esta es la Pagina de Compras</Text>
        </Stack>
      </Flex>
    </>
  );
}