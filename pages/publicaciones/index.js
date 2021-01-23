import { Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Publicaciones() {

  return (
    <>
      <Head>
        <title>Publicaciones</title>
      </Head>
      <Flex bg="red.500" w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text textColor="white"> Esta es la Pagina de Publicaciones</Text>
        </Stack>
      </Flex>
    </>
  );
}
