import { Flex, Stack, Text, Box, Center, Spacer } from '@chakra-ui/react';
import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {

  const [altura, setAltura] = useState();
  const [ancho, setAncho] = useState();

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <Flex w={ancho} h={altura - altura * 0.137} bgImage="url('fondo.jpg')" direction="column">
        <Box h={altura * 0.08} />
        <Center>
          <Text textColor="black" fontSize='7xl' fontStyle="normal" fontFamily="fantasy">Esta es la Pagina de Bienvenida</Text>
        </Center>
        <Spacer />
        <Center>
          <Text textColor="white" fontSize='md' fontStyle="revert" fontFamily="unset">SELECCIONA CUALQUIER OPCIÓN DEL MENÚ ADYACENTE</Text>
        </Center>
        <Box h={altura * 0.02} />
      </Flex>
    </>
  )
}
