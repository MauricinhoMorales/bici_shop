import { Flex, VStack, Stack, Text, Box, Center, Button } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import StatGeneral from '../../components/statsGeneral'

export default function Publicaciones() {

  const [altura, setAltura] = useState();
  const [ancho, setAncho] = useState(); 

  const Router = useRouter();

  const handleClick = () => {
    Router.replace('/publicaciones/publicar_articulo');
  };

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  },[]);
  
  return (
    <>
      <Head>
        <title>Publicaciones</title>
      </Head>
      <Flex w={ancho} h={altura - altura * 0.137} >
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text fontSize='5xl' fontWeight="1000" fontFamily="inherit" textColor="black">PUBLICAR</Text>
          <Center>
            <VStack direction="column" spacing="10px">
            <Button width={ancho*0.8} height={altura*0.2} bgColor={process.env.COLOR_BOTON} borderRadius="20px" onClick={handleClick}>
                <Text fontSize='5xl' fontStyle="italic" fontFamily="fantasy" color={process.env.COLOR_LETRAS_BOTON}>BICICLETAS</Text>
                </Button>
              <Button width={ancho*0.8} height={altura*0.2} bgColor={process.env.COLOR_BOTON} borderRadius="20px" onClick={handleClick}>
                <Text fontSize='5xl' fontStyle="italic" fontFamily="fantasy" color={process.env.COLOR_LETRAS_BOTON}>ACCESORIOS</Text>
                </Button>
              <Button width={ancho*0.8} height={altura*0.2} bgColor={process.env.COLOR_BOTON} borderRadius="20px" onClick={handleClick}>
                <Text fontSize='5xl' fontStyle="italic" fontFamily="fantasy" color={process.env.COLOR_LETRAS_BOTON}>REPUESTOS</Text>
                </Button>
            </VStack>
          </Center>
          <Box h="20px" />
          <StatGeneral />
        </Stack>
      </Flex>
    </>
  );
}
